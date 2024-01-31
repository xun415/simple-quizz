import {QuizDifficultyType} from "../constant.ts";
import {create} from "zustand";
import {persist} from "zustand/middleware";

type UseQuizSettingStore = {
    amount: number
    setAmount: (newAmount: number) => void
    difficulty: QuizDifficultyType,
    setDifficulty: (newDifficulty: QuizDifficultyType) => void
}

export const useQuizSettingStore = create(
    persist<UseQuizSettingStore>(
        (set) => ({
            amount: 10,
            difficulty: undefined,
            setAmount: (newAmount) => set({ amount: newAmount }),
            setDifficulty: (newDifficulty) => set({ difficulty: newDifficulty })
        })
        ,{
            name: 'game-setting'
        }
    )
)