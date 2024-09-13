import { trpcRouter } from "init.trpc";
import { getHealthCheck } from "./health-check.controller";

export const healthCheckRouter = trpcRouter({
  getHealthCheck,
});
