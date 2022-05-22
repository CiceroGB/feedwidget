import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Suport Widget <siport@widget.com>",
      to: "Cicero Gasparini Brunelli <cicero.brunelli@gmail.com>",
      subject,
      html: body,
    });
  }
}
