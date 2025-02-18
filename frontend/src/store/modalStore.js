import { create } from 'zustand';

const useModalStore = create((set) => ({
  createFlashcardModalOpen: false,
  EditFlashcardModalOpen : false,


  openCreateFlashcard: () => set({ createFlashcardModalOpen: true }),
  closeCreateFlashcard: () => set({ createFlashcardModalOpen: false }),

  openEditFlashcard: () => set({ EditFlashcardModalOpen: true }),
  closeEditFlashcard: () => set({ EditFlashcardModalOpen: false }),

}));


export default useModalStore;