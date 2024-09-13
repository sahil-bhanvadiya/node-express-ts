import { trpcRouter } from "init.trpc";
import { exampleRoutes } from "./modules/example/example.route";
import { healthCheckRouter } from "./modules/health-check/health-check.route";
import { userRoutes } from "./modules/user/user.route";

export const trpcRootRouter = trpcRouter({
  healthCheck: healthCheckRouter,
  example: exampleRoutes,
  user: userRoutes,
});
