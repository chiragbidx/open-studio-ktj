export default function OverviewPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h2 className="text-2xl font-semibold">CRM Overview</h2>
      <div className="rounded-lg border bg-card p-8 text-center shadow max-w-md">
        <p className="mb-4 text-muted-foreground">No data to display yet. Add contacts and companies to see your team's activity here.</p>
        <div className="flex gap-2 justify-center">
          <a href="/dashboard/contacts" className="btn btn-primary">
            Add Contact
          </a>
          <a href="/dashboard/companies" className="btn btn-outline btn-secondary">
            Add Company
          </a>
        </div>
      </div>
    </div>
  );
}