import React from "react";
import "../styles/tile.css";
import { TileProps } from "../types/TileProps";

const Tile = ({ value, onClick }: TileProps) => {
  return (
    <div className={`${value === null ? "" : "tile"}`} onClick={onClick}>
      <p> {value} </p>
    </div>
  );
};

export default Tile;
