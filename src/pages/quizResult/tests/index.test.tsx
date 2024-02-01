import {beforeEach, describe, expect, test} from "vitest";
import { useQuizGameStore} from "../../../stores/useQuizGameStore.ts";
import {DEFAULT_QUIZ_MOCK_DATA} from "../../../mocks/data/quiz.ts";
import {render, screen, userEvent, waitFor} from "@utils/test-util.tsx";
import QuizResultPage from '../index.tsx'
import {COLOR} from "@assets/styles/vars.css.ts";
import {rgbToHex} from "@utils/color.ts";
/**
 * 퀴즈 완료 요구사항
 * 모든 문항을 다 풀면 다음과 같은 결과 정보를 볼 수 있음
 * - (필수) 퀴즈를 마칠 때까지 소요된 시간
 * - (필수) 정답 개수
 * - (필수) 오답 개수
 * - (필수) 정 오답에 대한 비율을 차트로 표기
 * - (필수) 오답 노트 기능
 */
describe('퀴즈 완료 페이지', async () => {
    beforeEach(() => {
        useQuizGameStore.setState({
            quizRounds: [
                {...DEFAULT_QUIZ_MOCK_DATA[0], userAnswer: DEFAULT_QUIZ_MOCK_DATA[0].correct_answer},
                {...DEFAULT_QUIZ_MOCK_DATA[1], userAnswer: DEFAULT_QUIZ_MOCK_DATA[1].incorrect_answers[1]},
                {...DEFAULT_QUIZ_MOCK_DATA[2], userAnswer: DEFAULT_QUIZ_MOCK_DATA[2].incorrect_answers[1]},
            ],
            gameStartAt: '2024-02-01 12:11:15',
            gameEndAt: '2024-02-01 12:14:20',
        })
    })
    test('렌더링 확인', () => {
        render(<QuizResultPage />, {})

        expect(screen.getByText('소요 시간')).not.toBeNull()
        expect(screen.getByText('정답 개수')).not.toBeNull()
        expect(screen.getByText('오답 개수')).not.toBeNull()

        expect(screen.getByTestId('correct-answer-cnt').innerHTML).eq('1 개')
        expect(screen.getByTestId('incorrect-answer-cnt').innerHTML).eq('2 개')
        expect(screen.getByTestId('time-spent').innerHTML).eq('3 분 5 초')
    })

    test('1분 이하일 때 소요시간에 초만 표시', () => {
        useQuizGameStore.setState({
            quizRounds: [
                {...DEFAULT_QUIZ_MOCK_DATA[0], userAnswer: DEFAULT_QUIZ_MOCK_DATA[0].correct_answer},
                {...DEFAULT_QUIZ_MOCK_DATA[1], userAnswer: DEFAULT_QUIZ_MOCK_DATA[1].incorrect_answers[1]},
                {...DEFAULT_QUIZ_MOCK_DATA[2], userAnswer: DEFAULT_QUIZ_MOCK_DATA[2].incorrect_answers[1]},
            ],
            gameStartAt: '2024-02-01 12:14:15',
            gameEndAt: '2024-02-01 12:14:20',
        })

        render(<QuizResultPage />, {})

        expect(screen.getByText('소요 시간')).not.toBeNull()

        expect(screen.getByTestId('time-spent').innerHTML).eq('5 초')
    })

    test('1시간 이상일 때 소요시간에 시간 표시', () => {
        useQuizGameStore.setState({
            quizRounds: [
                {...DEFAULT_QUIZ_MOCK_DATA[0], userAnswer: DEFAULT_QUIZ_MOCK_DATA[0].correct_answer},
                {...DEFAULT_QUIZ_MOCK_DATA[1], userAnswer: DEFAULT_QUIZ_MOCK_DATA[1].incorrect_answers[1]},
                {...DEFAULT_QUIZ_MOCK_DATA[2], userAnswer: DEFAULT_QUIZ_MOCK_DATA[2].incorrect_answers[1]},
            ],
            gameStartAt: '2024-02-01 12:14:15',
            gameEndAt: '2024-02-01 13:15:20',
        })

        render(<QuizResultPage />, {})

        expect(screen.getByText('소요 시간')).not.toBeNull()
        expect(screen.getByTestId('time-spent').innerHTML).eq('1 시간 1 분 5 초')
    })

    test('오답 노트 목록 확인', () => {
        useQuizGameStore.setState({
            quizRounds: [
                {...DEFAULT_QUIZ_MOCK_DATA[0], userAnswer: DEFAULT_QUIZ_MOCK_DATA[0].correct_answer},
                {...DEFAULT_QUIZ_MOCK_DATA[1], userAnswer: DEFAULT_QUIZ_MOCK_DATA[1].incorrect_answers[1]},
            ],
            gameStartAt: '2024-02-01 12:11:15',
            gameEndAt: '2024-02-01 12:14:20',
        })

        render(<QuizResultPage />, {})

        // 1번문제 -> 정답
        expect(screen.getByText(DEFAULT_QUIZ_MOCK_DATA[0].question)).not.toBeNull()
        expect(
            rgbToHex(
                getComputedStyle(screen.getByText('문제 1'),).color,
                {isCapitalized: true})
        ).eq(COLOR.GREEN)

        // 2번문제 -> 오답
        expect(screen.getByText(DEFAULT_QUIZ_MOCK_DATA[1].question)).not.toBeNull()
        expect(
            rgbToHex(
                getComputedStyle(screen.getByText('문제 2'),).color,
                {isCapitalized: true})
        ).eq(COLOR.RED)
    })

    test('다시 하기 클릭 시 처음 페이지로 이동', async () => {
        const {history} = render(<QuizResultPage />, {})

        const retryButton: HTMLButtonElement = screen.getByRole('button', {name: '다시 하기'})
        expect(retryButton).not.toBeNull()
        void userEvent.click(retryButton)

        void waitFor(() => {
            expect(history.location.pathname).eq('/')
        }, { timeout: 1000 })
    })
})