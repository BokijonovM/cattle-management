import { z } from "zod";

export const cattleSchema = z.object({
  tagId: z.string().trim().min(1, "Identifikatsiya (tag) raqami majburiy"),
  name: z.string().trim().optional(),
  breed: z.string().trim().min(1, "Zotni tanlang yoki kiriting"),
  gender: z.enum(["male", "female"]),
  dateOfBirth: z
    .string()
    .min(1, "Tug'ilgan sanani kiriting")
    .refine((d) => new Date(d) <= new Date(), {
      message: "Sana kelajakda bo'lishi mumkin emas",
    }),
  status: z.enum(["healthy", "sick", "pregnant", "sold", "deceased"]),
  weight: z.number().positive("Vazn musbat son bo'lishi kerak").optional(),
  notes: z.string().trim().optional(),
});

export type CattleSchema = z.infer<typeof cattleSchema>;