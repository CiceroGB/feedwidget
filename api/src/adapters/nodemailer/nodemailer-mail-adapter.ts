import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cf54cfb595365c",
    pass: "42b97e8c617dc5",
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
