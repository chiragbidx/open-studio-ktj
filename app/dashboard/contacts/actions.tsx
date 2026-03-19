"use server";

import { z } from "zod";
import { db } from "@/lib/db/client";
import { contacts } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { getAuthSession } from "@/lib/auth/session";

// Input validation schemas
const createContactSchema = z.object({
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  notes: z.string().optional()
});

const updateContactSchema = createContactSchema.extend({
  id: z.string().min(1)
});

export async function createContactAction(formData: FormData) {
  const input = createContactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    company: formData.get("company") ?? "",
    notes: formData.get("notes") ?? ""
  });

  if (!input.success) {
    return { error: input.error.flatten().fieldErrors };
  }

  const session = await getAuthSession();
  if (!session) return { error: { auth: ["Not authenticated"] } };

  // Team context from server session, ensure user is a member
  // For now, assume user has one team (multi-team can extend this logic)
  const teamId = await db.query.teamMembers.findFirst({
    where: eq("user_id", session.userId)
  }).then(row => row?.team_id);

  if (!teamId) return { error: { auth: ["User is not on a team"] } };

  const insertData = {
    teamId,
    ...input.data
  };

  await db.insert(contacts).values(insertData);

  return { success: true };
}

export async function updateContactAction(formData: FormData) {
  const input = updateContactSchema.safeParse({
    id: formData.get("id"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    company: formData.get("company") ?? "",
    notes: formData.get("notes") ?? ""
  });

  if (!input.success) {
    return { error: input.error.flatten().fieldErrors };
  }

  const session = await getAuthSession();
  if (!session) return { error: { auth: ["Not authenticated"] } };

  // Team restriction
  const teamId = await db.query.teamMembers.findFirst({
    where: eq("user_id", session.userId)
  }).then(row => row?.team_id);

  if (!teamId) return { error: { auth: ["User is not on a team"] } };

  await db
    .update(contacts)
    .set({
      firstName: input.data.firstName,
      lastName: input.data.lastName,
      email: input.data.email,
      phone: input.data.phone ?? "",
      company: input.data.company ?? "",
      notes: input.data.notes ?? ""
    })
    .where(and(eq(contacts.id, input.data.id), eq(contacts.teamId, teamId)));

  return { success: true };
}

export async function deleteContactAction(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string" || !id) {
    return { error: { id: ["Invalid contact ID."] } };
  }

  const session = await getAuthSession();
  if (!session) return { error: { auth: ["Not authenticated"] } };

  const teamId = await db.query.teamMembers.findFirst({
    where: eq("user_id", session.userId)
  }).then(row => row?.team_id);

  if (!teamId) return { error: { auth: ["User is not on a team"] } };

  await db.delete(contacts).where(and(eq(contacts.id, id), eq(contacts.teamId, teamId)));

  return { success: true };
}