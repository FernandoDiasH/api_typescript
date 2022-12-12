import { Router } from "express";
import { DebitEntry } from "./entities/DebitEntry";
import { createDebitEntryControlle } from "./useCases/debitEntry/createDebitEntry";
import { createUserController } from "./useCases/user/createUser";
import { deleteUserController } from "./useCases/user/deleteUser";
import { findUsersController } from "./useCases/user/findUsers";


const routes = Router()

routes.get('/', (req, res)=>{
    return res.send('Hello word')
})

routes.post('/user', (req, res)=>{
    return createUserController.handler(req, res)
})
routes.delete('/user', (req, res)=>{
    return deleteUserController.handler(req, res)
})
 routes.get('/users', (req, res)=>{
     return findUsersController.handle(req, res)
})

routes.post('/debit', (req, res) =>{
   return createDebitEntryControlle.handle(req, res)
})

routes.get('/teste', (req, res)=>{
    throw new Error('um erro aconteceu')
})

export {routes}