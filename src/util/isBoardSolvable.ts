// Check if the board is solvable by counting the number of inversions
export const isBoardSolvable = (matrix: (number | null)[][]): boolean => {
  // Flatten the matrix and remove the null value
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

  // Find the index of the blank space in the flattened matrix and calculate its row and column indices
  const blankIndex = matrix.flat().findIndex((value) => value === null);
  const blankRow = Math.floor(blankIndex / matrix.length);
  const blankCol = blankIndex % matrix[0].length;
  const blankPosition = blankRow + blankCol;

  // If the blank space is on an even row counting from the bottom (second-last, fourth-last, etc.) and number of inversions is odd, the board is solvable
  if (blankPosition % 2 === 0) {
    return inversions % 2 !== 0;
  } else {
    return inversions % 2 === 0;
  }
};
