import { withRoutes } from "@helpers";
import { bodyValidator } from "@middlewares";
import { Router } from "express";
import { createUser } from "./user.controller";
import { UserSchema } from "./validation-schemas/create-user.schema";

const routes = (app: Router) => {
  app.post("/", bodyValidator(UserSchema), createUser);
};

export const userRoutes = withRoutes(routes);
