import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  fullName: text("full_name"),
  id: serial("id").primaryKey(),
  phone: varchar("phone", { length: 100 }),
})
