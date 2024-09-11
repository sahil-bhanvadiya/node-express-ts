import { Constants } from "@configs";
import { z } from "zod";
import { logger } from "./logger.helper";

const envSchema = z.object({
  port: z.number().int().max(9999),
  dbName: z.string().min(1),
  dbHost: z.string().min(1),
  dbUser: z.string().min(1),
  dbPort: z.number().int().max(9999),
  dbPassword: z.string().min(1),
  dbSchema: z.string().min(1),
  nodeEnv: z
    .string()
    .min(1)
    .refine(value => Constants.ENVIRONMENTS.includes(value)),
});

export function envValidator() {
  const result = envSchema.safeParse({
    port: +process.env.PORT,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPort: +process.env.DB_PORT,
    dbPassword: process.env.DB_PASSWORD,
    dbSchema: process.env.DB_SCHEMA,
    nodeEnv: process.env.NODE_ENV,
  });

  if (result.success) {
    logger.info("ENV file validated");
  } else {
    const errors = result.error.formErrors.fieldErrors;
    logger.error("ENV file is invalid", errors);
    throw new Error("ENV file is invalid");
  }
  return result.data;
}
