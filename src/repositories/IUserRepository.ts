import { User } from "../entities/User";

export interface IUserRepositorie {
    findByEmail(email:string):Promise<User>
    findByID(id:string):Promise<User>
    save(user:User):Promise<void>
    delete(id:string):Promise<void>
}