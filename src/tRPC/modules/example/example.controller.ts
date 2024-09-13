import { trpcProcedure } from "init.trpc";
import { z } from "zod";

export const getExample = trpcProcedure.query(() => ({ data: "Get Example" }));

export const getAsyncExample = trpcProcedure.query(async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return { data: "Get Example after 5 sec!" };
});

export const getExampleWithInput = trpcProcedure
  .input(z.number())
  .output(z.object({ data: z.number() }))
  .query(({ input }) => {
    return { data: input };
  });

export const createExample = trpcProcedure
  .input(z.object({ data: z.string() }))
  .output(z.object({ data: z.string() }))
  .mutation(async ({ input }) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return { data: input.data };
  });
