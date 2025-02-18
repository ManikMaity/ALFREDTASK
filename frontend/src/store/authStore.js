import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      signin: (user, token) => set({ user, token}),
      logout: () => set({ user: null, token: null}),
    }),
    {
      name: "flashcard-auth-storage", 
      getStorage: () => localStorage, 
    }
  )
);

export default useAuthStore;