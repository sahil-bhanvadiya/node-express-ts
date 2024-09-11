import { decode } from "@helpers";
import { TRequest, TResponse } from "@types";

export const acl = () => {
  return async (req: TRequest, res: TResponse, next: () => void) => {
    const user = decode<any>(req.headers.authorization.replace("Bearer ", ""));

    if (!user) {
      return res.status(401).send({ code: 401, reason: "User not exists!" });
    }
    req.me = user;
    return next();
  };
};
