import { createFlashcardReq } from "@/apis/flashcard"
import { useMutation } from "react-query"
import { toast } from "../use-toast"

function useCreateFlashcard() {

    const {mutateAsync : createFlashcardMutateAsync, isLoading, isSuccess} = useMutation({
        mutationFn : createFlashcardReq,
        onSuccess : () => {
            toast({
                title : "Flashcard created successfully",
            })
        },
        onError : () => {
            toast({
                title : "Error creating flashcard",
            })
        }
    })


    return {createFlashcardMutateAsync, isLoading, isSuccess}
  
}

export default useCreateFlashcard
