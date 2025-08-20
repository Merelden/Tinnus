'use client'

import { useEffect } from 'react';
import { loadStreak } from '@/store/streakStore';

export default function StreakInit() {
    useEffect(() => {
        loadStreak();
    }, []);
    return null;
}


