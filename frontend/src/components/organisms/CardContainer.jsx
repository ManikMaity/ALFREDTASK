import useGetFlashCard from '@/hooks/flashcard/useGetFlashCard'
import SpinnerLoader from '../atoms/SpinnerLoader';

function CardContainer() {

  const {data : flashcards, isSuccess, isLoading, refetch, isError} = useGetFlashCard();



  return (
    <div className='h-[calc(100vh-150px)] mt-5 ms:mt-10 mx-4 grid place-content-center w-full max-w-[400px] bg-zinc-800 rounded-lg'>
      {isLoading && <SpinnerLoader/>}
      {isError && <p>Something went wrong</p>}
      {isSuccess && flashcards.length === 0 && <p className='text-center'>No flashcards found</p>}
    </div>
  )
}

export default CardContainer
