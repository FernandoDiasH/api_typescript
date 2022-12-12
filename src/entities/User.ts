import { uuid } from "uuidv4"

export interface IUser{
    id?:string
    name:string
    email:string
    password:string
}


export class User{
   public readonly id:string
   public name:string
   public email:string
   public password:string

   constructor({id, name, email, password}:IUser){
       this.name = name
       this.email = email
       this.password = password
       this.id = id
       
       if(!id){
            this.id = uuid()
       }
   }
}