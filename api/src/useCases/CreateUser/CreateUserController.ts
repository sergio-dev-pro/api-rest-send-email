import {Request, Response} from 'express';
import { User } from '../../entities/User';
import { CreateUserUsecase } from './CreateUserUseCase';
import { ICreateUserRequestDTO } from './ICreateUserDTO';

export class CreateUserControler{

    constructor(
        private createUserUseCase : CreateUserUsecase
    ){}

    async handle(req : Request, res : Response) : Promise<Response>{
        const {name, email, password} = req.body.user;
        try {
            const newUser : ICreateUserRequestDTO = {
                name,
                email,
                password
            }

            await this.createUserUseCase.execute(newUser)
            
            return res.status(201).send();

        } catch (error) {
            
            res.status(500)
            .json({message : "Error: Internal error when creating user."})
            throw new Error(error.message)
        }
    }
}