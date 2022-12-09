import { Request, Response } from "express"

export default {

    async CreateUser(req:Request, res:Response){
        let user = req.body
        
        return res.status(200).json({user})
    },
    FindByName(req:Request, res:Response){

    }

}