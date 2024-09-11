import { UserEntity } from "@entities";
import { getRepo } from "@helpers";
import { TRequest, TResponse } from "@types";
import { TUserSchema } from "./validation-schemas/create-user.schema";

export async function createUser(req: TRequest<TUserSchema>, res: TResponse) {
  const { name, email, password } = req.dto;
  const userRepository = getRepo(UserEntity);

  const user = userRepository.create({
    name,
    email,
    password,
    number: "123",
  });
  await userRepository.save(user);
  res.status(200).json({
    data: user,
  });
}
