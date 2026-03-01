import { Pool } from "pg";

const {
  POSTGRES_HOST = "localhost",
  POSTGRES_PORT = "5432",
  POSTGRES_USER = "postgres",
  POSTGRES_PASSWORD = "postgres",
  POSTGRES_DB = "psicoclub"
} = process.env;

export const pool = new Pool({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB
});

export async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_leads (
      id SERIAL PRIMARY KEY,
      parent_name TEXT NOT NULL,
      child_name TEXT NOT NULL,
      child_age INTEGER NOT NULL,
      service_type TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

