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

  // For now, use first team for user (personal/team-tenant model)
  const memberRow = await db.query.teamMembers.findFirst({
    where: eq("user_id", session.userId)
  });

  if (!memberRow) redirect("/dashboard/team");

  const teamId = memberRow.team_id;

  const contactList = await db
    .select()
    .from(contacts)
    .where(eq(contacts.teamId, teamId))
    .orderBy(contacts.createdAt);

  return <ContactsClient contacts={contactList} />;
}