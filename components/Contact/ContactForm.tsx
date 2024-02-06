"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Textarea } from "../ui/textarea";
import { Form, FormLabel } from "../ui/form";
import { Label } from "../ui/label";
import { sendEmail } from "@/app/_actions";
import { ContactFormSchema } from "@/lib/schema";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    // Call the sendEmail function with the form data
    const result = await sendEmail(data);
    // console.log(data);

    // Check if the email was sent successfully
    if (result?.success) {
      // Log the data returned from the email sending process
      //   console.log({ data: result.data });

      // Display a success toast message
      //   toast.success("Email sent!");

      // Reset the form fields
      reset();

      // Exit the function early
      return;
    }

    // If the email sending was not successful, log the error
    console.log(result?.error);

    // Display an error toast message
    // toast.error("Something went wrong");
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <input type="text" {...register("name")} placeholder="Name" />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="focus-within:shadow-none focus-visible:shadow-none focus:shadow-none outline-none"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          placeholder="Message"
          className="resize-none"
          {...register("message")}
        />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full font-semibold hover:bg-primary_red transition-all ease-in-out duration-300 hover:text-white"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        {isSubmitting ? "Submittng..." : "Submit"}
      </Button>
    </form>
  );
}
