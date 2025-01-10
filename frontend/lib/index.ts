"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_IPA_KEY)

export const sendEmail = async ({ email, name, message } : { email: string, name: string, message: string}) => {
    console.log(email, name, message)
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'abdelkaderboukart@gmail.com',
        subject: `${email}`,
        html: `<p>${name} <br/> ${message}</p>`
    });
}