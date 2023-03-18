import React from "react";
import "../styles/tile.css";
import { TileProps } from "../types/TileProps";

const Tile = ({ value, onClick }: TileProps) => {
  return (
    <div className="tile" onClick={onClick}>
      {value}
    </div>
  );
};

export default Tile;
