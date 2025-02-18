import { create } from 'zustand';

const useFlashcardStore = create((set) => ({
  flashcards: [],

  setFlashCards : (flashCardArr) => set({flashcards : flashCardArr}),
  removeflashcard: (id) => set((state) => ({
    flashcards: state.flashcards.filter((card) => card._id !== id),
  })),

}));


export default useFlashcardStore;