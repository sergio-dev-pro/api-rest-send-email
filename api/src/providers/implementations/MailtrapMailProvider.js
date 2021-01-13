"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailtrapMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailConfig_1 = __importDefault(require("../../config/mailConfig"));
class MailtrapMailProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport(mailConfig_1.default);
    }
    async sendMail(message) {
        const { from, to, subject, body } = message;
        const infoSendMail = {
            from: from.name + " " + from.email,
            to: to.name + " " + to.email,
            subject,
            html: body
        };
        let info = await this.transporter.sendMail(infoSendMail);
        console.log(info);
    }
}
exports.MailtrapMailProvider = MailtrapMailProvider;
