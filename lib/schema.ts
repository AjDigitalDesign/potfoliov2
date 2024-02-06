import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty("Message is required"),
});

// Define the schema for the contact form data
export const ContactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().min(10), // Define validation rules as needed
});

// Define the TypeScript type for the contact form inputs
export type ContactFormInputsEmail = z.infer<typeof ContactFormSchema>;
