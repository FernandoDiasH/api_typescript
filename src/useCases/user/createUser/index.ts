import { MailtrapMailProvider } from "../../../providers/implementation/MailtrapMailProvider";
import { PostgressUserRepository } from "../../../repositories/PostgressUserRepository";
import { PrismaUserRepository } from "../../../repositories/prisma/userRepository/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgressUserRepository = new PostgressUserRepository() 
const prismaUserRepository = new PrismaUserRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(prismaUserRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserController}