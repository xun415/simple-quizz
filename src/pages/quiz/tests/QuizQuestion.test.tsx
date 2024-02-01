import {describe, expect, test, vi} from "vitest";
import {DEFAULT_QUIZ_MOCK_DATA} from "../../../mocks/data/quiz.ts";
import {render, screen, userEvent} from "@utils/test-util.tsx";
import QuizQuestion from "../QuizQuestion.tsx";
import {COLOR} from '@assets/styles/vars.css.ts'
import {waitFor} from "@testing-library/react";
import {decodeHTMLEntities} from "@utils/string.ts";

describe('[quiz page] > quiz question', () => {
    test('기본 렌더링 확인', () => {
        const quiz = DEFAULT_QUIZ_MOCK_DATA[0]
        const onSelectAnswer = vi.fn()
        render(<QuizQuestion quiz={quiz} onSelectAnswer={onSelectAnswer} />, {})

        expect(screen.getByText(decodeHTMLEntities(quiz.question))).not.toBeNull()
        expect(screen.getByText(decodeHTMLEntities(quiz.correct_answer))).not.toBeNull()
        quiz.incorrect_answers.forEach(incorrectAnswer => {
            expect(screen.getByText(decodeHTMLEntities(incorrectAnswer))).not.toBeNull()
        })
    })

    test('오답 선택 시 해당 버튼 색 red 로 변경', async () => {
        const quiz = DEFAULT_QUIZ_MOCK_DATA[0]
        const onSelectAnswer = vi.fn()
        render(<QuizQuestion quiz={quiz} onSelectAnswer={onSelectAnswer} />, {})
        const wrongButton = screen.getByRole('button', { name:  quiz.incorrect_answers[0] })

        // act
        await userEvent.click(wrongButton)

        // assert
        waitFor(() => expect(wrongButton.style.background).eq(COLOR.RED))
    })

    test('정답 선택 시 해당 버튼 색 green 으로 변경', async () => {
        const quiz = DEFAULT_QUIZ_MOCK_DATA[0]
        const onSelectAnswer = vi.fn()
        render(<QuizQuestion quiz={quiz} onSelectAnswer={onSelectAnswer} />, {})
        const correctButton: HTMLButtonElement = screen.getByRole('button', { name:  quiz.correct_answer })

        // act
        await userEvent.click(correctButton)

        // assert
        waitFor(() => expect(correctButton.style.background).eq(COLOR.GREEN))
    })
})