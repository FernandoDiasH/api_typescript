import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { FindUsersController } from "./FindUsersController";
import { FindUsersUseCase } from "./FindUsersUseCase";


const userRepository = new PrismaUserRepository()
const findUsersUsecase = new FindUsersUseCase(userRepository)
const findUsersController = new FindUsersController(findUsersUsecase)

export {findUsersController}