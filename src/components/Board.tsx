import React from 'react';
import './styles/board.css';
import Tile from './Tile';
import { BoardProps } from '../types/BoardProps';

const Board = ({ rows, cols, tiles, onTileClick }: BoardProps) => {
    return (
        <div className="board">
            Hello
        </div>    
    )
}

export default Board;