// will have tiles: number[][] as parameter

export const checkBoardSolved = (matrix: (number | null)[][]): boolean => {
    const row = matrix.length;
    const col = matrix[0].length;
    let count = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] !== null && matrix[i][j] !== count) {
                
                return false;
            }
            count++;
        }
    }
    if (matrix[row - 1][col - 1] !== null) {
        // Last value is not null
        return false;
    }
    return true;
};
