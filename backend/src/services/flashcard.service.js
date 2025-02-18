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