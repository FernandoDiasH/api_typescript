import { Request, Response } from "express";
import { FindUsersUseCase } from "./FindUsersUseCase";



export class FindUsersController
{

    constructor(
        private findUsersUsecase:FindUsersUseCase
    ){}

    async handle (req:Request, res:Response){
        try {
            const users = await this.findUsersUsecase.execute()
            return res.status(200).json(users)

        } catch (error) {

            return res.status(500).json({
                message:error.message || 'unxpectade error'
            })
        }
        
    }
}