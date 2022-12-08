import { Request, Response, Errback, ErrorRequestHandler, NextFunction  } from "express";
import 'express-async-errors'

class ErrorMiddleware {
    public error (err: ErrorRequestHandler, req:Request, res:Response, next:NextFunction ) {
        console.log(err)

        return res.status(500).json({
            Error:err.toString(),
            message: "O erro aconteceu mesmo "
        });
    }
}

export const errorMiddleware =  new ErrorMiddleware();