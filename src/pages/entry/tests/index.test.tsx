import {describe, expect, test} from "vitest";
import {render, userEvent, screen} from "@utils/test-util.tsx";
import IndexPage from "../index.tsx";

/**
 * 요구 사항
 * - (필수) 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
 */
describe('인덱스 페이지', () => {
    test('기본 화면 확인', () => {
        render(<IndexPage />, {})

        expect(screen.getByText('퀴즈 갯수')).not.toBeNull()
        expect(screen.getByText('퀴즈 난이도')).not.toBeNull()
        expect(screen.getByText('퀴즈 풀기')).not.toBeNull()
    })

    test('퀴즈 풀기 버튼 클릭 시 퀴즈 페이지로 이동', async () => {
        const { history } = render(<IndexPage />, {})

        // act
        await userEvent.click(screen.getByText('퀴즈 풀기'))

        // assert
        expect(history.location.pathname).eq('/quiz')
    })
})