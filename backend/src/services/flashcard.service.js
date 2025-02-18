import { StatusCodes } from "http-status-codes";
import flashcardRepo from "../repositories/flashcard.repo.js";

export async function getUserFlashcardsService(id) {
    const flashcards = await flashcardRepo.getTodaysUserFlashcards(id);
    return flashcards;
}

export async function createFlashcardService(id, question, answer) {
    const flashcard = await flashcardRepo.create({
        creatorId : id,
        question,
        answer,
    });

    return flashcard;
}

export async function updateFlashcardService(id, flashcardId, correct) {
    
    const flashcard = await flashcardRepo.getById(flashcardId);
    if (!flashcard) {
        throw {
            statusCode : StatusCodes.NOT_FOUND,
            message : "Flashcard not found",
            explanation : ["Flashcard not found"]
        }
    }

    if (flashcard.creatorId.toString() !== id.toString()) {
        throw {
            statusCode : StatusCodes.FORBIDDEN,
            message : "You are not authorized to update this flashcard",
            explanation : ["You are not authorized to update this flashcard"]
        }
    }

    const intervalForBox = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 };
    if (correct) {
        flashcard.box = Math.min(flashcard.box + 1, 5);
    }
    else {
         flashcard.box = 1
    };

    flashcard.nextReviewDate = new Date(Date.now() + intervalForBox[flashcard.box] * 24 * 60 * 60 * 1000);
    flashcard.save();

    return flashcard;
}

export async function deleteFlashcardService(flashcardId, userId) {
    const flashcard = await flashcardRepo.getById(flashcardId);
    if (!flashcard) {
        throw {
            statusCode : StatusCodes.NOT_FOUND,
            message : "Flashcard not found",
            explanation : ["Flashcard not found"]
        }
    }

    if (flashcard.creatorId.toString() !== userId.toString()) {
        throw {
            statusCode : StatusCodes.FORBIDDEN,
            message : "You are not authorized to delete this flashcard",
            explanation : ["You are not authorized to delete this flashcard"]
        }
    }
    const deletedFlashcard = await flashcardRepo.delete(flashcardId);
    return deletedFlashcard;
}