import { getDB } from "@configs";
import { EntityTarget, Repository } from "typeorm";

export const getRepo = <T>(target: EntityTarget<T>): Repository<T> => {
  return getDB().getRepository(target);
};
