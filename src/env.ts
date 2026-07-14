import { z } from "zod";
import { createEnv } from "@futurehax/nextjs-common";

const optionalNonEmpty = z.preprocess((v) => (v === "" ? undefined : v), z.string().min(1).optional());

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().url().optional(),
  CMS_BASE_URL: z.string().url().optional(),
  CMS_APP_ENTITLEMENT_SECRET: optionalNonEmpty,
  CMS_MODULE_ID: optionalNonEmpty,
  SENDGRID_API_KEY: optionalNonEmpty,
  CONTACT_EMAIL_TO: z.preprocess((v) => (v === "" ? undefined : v), z.string().email().optional()),
  CONTACT_EMAIL_FROM: z.preprocess((v) => (v === "" ? undefined : v), z.string().email().optional()),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_CMS_BASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_CMS_MODULE_ID: optionalNonEmpty,
});

export type Env = z.infer<typeof serverSchema> & z.infer<typeof clientSchema>;

export const env = createEnv({
  server: serverSchema,
  client: clientSchema,
});
