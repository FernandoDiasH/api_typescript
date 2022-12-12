import { DebitEntry } from "../entities/DebitEntry";


export interface IDebitEntryRepository
{
    save(debitEntry:DebitEntry):Promise<void>
    findByID(id:number):Promise<DebitEntry>
}