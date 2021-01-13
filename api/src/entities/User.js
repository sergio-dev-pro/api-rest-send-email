"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuidv4_1 = require("uuidv4");
class User {
    constructor(data, id) {
        Object.assign(this, data);
        if (!id)
            this.id = uuidv4_1.uuid();
    }
}
exports.User = User;
