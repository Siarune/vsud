import { sql } from "@vercel/postgres"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

const db = drizzle(sql)

export const table = pgTable("Table", {
    id: serial("id").primaryKey(),
    createdAt: timestamp("createdAt").defaultNow(),
    text: text("text").notNull()
})

export default db
