import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
})

export const passwordAuthTable = pgTable("password_auth", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  id: serial("id").primaryKey(),
  password: text("password"),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
})

export type PasswordAuthTable = typeof passwordAuthTable.$inferSelect
export type UsersTable = typeof usersTable.$inferSelect
