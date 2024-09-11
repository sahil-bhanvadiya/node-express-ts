import { DataSource, DataSourceOptions } from "typeorm";
import { logger } from "../helpers/logger.helper";

let dataSource: DataSource | null = null;

export const initializeDB = async (config: DataSourceOptions) => {
  if (!dataSource) {
    dataSource = new DataSource(config);

    try {
      await dataSource.initialize();
      logger.info("DB Connection has been established successfully.");
    } catch (error) {
      logger.error(`Unable to connect to the database: ${error}`);
    }
  }

  return dataSource;
};

export const getDB = () => {
  if (!dataSource) {
    throw new Error("Database has not been initialized. Call initializeDB first.");
  }

  return dataSource;
};
