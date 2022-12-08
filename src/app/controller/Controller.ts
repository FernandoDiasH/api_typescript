import { Request, Response  } from "express";


class Controller {
    public home(req:Request, res:Response) {
        return res.json({
            respose:"Hello world"
        });
    }

    public async error(req:Request, res:Response) {
        throw new Error("Um erro inesperado aconteceu, este erro esta vindo da controller")
    }

}

export const controller =  new Controller();