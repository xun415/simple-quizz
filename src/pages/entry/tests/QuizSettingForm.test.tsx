import { describe, expect, test, vi } from "vitest";
import QuizSettingForm from "../QuizSettingForm.tsx";
import {render, screen, userEvent} from "@utils/test-util";
import {DEFAULT_DIFFICULTY, DEFAULT_NUMBER_OF_QUIZ, QuizDifficulty} from "../../../constant.ts";

describe('[index page] > form', () => {
    test('기본 렌더링 및 디폴트 확인', () => {
        // arrange
        const onSubmit = vi.fn
        render(<QuizSettingForm onSubmit={onSubmit}  /> , {})

        // assert
        const difficultySelect: HTMLSelectElement = screen.getByLabelText('퀴즈 난이도')
        expect(difficultySelect).not.toBeNull()
        const defaultDifficultyOption = screen.getByRole('option', { name: '전체' }) as HTMLOptionElement;
        expect(defaultDifficultyOption.selected).toBeTruthy();

        const amountSelect: HTMLSelectElement = screen.getByLabelText('퀴즈 갯수')
        expect(amountSelect).not.toBeNull()
        const defaultAmountOption = screen.getByRole('option', { name: '10 문제' }) as HTMLOptionElement;
        expect(defaultAmountOption.selected).toBeTruthy();
    })

    test('form submit 시 기본값 확인', async () => {
        // arrange
        const onSubmit = vi.fn()
        render(<QuizSettingForm onSubmit={onSubmit} /> , {})

        // act
        const submitButton: HTMLButtonElement = screen.getByRole('button', { name: '퀴즈 풀기' })
        await userEvent.click(submitButton)

        // assert
        expect(onSubmit).toBeCalled()
        expect(onSubmit).toBeCalledWith({
            amount: DEFAULT_NUMBER_OF_QUIZ,
            difficulty: DEFAULT_DIFFICULTY
        })
    })

    test('form 조작 후 submit 시 데이터 변경 확인', async () => {
        // arrange
        const onSubmit = vi.fn()
        render(<QuizSettingForm onSubmit={onSubmit} /> , {})

        // act
        const difficultySelect: HTMLSelectElement = screen.getByLabelText('퀴즈 난이도')
        await userEvent.selectOptions(difficultySelect, QuizDifficulty.쉬움)

        const numberOfQuizSelect: HTMLSelectElement = screen.getByLabelText('퀴즈 갯수')
        await userEvent.selectOptions(numberOfQuizSelect, '5')

        const submitButton: HTMLButtonElement = screen.getByRole('button', { name: '퀴즈 풀기' })
        await userEvent.click(submitButton)

        // assert
        expect(onSubmit).toBeCalledWith({
            amount: '5',
            difficulty: QuizDifficulty.쉬움
        })
    })
})