import { trpcRouter } from "init.trpc";
import { getAllUsers, getUserById } from "./user.controller";

export const userRoutes = trpcRouter({
  getAllUsers,
  getUserById,
});
