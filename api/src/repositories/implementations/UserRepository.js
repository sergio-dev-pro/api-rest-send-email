"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    async findByEmail(email) {
        this.users = [];
        let userFound;
        if (this.users.length > 0)
            userFound = this.users.find((user) => user.email == email);
        return userFound;
    }
    async save(user) {
        this.users.push(user);
    }
}
exports.UserRepository = UserRepository;
