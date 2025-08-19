import {create} from "zustand/react";
import {NetworkService} from "@/api/request";

interface StreakState {
    isTestDay: boolean;
    lastVisitDate: string;
    nextTestDay: number;
    streak: number;
    studyGroup: number;
}

const res = await NetworkService.streak();

const useStreakStore = create<StreakState>()((set) => ({
    isTestDay: res.data.isTestDay,
    lastVisitDate: res.data.last_visit_date,
    nextTestDay: res.data.next_test_day,
    streak: res.data.streak,
    studyGroup: res.data.study_group,
}))
