import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateFlashcard from "@/hooks/flashcard/useCreateFlashcard";
import useModalStore from "@/store/modalStore";
import { useState } from "react";
import SpinnerLoader from "../atoms/SpinnerLoader";

export default function CreateFlashCardModal() {
  const { createFlashcardModalOpen, closeCreateFlashcard } = useModalStore();
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const { createFlashcardMutateAsync, isLoading } = useCreateFlashcard();

  async function onSubmitFn(e) {
    e.preventDefault();
    console.log("Clicked")
    await createFlashcardMutateAsync(formData);
    setFormData({
      question: "",
      answer: "",
    });
    closeCreateFlashcard();
  }

  return (
    <Dialog
      className=""
      open={createFlashcardModalOpen}
      onOpenChange={closeCreateFlashcard}
    >
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Create Flashcard</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3" onSubmit={onSubmitFn}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              value={formData.question}
              onChange={(e) =>
                setFormData((p) => ({ ...p, question: e.target.value }))
              }
              placeholder="What is the capital of France?"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <Label htmlFor="answer">Answer</Label>
            <Input
              id="answer"
              placeholder="Paris"
              value={formData.answer}
              onChange={(e) =>
                setFormData((p) => ({ ...p, answer: e.target.value }))
              }
            />
          </div>
          <Button type="submit" disabled={isLoading}>{isLoading ? <SpinnerLoader/> : "Create"}</Button>
        </form>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
