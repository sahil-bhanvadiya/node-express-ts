import { initTRPC } from "@trpc/server";

export const { router: trpcRouter, procedure: trpcProcedure } = initTRPC.create();

export type AppRouter = typeof trpcRouter;

export type AppProcedure = typeof trpcProcedure;
