import { withRoutes } from "@helpers";
import { miscRoutes } from "@modules/misc";
import { userRoutes } from "@modules/user";
import { Router } from "express";

const routes = (app: Router) => {
  app.get("/health-check", (_, res) => {
    res.status(200).json({ status: "OK" });
  });

  // Register all routes here
  app.use("/misc", miscRoutes);
  app.use("/users", userRoutes);

  // Handle 404
  app.all("/*", (_, res) =>
    res.status(404).json({
      error: "Requested URL not found!",
    }),
  );
};

export const configureRoutes = withRoutes(routes);
