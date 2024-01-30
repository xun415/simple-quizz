import axios, {AxiosResponse} from "axios";
import {Quiz} from "../types.ts";
import {QuizAnswerFormatType, QuizDifficultyType} from "../constant.ts";

type QuizParam = {
    // 퀴즈 타입
    type?: QuizAnswerFormatType
    // 퀴즈 갯수
    amount: number
    // 퀴즈 난이도
    difficulty?: QuizDifficultyType
}

export type QuizResponse = {
    response_code: number
    results: Array<Quiz>
}

/**
 * 퀴즈 문제를 조회합니다.
 *
 * @param type 퀴즈 타입
 * @param amount 퀴즈 갯수
 * @param difficulty 난이도
 */
export async function getQuiz({ type = 'multiple', amount = 10, difficulty }: QuizParam): Promise<AxiosResponse<QuizResponse>> {
    return axios.get(`https://opentdb.com/api.php?amount=${amount}&type=${type}&difficulty=${difficulty}`)
}