import type { Config } from "drizzle-kit"

export default {
    schema: "src/db/index.ts",
    // tablesFilter: ["prefix_*"],
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DB_URL as string
    }
} satisfies Config
