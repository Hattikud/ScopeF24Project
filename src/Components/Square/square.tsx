import React from "react";
import styles from "./square.module.css";

interface SquareProps {
  squareText: string;
  connection: string;
  isSelected: boolean;
  isLocked: boolean;
  onClick: (squareText: string, connection: string) => void;
}

const Square: React.FC<SquareProps> = ({ squareText, connection, isSelected, isLocked, onClick }) => {
  const handleClick = () => {
    if (!isLocked) {
      onClick(squareText, connection);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.Button} ${isSelected ? styles.Selected : ""} ${
        isLocked ? styles.Locked : ""
      }`}
      disabled={isLocked}
    >
      {squareText}
    </button>
  );
};

export default Square;
