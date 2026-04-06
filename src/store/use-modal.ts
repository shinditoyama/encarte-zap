import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  recipe: IRecipe | null;
  openModal: (recipe: IRecipe) => void;
  closeModal: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  recipe: null,
  openModal: (recipe) => set({ isOpen: true, recipe }),
  closeModal: () => set({ isOpen: false, recipe: null }),
}));
