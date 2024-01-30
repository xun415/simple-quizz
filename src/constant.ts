export const QuizAnswerFormat = {
    객관식: 'multiple',
    OX: 'boolean'
}

export type QuizAnswerFormatType = (typeof QuizAnswerFormat)[keyof typeof QuizAnswerFormat]

export const QuizDifficulty = {
    전체: undefined,
    쉬움: 'easy',
    중간: 'medium',
    어려움: 'hard'
}

export type QuizDifficultyType = (typeof QuizDifficulty)[keyof typeof QuizDifficulty]

export const DEFAULT_DIFFICULTY = QuizDifficulty.전체

export const DEFAULT_NUMBER_OF_QUIZ = 10