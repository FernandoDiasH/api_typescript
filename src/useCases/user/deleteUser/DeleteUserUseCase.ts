import { IUserRepositorie } from "../../../repositories/IUserRepository";

export class DeleteUserUseCase
{
    constructor(
        private userRepository:IUserRepositorie
    ){}

    async execute(id:string){
        const userAlreadyExist = await this.userRepository.findByID(id)

        if(!userAlreadyExist){
            throw new Error('Esste usuario não exite.')
        }
        
        await this.userRepository.delete(id)
    }
}