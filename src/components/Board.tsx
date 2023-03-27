import React from "react";
import Tile from "./Tile";
import { BoardProps } from "../types/BoardProps";
import "../styles/board.css";

const Board = ({ rows, cols, tiles, onTileClicked }: BoardProps) => {
  // create a string with a grid template for the specified number of rows and columns
  const gridTemplate = `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`;

  return (
    <div
      className="board"
      style={{
        display: "grid",
        gridTemplate: gridTemplate,
        gridGap: "10px",
      }}
    >
      {tiles.map((row, i) => {
        return row.map((tile, j) => {
          return (
            <Tile
              key={`${i}-${j}`}
              value={tile}
              onClick={() => onTileClicked(i, j)}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
