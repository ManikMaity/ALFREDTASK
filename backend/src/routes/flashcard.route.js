import {Router} from "express";
import authenticate from "../middlewares/auth.js";
import { getUserFlashcardsController } from "../controllers/flashcard.controller.js";

const flashcardRouter = Router();

flashcardRouter.get("/", authenticate, getUserFlashcardsController);

export default flashcardRouter;