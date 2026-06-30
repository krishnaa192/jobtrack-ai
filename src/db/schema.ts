import {
  pgTable,
  text,
  timestamp,
  integer,
  pgEnum,
  uuid,
  primaryKey,
} from "drizzle-orm/pg-core";

// =======================
// ENUMS
// =======================

export const jobStatusEnum = pgEnum("job_status", [
  "wishlist",
  "applied",
  "oa",
  "interview",
  "hr",
  "offer",
  "rejected",
]);

export const priorityEnum = pgEnum("priority", [
  "low",
  "medium",
  "high",
]);

// =======================
// AUTH.JS TABLES
// =======================

export const users = pgTable("users", {
  id: text("id").primaryKey(),

  name: text("name"),

  email: text("email").unique(),

  emailVerified: timestamp("emailVerified"),

  image: text("image"),
});

export const accounts = pgTable(
  "accounts",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),

    type: text("type").notNull(),

    provider: text("provider").notNull(),

    providerAccountId: text("providerAccountId").notNull(),

    refresh_token: text("refresh_token"),

    access_token: text("access_token"),

    expires_at: integer("expires_at"),

    token_type: text("token_type"),

    scope: text("scope"),

    id_token: text("id_token"),

    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),

  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  expires: timestamp("expires").notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),

    token: text("token").notNull(),

    expires: timestamp("expires").notNull(),
  },
  (table) => ({
    compoundKey: primaryKey({
      columns: [table.identifier, table.token],
    }),
  })
);

// =======================
// APP TABLES
// =======================

export const jobs = pgTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),

  role: text("role").notNull(),

  company: text("company").notNull(),

  location: text("location"),

  salary: integer("salary"),

  jobUrl: text("jobUrl"),

  notes: text("notes"),

  status: jobStatusEnum("status").default("wishlist"),

  priority: priorityEnum("priority").default("medium"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});