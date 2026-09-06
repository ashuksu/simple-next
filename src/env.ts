import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    BASE_URL: z.url(),
    // DATABASE_URL: z.url(),
  },
  client: {
    // NEXT_PUBLIC_API_URL: z.url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.BASE_URL,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
