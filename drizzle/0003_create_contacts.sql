-- Migration for RelateCRM - Add contacts table
CREATE TABLE IF NOT EXISTS "contacts" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" text NOT NULL REFERENCES "teams" ("id") ON DELETE CASCADE,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL DEFAULT '',
  "company" text NOT NULL DEFAULT '',
  "notes" text NOT NULL DEFAULT '',
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);