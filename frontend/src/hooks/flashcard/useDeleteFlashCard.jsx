import { deleteFlashcardReq } from "@/apis/flashcard";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "../use-toast";

function useDeleteFlashCard() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteFlashcardMutateAsync,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: deleteFlashcardReq,
    onSuccess: () => {
      toast({
        description: "Flashcard deleted successfully",
      });
      queryClient.invalidateQueries(["flashcards"]);
    },
    onError: () => {
      toast({
        description: "Error while deleting flashcard",
      });
    },
  });

  return { deleteFlashcardMutateAsync, isLoading, isSuccess };
}

export default useDeleteFlashCard;
