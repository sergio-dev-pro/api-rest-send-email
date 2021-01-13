import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import mailTrapConfig from "../../config/mailConfig"

export class MailtrapMailProvider implements IMailProvider {

    private transporter

    constructor(){
        this.transporter = nodemailer.createTransport(mailTrapConfig);
    }
    
    async sendMail(message : IMessage){
        const {from, to, subject, body} = message;

        const infoSendMail = {
            from : from.name + " " + from.email,
            to : to.name + " " + to.email,
            subject,
            html : body 
        }

        let info = await this.transporter.sendMail(infoSendMail);
        console.log(info);
    }
}