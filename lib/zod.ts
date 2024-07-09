import { z } from "zod";

export const expenseSchema = z.object({
  amount: z.number().min(1, {
    message: "Amount must be greater than 0",
  }),
  category: z.string(),
  date: z.date(),
  description: z.string(),
});
