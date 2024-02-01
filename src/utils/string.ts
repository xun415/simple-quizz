/**
 * HTML 엔터티 코드(&lt;, &gt; 등)를 포함한 문자를 실제 문자로 변환
 */
export const decodeHTMLEntities = (input: string): string => {
    const div = document.createElement('div');
    div.innerHTML = input;
    return div.textContent || '';
}