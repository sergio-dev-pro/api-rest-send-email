import { User } from '../../entities/User';
import {IUserRepository} from '../IUserRepository';

export class UserRepository implements IUserRepository{
    users : User[]

    async findByEmail(email : string) : Promise<User>{
        this.users = [];
        let userFound : undefined | User

        if(this.users.length > 0)
        userFound = this.users.find((user : User) => user.email == email );

        return userFound as User;
    }

    async save(user : User): Promise<void> {
        this.users.push(user);
    }

}