import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Verifica se a URL existe para evitar erros silenciosos
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não encontrada no arquivo .env");
}

const client = neon(process.env.DATABASE_URL);
export const db = drizzle(client, { schema });
