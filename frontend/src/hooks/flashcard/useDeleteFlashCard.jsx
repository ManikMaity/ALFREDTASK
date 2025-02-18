import { deleteFlashcardReq } from "@/apis/flashcard"
import { useMutation } from "react-query"
import { toast } from "../use-toast"

function useDeleteFlashCard() {
  const {mutateAsync : deleteFlashcardMutateAsync, isLoading, isSuccess} = useMutation({
    mutationFn : deleteFlashcardReq,
    onSuccess : () => {
        toast({
            description : "Flashcard deleted successfully"
        })
    },
    onError : () => {
        toast({
            description : "Error while deleting flashcard"
        })
    }
  })


  return {deleteFlashcardMutateAsync, isLoading, isSuccess}
}

export default useDeleteFlashCard
