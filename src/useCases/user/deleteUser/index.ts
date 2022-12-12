import { PrismaUserRepository } from "../../../repositories/prisma/userRepository/PrismaUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const userRepository = new PrismaUserRepository()
const deleteUserUseCase = new DeleteUserUseCase(userRepository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export{ deleteUserController }