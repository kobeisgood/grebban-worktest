import React, { useState, useEffect } from "react";
import "./styles/App.css";

// import { Tile } from './components/Tile';
import Board from "./components/Board";
import Button from "./components/Button";

import { shuffleBoard } from "./util/shuffleBoard";
import { checkBoardSolved } from "./util/checkBoardSolved";
import { isBoardSolvable } from "./util/isBoardSolvable";

function App() {
  const ROWS: number = 4;
  const COLS: number = 4;

  const [tiles, setTiles] = useState<(number | null)[][]>([[]]);

  const handleShuffle = (matrix: (number | null)[][]): void => {
    do {
      setTiles(shuffleBoard(matrix));
    } while (!isBoardSolvable(matrix));
  };

  useEffect(() => {
    const tileMatrix: (number | null)[][] = Array.from(
      Array(ROWS),
      () => new Array(COLS)
    );

    let counter = 1;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        tileMatrix[i][j] = counter;
        counter++;
      }
    }
    tileMatrix[ROWS - 1][COLS - 1] = null;

    handleShuffle(tileMatrix);
  }, []);

  const handleTileClicked = (rowPressed: number, colPressed: number): void => {
    const tile: number | null = tiles[rowPressed][colPressed];
    if (tile === null) return;

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (tiles[i][j] === null) {
          if (rowPressed !== i && colPressed !== j) return; // no empty spaces on row or column to move to

          if (rowPressed === i) {
            const direction = colPressed > j ? 1 : -1;

            for (let k = j; k !== colPressed; k += direction) {
              tiles[i][k] = tiles[i][k + direction];
            }

            tiles[rowPressed][colPressed] = null;

            setTiles([...tiles]);
          }

          if (colPressed === j) {
            const direction = rowPressed > i ? 1 : -1;

            for (let k = i; k !== rowPressed; k += direction) {
              tiles[k][j] = tiles[k + direction][j];
            }

            tiles[rowPressed][colPressed] = null;

            setTiles([...tiles]);
          }
        }
      }
    }
  };

  return (
    <div className="App">
      <h1> Grebban Worktest</h1>

      {/* Game board with tiles in it */}
      <Board
        rows={ROWS}
        cols={COLS}
        tiles={tiles}
        onTileClicked={handleTileClicked}
      />

      {/* Button to shuffle the board */}
      <Button text={"Shuffle"} onClick={() => handleShuffle(tiles)} />

      {checkBoardSolved(tiles) && (
        <div className="winner">Congratulations! You solved the puzzle!</div>
      )}
    </div>
  );
}

export default App;
