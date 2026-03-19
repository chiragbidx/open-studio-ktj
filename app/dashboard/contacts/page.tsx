import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { contacts, teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import ContactsClient from "./client";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find the user's team membership
  const [memberRow] = await db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!memberRow) redirect("/dashboard/team");

  const teamId = memberRow.teamId;

  const contactList = await db
    .select()
    .from(contacts)
    .where(eq(contacts.teamId, teamId))
    .orderBy(contacts.createdAt);

  return <ContactsClient contacts={contactList} />;
}