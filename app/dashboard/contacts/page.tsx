export default function ContactsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h2 className="text-2xl font-semibold">Contacts</h2>
      <div className="rounded-lg border bg-card p-8 text-center shadow max-w-md">
        <p className="mb-4 text-muted-foreground">No contacts found. Start building your customer database.</p>
        <a href="/dashboard/contacts/new" className="btn btn-primary">
          Add Contact
        </a>
      </div>
    </div>
  );
}