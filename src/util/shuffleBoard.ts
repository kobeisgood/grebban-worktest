export const shuffleBoard = (
  matrix: (number | null)[][]
): (number | null)[][] => {
  const shuffledMatrix = [...matrix]; // make a copy of the matrix
  let row = shuffledMatrix.length;
  let col = shuffledMatrix[0].length;

  // Iterate through each element in the matrix
  for (let i = row * col - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Calculate the row and column indices of the current and randomly selected elements
    const currentRow = Math.floor(i / col);
    const currentCol = i % col;
    const randomRow = Math.floor(j / col);
    const randomCol = j % col;

    // Swap the current and randomly selected elements
    const temp = shuffledMatrix[currentRow][currentCol];
    shuffledMatrix[currentRow][currentCol] =
      shuffledMatrix[randomRow][randomCol];
    shuffledMatrix[randomRow][randomCol] = temp;
  }

  return shuffledMatrix;
};
