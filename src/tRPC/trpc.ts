import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { trpcRootRouter } from "./trpc.root.routes";

export const trpc = createExpressMiddleware({
  router: trpcRootRouter,
  createContext: () => ({}),
});
