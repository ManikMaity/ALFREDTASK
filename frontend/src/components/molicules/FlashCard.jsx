import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import useUpdateFlashcard from "@/hooks/flashcard/useUpdateFlashcard";
import SpinnerLoader from "../atoms/SpinnerLoader";
import useFlashcardStore from "@/store/flahcardStore";
import useDeleteFlashCard from "@/hooks/flashcard/useDeleteFlashCard";

export default function FlashCard({ flashcardData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { updateFlashcardMutateAsync, isLoading } = useUpdateFlashcard();
  const { removeflashcard } = useFlashcardStore();
  const {deleteFlashcardMutateAsync, isLoading : isDeleting} = useDeleteFlashCard();

  async function handleResponse(correct) {
    const data = await updateFlashcardMutateAsync({
      id: flashcardData._id,
      correct,
    });
    if (data.success) removeflashcard(flashcardData._id);
  }

  async function  handleDeleteFlashcard() {
    const ok = await confirm("Are you sure want to delete this flashcard?")
    if (!ok) return;
    const data = await deleteFlashcardMutateAsync(flashcardData._id);
    if (data.success) removeflashcard(flashcardData._id);
  }

  return (
    <motion.div
      className="w-full"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="flex items-center justify-center"
        style={{ perspective: 1000 }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative h-[400px] w-full"
        >
          {/* Front side */}
          <Card
            className="absolute flex h-full w-full flex-col items-center justify-center gap-4 p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h1 className="text-2xl font-semibold break-words">
              {flashcardData.question}
            </h1>
            <Button onClick={() => setIsFlipped(true)}>
              <Eye /> Show Answer
            </Button>
          </Card>

          {/* Back side */}
          <Card
            className="absolute flex h-full w-full flex-col items-center justify-center gap-4 p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-center break-words">{flashcardData.answer}</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => handleResponse(false)}
                disabled={isLoading}
                className="bg-red-500 hover:bg-red-400"
              >
                {isLoading ? <SpinnerLoader /> : "Got it wrong"}
              </Button>
              <Button
                size="sm"
                onClick={() => handleResponse(true)}
                disabled={isLoading}
                className="bg-green-500 hover:bg-green-400"
              >
                {isLoading ? <SpinnerLoader /> : "Got it right"}
              </Button>
            </div>
            <div className="flex gap-2">
            <Button size="sm" onClick={() => setIsFlipped(false)}>
              <EyeClosed /> Show Question
            </Button>
            <Button
                size="sm"
                onClick={handleDeleteFlashcard}
                disabled={isDeleting}
              >
                {isDeleting ? <SpinnerLoader /> : "Delete"}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
