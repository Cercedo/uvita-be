import dotenv, { DotenvParseOutput } from 'dotenv';
import { ZodSchema, infer as ZodInfer } from 'zod';

export const loadDotenv = () => {
  const output = dotenv.config();

  if (output.error) {
    throw output.error;
  }

  return output.parsed as DotenvParseOutput;
};

export const parseEnvironment = <T extends ZodSchema>(
  data: unknown,
  schema: T
): ZodInfer<T> => {
  const env = schema.safeParse(data);

  if (!env.success) {
    const errorMessage = Object.entries(env.error.flatten().fieldErrors)
      .map(([key, values]) => `- ${key}: ${values ? values.join(', ') : ''}`)
      .join('\n');

    throw new Error(
      `Invalid environment variables. Variables:\n${errorMessage}`
    );
  }

  return env.data;
};
