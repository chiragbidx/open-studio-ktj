"use client";

export default function Client({ greeting, firstName }: { greeting: string; firstName: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h2 className="text-2xl font-semibold">Welcome to RelateCRM</h2>
      <div className="rounded-lg border bg-card p-8 text-center shadow max-w-md">
        <p className="mb-4 text-muted-foreground">
          Get started by adding your first contact or company. RelateCRM helps your team stay organized and connected.
        </p>
        <div className="flex gap-2 justify-center">
          <a href="/dashboard/contacts/new" className="btn btn-primary">
            Add Contact
          </a>
          <a href="/dashboard/companies/new" className="btn btn-outline btn-secondary">
            Add Company
          </a>
        </div>
      </div>
    </div>
  );
}