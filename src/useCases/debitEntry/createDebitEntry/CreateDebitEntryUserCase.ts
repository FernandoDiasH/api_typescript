import { DebitEntry, IDebitEntry } from "../../../entities/DebitEntry";
import { IDebitEntryRepository } from "../../../repositories/IDebitEntryRepository";


export class CreateDebitEntryUserCase
{
    constructor (
        private debitEntryRepository : IDebitEntryRepository
    ){}

    async execute({id, value, dtPurchase, description, category}:IDebitEntry){

        const debitEntry = new DebitEntry({
            id,
            value,
            dtPurchase,
            description,
            category
        })

        await this.debitEntryRepository.save(debitEntry)
    }
}