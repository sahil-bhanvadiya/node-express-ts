import { UserEntity } from "@entities";
import { enableCors, envValidator, handleUnhandledPromise, logger } from "@helpers";
import { json, urlencoded } from "body-parser";
import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import methodOverride from "method-override";
import { destructPager } from "middlewares";
import morgan from "morgan";
import "reflect-metadata";
import { initializeDB } from "db/db";
import { configureRoutes } from "./routes";

dotenv.config();

export const createServer = async () => {
  // Validate ENV file
  const envs = envValidator();

  // init DB
  await initializeDB({
    type: "postgres",
    host: envs.dbHost,
    port: envs.dbPort,
    username: envs.dbUser,
    password: envs.dbPassword,
    database: envs.dbName,
    schema: envs.dbSchema,
    entities: [UserEntity],
  });

  // Handle Unhandled Promise Rejections
  handleUnhandledPromise();

  // Init Express
  const app = express();

  // Security
  enableCors(app);
  app.use(helmet());
  app.use(morgan("tiny"));
  app.use(compression());

  // Enable DELETE and PUT
  app.use(methodOverride());

  // Body Parsing
  app.use(json({ limit: "50mb" }));
  app.use(urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

  // Destruct Pager from query string and typecast to numbers
  app.use(destructPager);

  // Routing
  app.use("/", configureRoutes);

  // Start server
  app.listen(envs.port, () => {
    logger.info(`The server is running on port localhost: ${envs.port}`);
  });

  return app;
};
