"use server";
import { ContactFormSchema } from "@/lib/schema";
import { Resend } from "resend";
import { TypeOf, z } from "zod";
import { EmailTemplate } from "@/components/email-template";
import React from "react";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);
  try {
    // Parse the data using the ContactFormSchema
    const result = ContactFormSchema.parse(data);

    // Destructure the parsed data
    const { name, email, message } = result;

    // Send the email using Resend
    const responseData = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["ajardiahdev12@gmail.com"],
      subject: "Message From AJ Jardiah Jr | ajardiah.dev",
      react: React.createElement(EmailTemplate, {
        name: name,
        email: email,
        message: message,
      }),
    });

    // Return success response
    return { success: true, responseData };
  } catch (error) {
    // Return error response
    return { success: false, error: error };
  }
}
