"use server";

import nodemailer from "nodemailer";

export async function sendMail({
       to,
       name,
       subject,
       body,
   }: {
    to: string;
    name: string;
    subject: string;
    body: string;
}) {
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        return {success: false, error: "SMTP credentials are missing"};
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {user: SMTP_EMAIL, pass: SMTP_PASSWORD},
    });

    try {
        await transport.sendMail({from: SMTP_EMAIL, to, subject, html: body});
        return {success: true};
    } catch (error) {
        console.error(error);
        return {success: false, error: "Failed to send email"};
    }
}
