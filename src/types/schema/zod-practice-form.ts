import z from "zod";

export const zodPracticeFormSchema = z.object({
  example1: z
  .enum(["果物", "野菜", "魚"])
  .default("果物"),
  example1_1: z.enum(["ぶどう","りんご","さくらんぼ"]).nullable().default(null)
});

export type ZodPracticeFormSchema = z.infer<typeof zodPracticeFormSchema>;