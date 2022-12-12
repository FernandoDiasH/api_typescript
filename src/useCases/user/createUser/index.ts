import { MailtrapMailProvider } from "../../../providers/implementation/MailtrapMailProvider";
import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaUserRepository = new PrismaUserRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(prismaUserRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserController}