import { z } from "zod";

export const PROGRAMS = ["MBBS", "Engineering", "Not sure yet"] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid mobile number"),
  program: z.enum(PROGRAMS, { message: "Pick a program" }),
  city: z.string().trim().min(2, "Your city").max(60),
});

export type LeadInput = z.infer<typeof leadSchema>;
