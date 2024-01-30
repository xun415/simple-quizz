import {QuizAnswerFormatType, QuizDifficultyType} from "./constant.ts";

export type Quiz = {
    // 퀴즈 타입
    type: QuizAnswerFormatType
    // 난이도
    difficulty: QuizDifficultyType
    // 카테고리
    category: string
    // 질문
    question: string
    // 정답
    correct_answer: string
    // 오답 목록
    incorrect_answers: Array<string>
}