import { create } from "zustand";

interface StudentDashboardStore {
    showModel: boolean;
    setshowModel: () => void;
}

export const useStudentDashboardStore = create<StudentDashboardStore>((set) => ({
    showModel: false,
    setshowModel: () => set((state) => ({ showModel: !state.showModel })),
}));