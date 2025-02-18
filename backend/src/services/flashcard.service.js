import flashcardRepo from "../repositories/flashcard.repo.js";

export async function getUserFlashcardsService(id) {
    const flashcards = await flashcardRepo.getTodaysUserFlashcards(id);
    return flashcards;
}