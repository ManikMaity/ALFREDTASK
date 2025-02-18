import {Schema, model} from "mongoose";

const flashcardSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    creatorId : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
    box: {
        type: Number,
        required: true,
        default: 1, 
        min: 1,
        max: 5
    },
    nextReviewDate: {
        type: Date,
        required: true,
        default: () => new Date(), 
    },
}, { timestamps: true });

const flashcardModel = model("Flashcard", flashcardSchema);

export default flashcardModel;
