import Mail from "nodemailer/lib/mailer";
import { IMailProvaider, IMessage } from "../IMailProvaider";
import nodemailer from 'nodemailer'


export class MailtrapMailProvider implements IMailProvaider
{   
    private trasporter:Mail 

    constructor(){
        this.trasporter = nodemailer.createTransport({
            host:'smtp.mailtrap.io',
            port: 2525 ,
            auth:{
                user:"d330e74c00f404",
                pass:"cd65ed40eadec9"
            }
        })
        
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.trasporter.sendMail({
            to:{
                name:message.to.name,
                address:message.to.email
            },
            from:{
                name:message.from.name,
                address: message.from.email
            },
            subject:message.subject,
            html:message.body
        })

    }

}