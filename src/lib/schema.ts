import { z } from "zod";

export const cattleSchema = z.object({
  tagId: z.string().trim().min(1, "Tag ID is required"),
  name: z.string().trim().optional(),
  breed: z.string().trim().min(1, "Select or enter a breed"),
  gender: z.enum(["male", "female"]),
  dateOfBirth: z
    .string()
    .min(1, "Enter the date of birth")
    .refine((d) => new Date(d) <= new Date(), {
      message: "Date cannot be in the future",
    }),
  status: z.enum(["healthy", "sick", "pregnant", "sold", "deceased"]),
  weight: z.number().positive("Weight must be a positive number").optional(),
  notes: z.string().trim().optional(),
});

export type CattleSchema = z.infer<typeof cattleSchema>;