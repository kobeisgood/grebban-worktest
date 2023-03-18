import React from "react";
import "../styles/button.css";
import { ButtonProps } from "../types/ButtonProps";

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export {};
