import { defineConfig } from "drizzle-kit";
// @ts-ignore
export default defineConfig({
  schema: "./src/config/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.NEXT_PUBLIC_DATABASE_URL ||
      "postgresql://neondb_owner:zdZ9qE3kWaUm@ep-damp-poetry-a7ofxgk8.ap-southeast-2.aws.neon.tech/ai%20story%20generator?sslmode=require",
  },
  verbose: true,
  strict: true,
});
