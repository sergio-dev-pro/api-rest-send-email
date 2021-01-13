import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserControler } from "./CreateUserController";
import { CreateUserUsecase } from "./CreateUserUseCase";

const mailTrapProvider = new MailtrapMailProvider();
const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUsecase(userRepository, mailTrapProvider);

const createUserController = new CreateUserControler(createUserUseCase)

export {createUserController, createUserUseCase}