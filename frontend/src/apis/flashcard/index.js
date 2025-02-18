import axiosInstance from "@/config/axios.config";

export async function getFlashcardsReq() {
    try {
        const reponse = await axiosInstance.get("/flashcards", {
            headers : {
                "flashcard-token" : localStorage.getItem("flashcard-token")
            }
        })

        return reponse.data.data;
    }
    catch(error){
        throw error.response.data;
    }
}

export async function createFlashcardReq({question, answer}) {
    try {
        const reponse = await axiosInstance.post("/flashcards", {question, answer}, {
            headers : {
                "flashcard-token" : localStorage.getItem("flashcard-token")
            }
        });

        return reponse.data.data;
    }
    catch(error){
        throw error.response.data;
    }
}

export async function updateFlashcardReq({id, correct}) {
    try {
        const reponse = await axiosInstance.put(`/flashcards/${id}`, {correct}, {
            headers : {
                "flashcard-token" : localStorage.getItem("flashcard-token")
            }
        });

        return reponse.data;
    }
    catch(error){
        throw error.response.data;
    }
}