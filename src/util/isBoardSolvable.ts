export const isBoardSolvable = (matrix: (number | null)[][]): boolean => {
    const flatMatrix = matrix.flat().filter((value) => value !== null);
    let inversions = 0;
    const len = flatMatrix.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (flatMatrix[i]! > flatMatrix[j]!) {
                inversions++;
            }
        }
    }
    const blankIndex = matrix.flat().findIndex((value) => value === null);
    const blankRow = Math.floor(blankIndex / matrix.length);
    const blankCol = blankIndex % matrix[0].length;
    const blankPosition = blankRow + blankCol;
    if (blankPosition % 2 === 0) {
        return inversions % 2 !== 0;
    } else {
        return inversions % 2 === 0;
    }
};