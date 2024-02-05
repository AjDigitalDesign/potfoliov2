import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(5).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10).max(14),
  message: z.string(),
});

export const ContactFormSchema = z.object({
  fullName: z.string().nonempty("Name is Required"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  phone: z.string().min(10, { message: "phone number must be 10 digits" }),
  message: z
    .string()
    .nonempty("Message is required")
    .min(6, { message: "Message must be at least 6 characters." }),
});
