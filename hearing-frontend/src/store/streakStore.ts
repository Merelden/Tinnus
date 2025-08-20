import {create} from "zustand/react";
import {NetworkService} from "@/api/request";

interface StreakState {
    isTestDay: boolean;
    lastVisitDate: string;
    nextTestDay: number;
    streak: number;
    studyGroup: number;
    loaded: boolean;
    loadStreak: () => Promise<void>;
}

const useStreakStore = create<StreakState>()((set) => ({
    isTestDay: false,
    lastVisitDate: "",
    nextTestDay: 0,
    streak: 0,
    studyGroup: 0,
    loaded: false,
    loadStreak: async () => {
        try {
            const res = await NetworkService.streak();
            if (res && res.status === 200) {
                set({
                    isTestDay: res.data.is_test_day,
                    lastVisitDate: res.data.last_visit_date,
                    nextTestDay: res.data.next_test_day,
                    streak: res.data.streak,
                    studyGroup: res.data.study_group,
                    loaded: true,
                });
            } else {
                set({ loaded: true });
            }
        } catch (e) {
            set({ loaded: true });
        }
    },
}))


export const isTestDay = () => useStreakStore((state)=> state.isTestDay);
export const lastVisitDate = () => useStreakStore((state)=> state.lastVisitDate);
export const nextTestDay = () => useStreakStore((state)=> state.nextTestDay);
export const streak = () => useStreakStore((state)=> state.streak);
export const studyGroup = () => useStreakStore((state)=> state.studyGroup);
export const loadStreak = () => useStreakStore.getState().loadStreak();
export const streakLoaded = () => useStreakStore((state)=> state.loaded);
