export function shuffleArray<T>(array: T[]): T[] {
    // 배열을 복사하여 원본 배열을 변경하지 않도록 함
    const shuffledArray = array.slice();

    // Fisher-Yates
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}