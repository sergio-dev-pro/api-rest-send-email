import { uuid } from "uuidv4";

export class User{

    public readonly id: string
    
    public name: string
    public email: string
    public password: string

    constructor(data: Omit<User, 'id'>, id?: string){

        Object.assign(this, data);

        if(!id)
        this.id = uuid();
    }
}