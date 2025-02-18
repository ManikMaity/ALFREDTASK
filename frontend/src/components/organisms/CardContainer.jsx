import { AnimatePresence } from 'framer-motion'
import useGetFlashCard from '@/hooks/flashcard/useGetFlashCard'
import SpinnerLoader from '../atoms/SpinnerLoader';
import FlashCard from '../molicules/FlashCard';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import useFlashcardStore from '@/store/flahcardStore';

function CardContainer() {
  const {data, isSuccess, isLoading, isError} = useGetFlashCard();
  const {flashcards, setFlashCards} = useFlashcardStore();
  
  useEffect(() => {
    setFlashCards(data);
  }, [data])

  return (
    <div className='relative h-[calc(100vh-80px)] text-center mt-5 ms:mt-10 mx-4 w-full max-w-[300px] rounded-lg'>
      {isLoading && <div className='p-3 grid place-content-center'><SpinnerLoader/></div>}
      {isError && <p>Something went wrong</p>}
      {isSuccess && flashcards && flashcards.length > 0 &&  <h3 className='mb-5'>{`😮 You have ${flashcards.length} flashcards due today.`}</h3>}
      <AnimatePresence>
        {isSuccess && flashcards && flashcards.map((flashcard, index) => (
          <motion.div
            key={flashcard._id}
            className="absolute w-full"
            style={{
              zIndex: flashcards.length - index,
              transformOrigin: 'top center',
            }}
            initial={{ 
              scale: 1 - index * 0.05,
              y: index * 20,
              opacity: 1 
            }}
            animate={{ 
              scale: 1 - index * 0.05,
              y: index * 20,
              opacity: 1 
            }}
            exit={{
              opacity: 0,
              y: -100,
              scale: 0.5,
              transition: { duration: 0.2 }
            }}
            layout
          >
            <FlashCard flashcardData={flashcard}/>
          </motion.div>
        ))}
      </AnimatePresence>

      {isSuccess && flashcards && flashcards.length === 0 && (
        <p>No flashcard for today.</p>
      )}
    </div>
  )
}

export default CardContainer