import {Router} from "express";
import authenticate from "../middlewares/auth.js";
import { createFlashcardController, deleteFlashcardController, getUserFlashcardsController, updateFlashcardController } from "../controllers/flashcard.controller.js";
import validate from "../validations/validator.js";
import { createFlashcardSchema, updateFlashcardSchema } from "../validations/flashcard.validation.js";

const flashcardRouter = Router();

flashcardRouter.get("/", authenticate, getUserFlashcardsController);
flashcardRouter.post("/", validate(createFlashcardSchema), authenticate, createFlashcardController);
flashcardRouter.put("/:id", validate(updateFlashcardSchema), authenticate, updateFlashcardController);
flashcardRouter.delete("/:id", authenticate, deleteFlashcardController);
// flashcardRouter.put("/edit/:id", authenticate, editFlashcardController);


export default flashcardRouter;