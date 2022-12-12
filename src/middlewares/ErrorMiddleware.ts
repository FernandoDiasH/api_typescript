import { ErrorRequestHandler, NextFunction, Request, Response} from "express";


export function errorMidleware(err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction){
    console.log(err)
    return res.status(500).json({
        errorMessage:err.toString() || 'unspected error'
    })
}