import { User } from "../entities/User";
import { IUserRepositorie } from "./IUserRepository";

export class PostgressUserRepository implements IUserRepositorie{
    findByID(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public users:User[] = []

    async findByEmail(email: string): Promise<User> {
        console.log(this.users)
        const user = this.users.find((user) => user.email ===  email)
        return user
    }
    async save(user: User): Promise<void> {
        this.users.push(user)
    }

}