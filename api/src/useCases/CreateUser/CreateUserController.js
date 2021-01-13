"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserControler = void 0;
class CreateUserControler {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(req, res) {
        const { name, email, password } = req.body.user;
        try {
            const newUser = {
                name,
                email,
                password
            };
            await this.createUserUseCase.execute(newUser);
            return res.status(201).send();
        }
        catch (error) {
            res.status(500)
                .json({ message: "Error: Internal error when creating user." });
            throw new Error(error.message);
        }
    }
}
exports.CreateUserControler = CreateUserControler;
