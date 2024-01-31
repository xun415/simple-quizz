import { http, HttpResponse } from 'msw'
import {DEFAULT_QUIZ_MOCK_DATA} from "./data/quiz.ts";

export const handlers = [
  // 퀴즈 조회
  http.get('https://opentdb.com/api.php', () => {
    return HttpResponse.json({ response_code: 0, results: DEFAULT_QUIZ_MOCK_DATA})
  })
]