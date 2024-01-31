import {create} from "zustand";
import {Quiz} from "../types.ts";
import dayjs from "dayjs";

type QuizRound = Quiz & {
    userAnswer: string | null
}

type UseQuizGameStore = {
    quizRounds: Array<QuizRound>
    initQuizRounds: (quizList: Array<Quiz>) => void
    setUserAnswer: (userAnswer: string, currenRound: number) => void
    gameStartAt: string | null
    gameEndAt: string | null
    reset: () => void
    endGame: () => void
}

const INIT_STATE = {
    quizRounds: [],
    gameStartAt: null,
    gameEndAt: null,
}

export const useQuizGameStore = create<UseQuizGameStore>(
    (set, get) => ({
        ...INIT_STATE,
        initQuizRounds: quizList => {
            set({
                quizRounds: quizList.map(quiz => ({...quiz, userAnswer: null })),
                gameStartAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
            })
        },
        setUserAnswer: (userAnswer, currenRound) => {
            set({ quizRounds: get().quizRounds.map((round, index) =>
                    ({ ...round, userAnswer: index === currenRound ? userAnswer : round.userAnswer })) })
        },
        endGame: () => {
            set({ gameEndAt: dayjs().format('YYYY-MM-DD HH:mm:ss')})
        },
        reset: () => {
            set({ ...INIT_STATE })
        }
    })
)