import { trpcRouter } from "init.trpc";
import { createExample, getAsyncExample, getExample, getExampleWithInput } from "./example.controller";

export const exampleRoutes = trpcRouter({
  getExample,
  getAsyncExample,
  getExampleWithInput,
  createExample,
});
