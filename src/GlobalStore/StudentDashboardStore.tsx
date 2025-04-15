import { create } from "zustand";

interface StudentDashboardStore {
    showModel: boolean;
    setshowModel: () => void;
    userEmail: string;
    setuserEmail: (email: string) => void;
}

export const useStudentDashboardStore = create<StudentDashboardStore>((set) => ({
    showModel: false,
    setshowModel: () => set((state) => ({ showModel: !state.showModel })),
    userEmail: "",
    setuserEmail: (email: string) => set(() => ({ userEmail: email })),
}));
