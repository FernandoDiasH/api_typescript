import { Router } from "express";
import { User } from "./entities/User";
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

export {routes}