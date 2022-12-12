import { User } from "../../../entities/User";
import { IUserRepositorie } from "../../../repositories/IUserRepository";


export class FindUsersUseCase
{
    constructor(
        private userRepository:IUserRepositorie
    ){}

    async execute():Promise<User[]>{
        const users = this.userRepository.findAll()

        if(!users){
            throw new Error('Not register users.')
        }

        return users
    }
}