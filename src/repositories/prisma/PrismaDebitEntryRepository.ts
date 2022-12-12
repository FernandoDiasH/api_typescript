import { DebitEntry } from "../../entities/DebitEntry";
import { prisma } from "../../prisma";
import { IDebitEntryRepository } from "../IDebitEntryRepository";


export class PrismaDebitEntryRepository implements IDebitEntryRepository{
    async save(debitEntry: DebitEntry): Promise<void> {
       await prisma.debityEntrie.create({
           data:{
               value: debitEntry.value,
               category: debitEntry.category,
               description: debitEntry.description,
               dtPurchase: debitEntry.dtPurchase
           }
       })
    }

    async findByID(id: number): Promise<DebitEntry> {
       const data = await prisma.debityEntrie.findFirst({
            where:{
                id:id
            }
        })
        return data
    }
}