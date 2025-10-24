import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
import "dotenv/config";

export const db = drizzle({
  connection: {
    url:
      process.env.ENVIRONTMENT === "development"
        ? process.env.DATABASE_URL!
        : process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  schema,
});
