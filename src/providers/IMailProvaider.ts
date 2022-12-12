interface IAddres{
    email:string
    name:string
}

export interface IMessage{
    to:IAddres
    from:IAddres
    subject:string
    body:string
}

export interface IMailProvaider {
    sendMail({to, from, subject, body}:IMessage):Promise<void>
}