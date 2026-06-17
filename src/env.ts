import { z } from 'zod';

// ---------------------------------------------------------------------------
// Server-side env vars (never exposed to the browser)
// ---------------------------------------------------------------------------
const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url().optional(),
});

// ---------------------------------------------------------------------------
// Client-side env vars (NEXT_PUBLIC_ prefix, bundled into the browser build)
// ---------------------------------------------------------------------------
const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
});

type ServerEnv = z.infer<typeof serverSchema>;
type ClientEnv = z.infer<typeof clientSchema>;
export type Env = ServerEnv & ClientEnv;

function validateEnv(): Env {
  const server = serverSchema.safeParse(process.env);
  const client = clientSchema.safeParse(process.env);

  const errors: string[] = [];

  if (!server.success) {
    errors.push(...server.error.issues.map((i) => `[server] ${i.path.join('.')}: ${i.message}`));
  }
  if (!client.success) {
    errors.push(...client.error.issues.map((i) => `[client] ${i.path.join('.')}: ${i.message}`));
  }

  if (errors.length > 0) {
    console.error('❌ Invalid environment variables:\n' + errors.map((e) => `  ${e}`).join('\n'));
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Missing or invalid environment variables — refusing to start.');
    }
  }

  return {
    ...(server.success ? server.data : serverSchema.parse({})),
    ...(client.success ? client.data : clientSchema.parse({})),
  } as Env;
}

export const env = validateEnv();
