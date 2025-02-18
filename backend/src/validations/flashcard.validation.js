import { z } from "zod";

export const createFlashcardSchema = z.object({
  question: z
    .string({
      required_error: "question is required",
      invalid_type_error: "question must be a string",
    })
    .min(1, "question must be at least 1 character")
    .max(100, "question must be at most 100 characters")
    .trim(),
  answer: z
    .string({
      required_error: "answer is required",
      invalid_type_error: "answer must be a string",
    })
    .min(1, "answer must be at least 1 character"),
});
