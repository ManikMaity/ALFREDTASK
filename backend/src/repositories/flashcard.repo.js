import flashcardModel from "../schemas/flashcard.schema.js";
import crudFunctions from "./crud.js";

const flashcardRepo = {
    ...crudFunctions(flashcardModel),
    getTodaysUserFlashcards : async function (id) {
        const flashcards = await flashcardModel.find({
            creatorId : id,
            nextReviewDate : {
                $lt : new Date()
            },
        })

        return flashcards;
    }
}

export default flashcardRepo;