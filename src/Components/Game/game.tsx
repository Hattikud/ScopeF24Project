"use client";
import { useState } from "react";
import styles from "./game.module.css";
import SubmitButton from "../SubmitButton/submitbutton";
import Square from "../Square/square";

export default function Game() {
  const [selectedPairs, setSelectedPairs] = useState<[string, string][]>([]);
  const [lockedSquares, setLockedSquares] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [lives, setLives] = useState(4);
  const [gameOver, setGameOver] = useState(false);

  const dummyGrid = [
    { text: "cat1a", connection: "1" },
    { text: "cat1b", connection: "1" },
    { text: "cat2a", connection: "2" },
    { text: "cat2b", connection: "2" },
    { text: "cat3a", connection: "3" },
    { text: "cat3b", connection: "3" },
    { text: "cat4a", connection: "4" },
    { text: "cat4b", connection: "4" },
    { text: "cat1c", connection: "1" },
    { text: "cat2c", connection: "2" },
    { text: "cat3c", connection: "3" },
    { text: "cat4c", connection: "4" },
    { text: "cat1d", connection: "1" },
    { text: "cat2d", connection: "2" },
    { text: "cat3d", connection: "3" },
    { text: "cat4d", connection: "4" },
  ];

  const handleSquareClick = (squareText: string, connection: string) => {
    setSelectedPairs((prev) => {
      const alreadySelected = prev.find(([text]) => text === squareText);
      if (alreadySelected) {
        return prev.filter(([text]) => text !== squareText);
      }
      if (prev.length < 4) {
        return [...prev, [squareText, connection]];
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    if (selectedPairs.length === 4) {
      if (allSecondMembersEqual(selectedPairs)) {
        setLockedSquares((prev) => [
          ...prev,
          ...selectedPairs.map(([text]) => text),
        ]);
      } else {
        setLives((prev) => {
          const newLives = prev - 1;
          if (newLives === 0) {
            setGameOver(true); // End the game if lives reach 0
          }
          return newLives;
        });
        alert("Not a valid connection.");
      }
      setSubmitted(true);
      setSelectedPairs([]); 
    } else {
      alert("You must select exactly 4 squares.");
    }
  };

  return (
    <div>
      <div className={styles.Lives}>
        <h1>Lives Remaining: {lives}</h1>
        {gameOver && <h2 className={styles.GameOver}>Game Over!</h2>}
      </div>
      <div className={styles.GameBoard}>
        {[0, 1, 2, 3].map((rowIndex) => (
          <div className={styles[`Row${rowIndex + 1}`]} key={rowIndex}>
            {dummyGrid.slice(rowIndex * 4, rowIndex * 4 + 4).map(({ text, connection }, colIndex) => (
              <Square
                key={`${rowIndex}-${colIndex}`}
                squareText={text}
                connection={connection}
                onClick={handleSquareClick}
                isSelected={!!selectedPairs.find(([t]) => t === text)}
                isLocked={lockedSquares.includes(text)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.Buttons}>
        <SubmitButton
          Submitted={submitted}
          onClick={handleSubmit}
          disabled={selectedPairs.length !== 4}
        />
      </div>
    </div>
  );
}

function allSecondMembersEqual(pairs: [string, string][]): boolean {
  if (pairs.length === 0) {
    return true;
  }

  const firstSecond = pairs[0][1];

  return pairs.slice(1).reduce((acc, [, second]) => acc && second === firstSecond, true);
}
