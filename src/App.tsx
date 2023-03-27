import React, {useState, useEffect} from 'react';
import './styles/App.css';

// import { Tile } from './components/Tile';
import Board from './components/Board';
import Button from './components/Button';

import { shuffleBoard } from './util/shuffleBoard'
import { checkBoardSolved } from './util/checkBoardSolved';
import { isBoardSolvable } from './util/isBoardSolvable';


function App() {

  const ROWS: number = 4;
  const COLS: number = 4; 

  const [tiles, setTiles] = useState<(number | null)[][]>([[]]);

  const handleShuffle = (matrix: (number | null)[][]): void => {
    do {
      setTiles(shuffleBoard(tiles));
    } while (!isBoardSolvable(tiles));
  }


  useEffect(() => {
    const tileMatrix: (number | null)[][] = Array.from(Array(ROWS), () => new Array(COLS));

    let counter = 1;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        tileMatrix[i][j] = counter;
        counter++;
      }
    }
    tileMatrix[ROWS-1][COLS-1] = null;

    handleShuffle(tileMatrix);
    
  }, []);


  return (
    <div className="App">
      <h1> Grebban Worktest</h1>

      {/* Game board with tiles in it */}
      <Board rows={ROWS} cols={COLS} tiles={tiles} />
      
      {/* Button to shuffle the board */}
      <Button text={"Shuffle"} onClick={() => handleShuffle(tiles)} />

      {/* Display tiles */}
      {tiles.map((row, i) => {
        return (
          <div key={i}>
            {row.map((tile, j) => {
              return (
                <div key={j}>
                  {tile === null ? "null" : tile}
                </div>
              )
            })}
          </div>
        )
      })}
      

      {checkBoardSolved(tiles) && <div className="winner">Congratulations! You solved the puzzle!</div>}
      {!isBoardSolvable(tiles) && <div className="winner">The board is not solvable!</div>}
    </div>
  );
}

export default App;
