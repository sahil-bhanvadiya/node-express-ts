import { UserEntity } from "@entities";
import { getRepo } from "@helpers";
import { trpcProcedure } from "init.trpc";
import { z } from "zod";

export const getAllUsers = trpcProcedure.query(async () => {
  const userRepository = getRepo(UserEntity);
  const users = await userRepository.find();
  return { data: users };
});

export const getUserById = trpcProcedure.input(z.number()).query(async ({ input }) => {
  const userRepository = getRepo(UserEntity);
  const user = await userRepository.findOne({
    where: { id: input },
  });
  return user;
});

export const createUser = trpcProcedure
  .input(
    z.object({
      name: z.string(),
      email: z.string(),
      number: z.string(),
      password: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    const userRepository = getRepo(UserEntity);
    const user = userRepository.create(input);
    await userRepository.save(user);
    return user;
  });
