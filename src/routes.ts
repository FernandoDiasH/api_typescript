import { Router } from "express";
import { User } from "./entities/User";
import { createUserController } from "./useCases/user/createUser";
import { deleteUserController } from "./useCases/user/deleteUser";


const routes = Router()

routes.get('/', (req, res)=>{
    return res.send('Hello word')
})

routes.get('/user', (req, res)=>{

    const user = new User({name:"fernando", email:"fernando@teste.com", password:"password"})

    console.log(user)
    return res.send('foi')

})

routes.post('/user', (req, res)=>{
    return createUserController.handler(req, res)
})
routes.delete('/user', (req, res)=>{
    return deleteUserController.handler(req, res)
})




export {routes}