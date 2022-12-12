import { User } from "../../../entities/User";
import { IMailProvaider } from "../../../providers/IMailProvaider";
import { IUserRepositorie } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";


export class CreateUserUseCase{
    private userRepository:IUserRepositorie
    private mailProvider:IMailProvaider

    constructor(userRepository:IUserRepositorie, mailProvider:IMailProvaider){
        this.userRepository = userRepository
        this.mailProvider = mailProvider
    }

    async execute(data:ICreateUserDTO){

        const userAlreadyExist = await this.userRepository.findByEmail(data.email)

        if(userAlreadyExist){
            throw new Error('Este usuario que voce esta tentando cadastrar ja existe.')
        }

        const user = new User(data);
        await this.userRepository.save(user)

        await this.mailProvider.sendMail({
            to:{
                name:data.name,
                email:data.email
            },
            from:{
                name:data.name,
                email:data.email
            },
            subject:"Seja bem vindo a plataforma.",
            body:"<p>Voce ja pode fazer login em nossa plataforma.</p>"
        })
    }
}


