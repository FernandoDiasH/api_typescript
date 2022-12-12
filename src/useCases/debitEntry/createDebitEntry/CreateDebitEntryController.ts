import { Request, Response } from "express";
import { CreateDebitEntryUserCase } from "./CreateDebitEntryUserCase";

export class CreateDebitEntryControlle
{

    constructor(
        private createDebitEntryUserCase:CreateDebitEntryUserCase
    ){}
    
    async handle(req:Request, res:Response){
        const { id, value, dtPurchase, description, category } = req.body
        const debitEntry = await this.createDebitEntryUserCase.execute({
            id,
            value,
            dtPurchase,
            description,
            category
        })

        return res.sendStatus(200).json(debitEntry)
    }
}