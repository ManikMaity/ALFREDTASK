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
