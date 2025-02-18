import { create } from 'zustand';

const useModalStore = create((set) => ({
  createFlashcardModalOpen: false,

  openCreateFlashcard: () => set({ createFlashcardModalOpen: true }),
  closeCreateFlashcard: () => set({ createFlashcardModalOpen: false }),

}));


export default useModalStore;