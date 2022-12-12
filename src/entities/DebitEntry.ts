
export interface IDebitEntry {
    id?:number
    description: string
    category : string
    value: number
    dtPurchase: string
}


export class DebitEntry{
    public id: number
    public description: string
    public category : string
    public value: number
    public dtPurchase: string
    
    constructor(props:IDebitEntry){
        Object.assign(this, props)
    }
}
