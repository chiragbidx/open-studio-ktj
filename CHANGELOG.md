# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2026-03-19
- Hardened `scripts/dev-supervisor.js` for Railway/container runtime:
  - `GIT_BOOTSTRAP` now defaults to `true` when `REPO_URL` is provided (can be disabled via `GIT_BOOTSTRAP=false`).
  - `GIT_POLL` default is `true` (can be disabled via `GIT_POLL=false`).
  - Removed destructive runtime git cleanup behavior (`git clean -fd`).
  - Added `pnpm exec next` fallback when `.bin/next` is not found.
  - Added explanatory inline comments for future maintainers/agents.
- Updated Next config to set explicit Turbopack root to project root (`turbopack.root`).
- Updated Docker app image install step to force clean dependency install:
  - `RUN rm -rf node_modules && pnpm install --prefer-offline --no-frozen-lockfile`
- Updated README supervisor/runtime notes to match current defaults and env-file behavior.

## 2026-03-20
- Added production-grade Contacts CRUD feature to dashboard:
  - Schema and migration for `contacts` table (team scoped)
  - Contacts CRUD server actions (create, update, delete)
  - Contacts client and server page (`/dashboard/contacts`)
  - Wired link to sidebar nav
  - Ready for DB migration and end-to-end use
  - UX follows RelateCRM and team model conventions
  - No open API keys or public unprotected endpoints
- Updated CHANGELOG.md accordingly.

## 2026-03-20
- Fixed critical bug: replaced the use of `db.query.teamMembers.findFirst` (not supported) with correct Drizzle ORM select call in contacts CRUD server/page logic.
- Updated: `app/dashboard/contacts/page.tsx`, `app/dashboard/contacts/actions.tsx`.