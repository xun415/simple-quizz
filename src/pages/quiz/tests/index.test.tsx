import {describe, expect, test} from "vitest";
import QuizPage from "../index.tsx";
import {render, screen, userEvent} from "@utils/test-util.tsx";
import {DEFAULT_QUIZ_MOCK_DATA} from "../../../mocks/data/quiz.ts";
import {waitFor} from "@testing-library/react";
import {server} from "../../../mocks/server.ts";
import {http, HttpResponse} from "msw";

/**
 * 퀴즈 요구사항
 * - (필수) 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
 * - (필수) 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
 * - (필수) 답안 선택 후 다음 문항을 볼 수 있다.
 * - (필수) 답안이 맞았는지 틀렸는지 바로 알 수 있다.
 * - (필수) 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
 */
describe('퀴즈 페이지', () => {
    test('렌더링 확인', () => {
        render(<QuizPage />, {})

        waitFor(() => expect(screen.getByText('문제 1')).not.toBeNull())

        const nextQuestionButton: HTMLButtonElement = screen.getByRole('button', { name: '다음 문항' })
        expect(nextQuestionButton.disabled).toBeTruthy()
    })

    test('문제를 풀면 다음 문제 버튼 활성화', async () => {
        render(<QuizPage />, {})

        const nextQuestionButton: HTMLButtonElement = screen.getByRole('button', { name: '다음 문항' })
        expect(nextQuestionButton.disabled).toBeTruthy()

        const firstQuiz = DEFAULT_QUIZ_MOCK_DATA[0]
        await waitFor(() => expect(screen.getByText(firstQuiz.correct_answer)).not.toBeNull())
        const correctAnswerButton: HTMLButtonElement = screen.getByText(firstQuiz.correct_answer)

        await userEvent.click(correctAnswerButton)

        waitFor(() => expect(nextQuestionButton.disabled).toBeFalsy())
    })

    test('문제를 풀고 다음 문항 클릭 시 다음 문제 표시', async () => {
        render(<QuizPage />, {})
        const firstQuiz = DEFAULT_QUIZ_MOCK_DATA[0]
        await waitFor(() => expect(screen.getByText(firstQuiz.correct_answer)).not.toBeNull())

        await userEvent.click(screen.getByText(firstQuiz.correct_answer))

        const nextQuestionButton: HTMLButtonElement = screen.getByRole('button', { name: '다음 문항' })

        await userEvent.click(nextQuestionButton)

        const secondQuiz = DEFAULT_QUIZ_MOCK_DATA[1]
        waitFor(() => expect(screen.getByText(secondQuiz.question)).not.toBeNull())
    })

    test('문제를 모두 풀면 리뷰 페이지로 이동', async () => {
        server.use(http.get('https://opentdb.com/api.php', () => {
            return HttpResponse.json({
                response_code: 0,
                results: [DEFAULT_QUIZ_MOCK_DATA[0]]
            })
        }))

        const { history } = render(<QuizPage />, {})
        const firstQuiz = DEFAULT_QUIZ_MOCK_DATA[0]
        await waitFor(() => expect(screen.getByText(firstQuiz.correct_answer)).not.toBeNull())

        await userEvent.click(screen.getByText(firstQuiz.correct_answer))

        const nextQuestionButton: HTMLButtonElement = screen.getByRole('button', { name: '다음 문항' })

        await userEvent.click(nextQuestionButton)

        waitFor(() => expect(history.location.pathname).eq('/quizResult'))
    })
})