import { response } from 'express';
import { User } from '../../entities/User';
import { IMailProvider, IMessage } from '../../providers/IMailProvider';
import {IUserRepository} from '../../repositories/IUserRepository'
import {ICreateUserRequestDTO} from './ICreateUserDTO';

export class CreateUserUsecase{

    constructor(private userRepository : IUserRepository, private mailProvider : IMailProvider){}
    
    async execute(data : ICreateUserRequestDTO){
        console.log(data)

        try {
            const userAlreadyExists = await this.userRepository.findByEmail(data.email)

            if(userAlreadyExists)
            throw new Error("usuario já existe.")
        
            const user = new User(data);

            await this.userRepository.save(user);

            const message : IMessage = {
                to: {
                    email : data.email,
                    name : data.name
                },
                from: {
                    email : "sergio-dev-pro@gmail.com",
                    name : "Sergio Oliveira"
                },
                subject : "Bem vindo, usuario criado com sucesso.",
                body : ""
            }

           await this.mailProvider.sendMail(message)
        } catch (error) {
            console.log(error)
        }
    
    }
}