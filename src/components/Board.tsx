import React from 'react';
import Tile from './Tile';
import { BoardProps } from '../types/BoardProps';
import '../styles/board.css';

const Board = ({ rows, cols, tiles, onTileClicked }: BoardProps) => {
  // create a string with a grid template for the specified number of rows and columns
  const gridTemplate = `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`;

  return (
    <div className="board" style={{
      display: 'grid',
      gridTemplate: gridTemplate,
      gridGap: '10px',
      width: '100%',
      height: '100%',
      margin: '0 auto',
      padding: '10px',
      backgroundColor: '#bdbbb7',
      border: '1px solid black',
      borderRadius: '5px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'
    }}>
      {tiles.map((row, i) => {
        return row.map((tile, j) => {
          return <Tile key={`${i}-${j}`} value={tile} onClick={() => onTileClicked(i, j)}/>;
        })
      })}
    </div>
  )
}

export default Board;
