import { Request, response, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController
{
    private createUserUseCase:CreateUserUseCase

    constructor(createUserUseCase:CreateUserUseCase){
        this.createUserUseCase = createUserUseCase
    }

    async handler (req:Request, res:Response){
        const {name, email, password} = req.body
        try {
            await this.createUserUseCase.execute({name, email, password})
            return res.status(201).send('criado com sucesso')
       } catch (err) {
            console.log(err)
            return res.status(400).json({
                message:err.message || 'Unexpected error'
            })
        }
    }
}