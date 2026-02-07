"use server";

import { Resend } from "resend";
import { contact } from "../../utils/constant";
import z from "zod";
import formSchema from "./formSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Invalid form data" };
  }

  const { name, email, subject, message } = parsed.data;

  await resend.emails.send({
    from: "Contact <onboarding@resend.dev>",
    to: [contact.email],
    replyTo: email,
    subject: subject,
    text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
    `,
  });

  return { success: true };
}
