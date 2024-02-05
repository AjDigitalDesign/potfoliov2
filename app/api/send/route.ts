// "use server";
// import { Resend } from "resend";
// import { z } from "zod";
// import { ContactFormSchema, formSchema } from "@/lib/contactFormSchema";
// import ContactForm from "@/components/Contact/contactFrom";

// type Inputs = z.infer<typeof formSchema>;

// const resend = new Resend(process.env.RESEND_API_KEY);

// type ContactFormInputs = z.infer<typeof ContactFormSchema>;

// export async function sendEmail(data: ContactFormInputs) {
//   const result = ContactFormSchema.safeParse(data);
//   console.log(result);

//   if (result.success) {
//     const { fullName, email, phone, message } = result.data;
//     try {
//       const data = await resend.emails.send({
//         from: "Acme <onboarding@resend.dev>",
//         to: "ajardiahdev12@gmail.com",
//         subject: "Hello world",
//         react: ContactForm({ fullName, email, phone, message }),
//       });

//       return Response.json(data);
//     } catch (error) {
//       return Response.json({ error });
//     }
//   }
// }
