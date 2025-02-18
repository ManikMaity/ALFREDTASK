import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import useModalStore from "@/store/modalStore"

function CreateFlashcardBtn() {

    const {openCreateFlashcard} = useModalStore();

  return (
    <Button varient="outline" onClick={() => openCreateFlashcard()}>
      <Plus/>
    </Button>
  )
}

export default CreateFlashcardBtn
