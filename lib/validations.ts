import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit Indian mobile number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s\-()]{10,15}$/, "Invalid phone format"),
  serviceCategory: z
    .string()
    .min(1, "Please select a service or interest area"),
  estimatedBudget: z
    .string()
    .optional(),
  city: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, "Please tell us a little more about your requirements (at least 10 characters)")
    .max(1500, "Message must be under 1500 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
