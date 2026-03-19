export default function CompaniesPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h2 className="text-2xl font-semibold">Companies</h2>
      <div className="rounded-lg border bg-card p-8 text-center shadow max-w-md">
        <p className="mb-4 text-muted-foreground">No companies found. Add your first company to get started.</p>
        <a href="/dashboard/companies/new" className="btn btn-primary">
          Add Company
        </a>
      </div>
    </div>
  );
}