import { Pool } from "pg";

export const pool = new Pool({
  user: "usersample",
  host: "postgres",
  database: "mydatabase",
  password: "mysecretpassword",
  port: 5432,
});
export async function dbConnect() {
  try {
    await pool.connect();
    console.log("Connected to Postgres");
  } catch (error) {
    console.error("Connection error", error);
  }
}
    