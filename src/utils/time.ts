export const formatSecondsToTime = (seconds: number): string => {
    if (seconds < 0) {
        throw new Error("초는 양수여야 합니다..");
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let formattedTime = '';

    if (hours > 0) {
        formattedTime += `${hours} 시간 `;
    }

    if (minutes > 0) {
        formattedTime += `${minutes} 분 `;
    }

    if (remainingSeconds > 0 || (hours === 0 && minutes === 0)) {
        formattedTime += `${remainingSeconds} 초`;
    }

    return formattedTime.trim();
}