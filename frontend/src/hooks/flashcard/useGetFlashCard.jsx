import { getFlashcardsReq } from "@/apis/flashcard"
import { useQuery } from "react-query"
import { toast } from "../use-toast"

function useGetFlashCard() {


  const {data, isLoading, isError, isSuccess, refetch} = useQuery({
    queryFn : getFlashcardsReq,
    queryKey : ["flashcards"],
    onError : () => {
        toast({
            description : "Error fetching flashcards"
        })
    }
  })


  return {
    data,
    isSuccess,
    isLoading,
    refetch,
    isError
  }
}

export default useGetFlashCard
