import { TRequest, TResponse, enums } from "@types";

export const getEnums = async (_req: TRequest, res: TResponse) => {
  res.status(200).send(enums);
};
