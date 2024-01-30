import { http, HttpResponse } from 'msw'
import {DEFAULT_QUIZ_MOCK_DATA} from "./data/quiz.ts";

export const BASE_URL = 'http://localhost:3001/api/v1'

export const handlers = [
  // 퀴즈 조회
  http.get(BASE_URL+'/family-refund/members', () => {
    return HttpResponse.json({ response_code: 0, results: DEFAULT_QUIZ_MOCK_DATA})
  })
]