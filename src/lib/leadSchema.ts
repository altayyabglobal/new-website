import { z } from "zod";

export const PROGRAMS = ["MBBS", "Engineering", "Not sure yet"] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email"),
  program: z.enum(PROGRAMS, { message: "Pick a program" }),
  city: z.string().trim().max(60).optional().or(z.literal("")),
  preferredCollege: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
