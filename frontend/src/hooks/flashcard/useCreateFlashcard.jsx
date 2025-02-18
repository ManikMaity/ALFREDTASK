import { createFlashcardReq } from "@/apis/flashcard"
import {  useMutation, useQueryClient } from "react-query"
import { toast } from "../use-toast"

function useCreateFlashcard() {

    const queryClient = useQueryClient();

    const {mutateAsync : createFlashcardMutateAsync, isLoading, isSuccess} = useMutation({
        mutationFn : createFlashcardReq,
        onSuccess : () => {
            toast({
                title : "Flashcard created successfully",
            })
            queryClient.invalidateQueries(["flashcards"]);
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
