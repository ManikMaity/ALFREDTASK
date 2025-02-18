import useGetFlashCard from '@/hooks/flashcard/useGetFlashCard'

function CardContainer() {

  const {data : flashcards, isSuccess, isLoading, refetch, isError} = useGetFlashCard();

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  console.log(flashcards);

  return (
    <div>
      
    </div>
  )
}

export default CardContainer
