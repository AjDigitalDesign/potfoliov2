"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "../ui/textarea";

import { ContactFormSchema } from "@/lib/schema";
import { useToast } from "../ui/use-toast";
import { sendEmail } from "@/app/_actions";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const [successfulMessage, setSuccessMessage] = useState("");
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  // 1. Define your form.
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    // Call the sendEmail function with the form data
    console.log(data);

    const result = await sendEmail(data);
    // console.log(data);

    // Check if the email was sent successfully
    if (result?.success) {
      // Log the data returned from the email sending process
      //   console.log({ data: result.data });

      // Display a success toast message
      //   toast.success("Email sent!");
      if (form.formState.isSubmitSuccessful) {
        setSuccessMessage("Thank! Your message was delivered successfully");
        return toast({
          title: "Hi, thanks for reaching out!",
          description: "Your message was delivered successfully",
        });
      }

      // Reset the form fields
      form.reset();

      // Exit the function early
      return;
    }

    // If the email sending was not successful, log the error
    console.log(result?.error);

    // Display an error toast message
    // toast.error("Something went wrong");
  };

  return (
    <>
      <div className="text-primary_red font-semibold text-lg mb-2">
        {successfulMessage}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="font-semibold w-full hover:bg-primary_red transition-all ease-in-out duration-300 hover:text-white"
          >
            {form.formState.isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
}
