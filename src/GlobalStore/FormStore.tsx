import { create } from "zustand";

export interface FormStoreState {
  ActiveFormStep: number;
  setActiveFormStep: (value: number) => void;
}

export const useFormStore = create<FormStoreState>((set) => ({
  ActiveFormStep: 0,
  setActiveFormStep: (value: number) => set({ ActiveFormStep: value }),
}));
