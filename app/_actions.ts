"use server";
import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema, formSchema } from "@/lib/contactFormSchema";
import { EmailTemplate } from "../components/Email/email-template";

type Inputs = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { fullName, email, phone, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["ajardiahdev12@gmail.com"],
        subject: "Hello world",
        react: EmailTemplate({ fullName, email, phone, message }),
      });

      return Response.json(data.toString());
    } catch (error) {
      return Response.json({ error });
    }
  }
}
