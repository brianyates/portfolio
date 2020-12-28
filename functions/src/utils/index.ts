import * as mailgun from 'mailgun-js';
import { MAILGUN_API_KEY } from '../config';

const DOMAIN = "www.brianyates.dev";
const FROM = `Portfolio Page <noreply@${DOMAIN}>`;
const mg = mailgun({ apiKey: MAILGUN_API_KEY, domain: DOMAIN });

export const sendEmail = async (to: string, subject: string, html: string) => {
    const message = await mg.messages().send({
        from: FROM,
        to,
        subject,
        html,
    })
    return message;
}