"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideUsers, LucideSettings, LucideLayoutDashboard, LucideGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LucideLayoutDashboard,
  },
  {
    href: "/dashboard/team",
    label: "Team",
    icon: LucideUsers,
  },
  {
    href: "/dashboard/contacts",
    label: "Contacts",
    icon: LucideGrid,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: LucideSettings,
  }
];

export function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1">
      {sidebarItems.map(({ href, label, icon: Icon }) => (
        <Link
          href={href}
          key={href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors",
            pathname === href
              ? "bg-muted text-foreground"
              : "text-muted-foreground"
          )}
          aria-current={pathname === href ? "page" : undefined}
        >
          <Icon className="size-4" aria-hidden="true" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}