
import { User } from "../../entities/User";
import { prisma } from "../../prisma";
import { IUserRepositorie } from "../IUserRepository";


export class PrismaUserRepository implements IUserRepositorie
{
    async findAll(): Promise<User[]> {
        const users = prisma.user.findMany()
        return users
    }

    async delete(id: string): Promise<void> {
       await prisma.user.delete({
           where:{
               id:id,
           }
       })
    }

    async findByID(id: string): Promise<User> {
        const user = await prisma.user.findFirst({
           where:{
               id:id
           }
        })
        return user
    }



    async findByEmail(email: string): Promise<User> {
        const data = await prisma.user.findFirst({
            where:{
                email:email
            }
        })
        return data
    }
    
    async save(user: User): Promise<void> {
        await prisma.user.create({
            data:{
               id:user.id,
               name:user.name,
               email:user.email,
               password:user.password
            }
        })
    }
}