import express  from "express";
import { errorMiddleware } from "./middleware/ErrorMiddleware";
import { router } from "./router"

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.initializeMiddleware();
        this.router();
        this.initializeErrorHandling();
    }

    private initializeMiddleware() : void{
        this.server.use(express.json());
        
    }

    private initializeErrorHandling (){
        this.server.use(errorMiddleware.error)
    }

    private router(){
        this.server.use(router);
    }
}
