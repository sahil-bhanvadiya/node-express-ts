import { miscRoutes } from "@modules/misc";
import { userRoutes } from "@modules/user";
import { Router } from "express";

export const configureRoutes = () => {
  const router = Router();

  router.get("/health-check", (_, res) => {
    res.status(200).json({ status: "OK" });
  });

  // Register all routes here
  router.use("/misc", miscRoutes);
  router.use("/users", userRoutes);

  // Handle 404
  router.all("/*", (_, res) =>
      res.status(404).json({
      error: "Requested URL not found!",
    }),
  );

  return router;
};
