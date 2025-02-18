import flashcardModel from "../schemas/flashcard.schema.js";
import crudFunctions from "./crud.js";

const flashcardRepo = {
    ...crudFunctions(flashcardModel),
}

export default flashcardRepo;