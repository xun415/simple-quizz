export const rgbToHex = (rgb: string, { isCapitalized = true }: { isCapitalized: boolean }): string => {
    // RGB 값을 쉼표로 분리하여 배열로 만듦
    const rgbArray = rgb.match(/\d+/g) || [];

    // 각 RGB 값을 16진수로 변환하고 두 자리로 만듦
    const hexArray = rgbArray.map(value => (+value).toString(16).padStart(2, '0'));

    // 해시 코드로 조합
    const hexCode = `#${hexArray.join('')}`;

    return isCapitalized?  hexCode.toUpperCase() : hexCode;
}