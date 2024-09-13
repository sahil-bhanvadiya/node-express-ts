import { trpcProcedure } from "init.trpc";

export const getHealthCheck = trpcProcedure.query(async () => {
  return {
    status: "ok",
  };
});
