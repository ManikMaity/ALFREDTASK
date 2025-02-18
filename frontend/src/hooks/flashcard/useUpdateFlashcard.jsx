import { updateFlashcardReq } from "@/apis/flashcard"
import { useMutation } from "react-query"
import { toast } from "../use-toast"

function useUpdateFlashcard() {
    
  const {mutateAsync : updateFlashcardMutateAsync, isLoading, isSuccess} = useMutation({
    mutationFn : updateFlashcardReq,
    onError : () => {
        toast({
            description : "Error updating flashcard"
        })
    }
  })


  return {updateFlashcardMutateAsync, isLoading, isSuccess};
}

export default useUpdateFlashcard
