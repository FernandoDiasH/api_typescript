import { PrismaDebitEntryRepository } from "../../../repositories/prisma/PrismaDebitEntryRepository";
import { CreateDebitEntryControlle } from "./CreateDebitEntryController";
import { CreateDebitEntryUserCase } from "./CreateDebitEntryUserCase";

const prismaDebitEntryRepository = new PrismaDebitEntryRepository()

const createDebitEntryUserCase = new CreateDebitEntryUserCase(prismaDebitEntryRepository)
const createDebitEntryControlle = new CreateDebitEntryControlle(createDebitEntryUserCase)

export {createDebitEntryControlle}