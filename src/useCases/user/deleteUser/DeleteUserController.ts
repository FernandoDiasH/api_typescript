import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export class DeleteUserController
{

    constructor(
        private deleteUserUseCase:DeleteUserUseCase
    ){}

    async handler(req:Request, res:Response){

        const { id } = req.body

        try{
            await this.deleteUserUseCase.execute(id)
            return res.sendStatus(201).send("Deletado com sucesso")
        } catch (err){
            console.log(err)
            return res.sendStatus(500).json({
                msg: err.message || 'Unesxpected error'
            })
        }   

    }

}