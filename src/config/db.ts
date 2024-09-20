import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
  process.env.NEXT_PUBLIC_DATABASE_URL! ||
    "postgresql://neondb_owner:zdZ9qE3kWaUm@ep-damp-poetry-a7ofxgk8.ap-southeast-2.aws.neon.tech/ai%20story%20generator?sslmode=require"
);
export const db = drizzle(sql);
