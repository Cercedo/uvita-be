import z from 'zod';

export const environmentSchema = z.object({
  PORT: z.coerce.number(),

  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
});
