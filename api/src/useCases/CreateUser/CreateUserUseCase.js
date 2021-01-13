"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUsecase = void 0;
const User_1 = require("../../entities/User");
class CreateUserUsecase {
    constructor(userRepository, mailProvider) {
        this.userRepository = userRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        console.log(data);
        try {
            const userAlreadyExists = await this.userRepository.findByEmail(data.email);
            console.log("userAlreadyExists");
            console.log(userAlreadyExists);
            console.log("userAlreadyExists");
            if (userAlreadyExists)
                throw new Error("usuario já existe.");
            const user = new User_1.User(data);
            await this.userRepository.save(user);
            const message = {
                to: {
                    email: data.email,
                    name: data.name
                },
                from: {
                    email: "sergio-dev-pro@gmail.com",
                    name: "Sergio Oliveira"
                },
                subject: "Bem vindo, usuario criado com sucesso.",
                body: ""
            };
            await this.mailProvider.sendMail(message);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CreateUserUsecase = CreateUserUsecase;
