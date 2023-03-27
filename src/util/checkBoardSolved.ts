export const isValueInOrder = (matrix: (number | null)[][]): boolean => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let expectedValue = 1;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // If the current cell is not null and is not the expected value, the board is not solved
      if (matrix[i][j] !== null && matrix[i][j] !== expectedValue) {
        return false;
      }
      expectedValue++;
    }
  }
  return true;
};

export const isLastValueNull = (matrix: (number | null)[][]): boolean => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  return matrix[numRows - 1][numCols - 1] === null;
};

export const checkBoardSolved = (matrix: (number | null)[][]): boolean => {
  // If all cells are in order and the last value is null, the board is solved
  return isValueInOrder(matrix) && isLastValueNull(matrix);
};
