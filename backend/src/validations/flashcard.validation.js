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

export const updateFlashcardSchema = z.object({
  correct: z.boolean({
    required_error: "correct is required",
    invalid_type_error: "correct must be a boolean",
  }),
});

export const editFlashcardSchema = z.object({
  question: z
    .string({
      required_error: "question is required",
      invalid_type_error: "question must be a string",
    })
    .min(1, "question must be at least 1 character")
    .max(100, "question must be at most 100 characters")
    .trim()
    .optional(),
  answer: z
    .string({
      required_error: "answer is required",
      invalid_type_error: "answer must be a string",
    })
    .min(1, "answer must be at least 1 character")
    .optional(),
  box: z
    .number({
      invalid_type_error: "answer must be a string",
    })
    .min(1)
    .max(5)
    .optional(),
});
