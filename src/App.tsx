import React from 'react';
import './styles/App.css';

// import { Tile } from './components/Tile';
// import { Board } from './components/Board';
import Button from './components/Button';

import { shuffleBoard } from './util/shuffleBoard'
import { checkBoardSolved } from './util/checkBoardSolved';


function App() {

  const ROWS: number = 4;
  const COLS: number = 4; 

  return (
    <div className="App">
      <h1> Grebban Worktest</h1>

      {/* Game board with tiles in it  */}
      

      {/* Button to shuffle the board */}
      <Button text={"Shuffle"} onClick={shuffleBoard}/>

      {checkBoardSolved() && <div className="winner">Congratulations! You solved the puzzle!</div>}
    </div>
  );
}

export default App;
