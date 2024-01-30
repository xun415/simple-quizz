export const QuizAnswerFormat = {
    객관식: 'multiple',
    OX: 'boolean'
}

export type QuizAnswerFormatType = (typeof QuizAnswerFormat)[keyof typeof QuizAnswerFormat]

export const QuizDifficulty = {
    쉬움: 'easy',
    중간: 'medium',
    어려움: 'hard'
}

export type QuizDifficultyType = (typeof QuizDifficulty)[keyof typeof QuizDifficulty]