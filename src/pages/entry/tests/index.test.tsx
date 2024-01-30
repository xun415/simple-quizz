import {describe, expect, test} from "vitest";
import {render} from "../../../utils/test-util.tsx";
import IndexPage from "../index.tsx";
import {screen} from "@testing-library/react";

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

    test('퀴즈 풀기 버튼 클릭 시 퀴즈 페이지로 이동', () => {
        const { history } = render(<IndexPage />, {})

        expect(screen.getByText('퀴즈 풀기')).not.toBeNull()

        expect(history.location.pathname).eq('/quiz')
    })
})