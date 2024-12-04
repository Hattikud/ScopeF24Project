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
    { text: "Ellie", connection: "1" },
    { text: "Joyce", connection: "3" },
    { text: "Ryan", connection: "2" },
    { text: "Max", connection: "1" },
    { text: "John", connection: "4" },
    { text: "Lucas", connection: "2" },
    { text: "Josh", connection: "2" },
    { text: "Valeria", connection: "4" },
    { text: "Hallie", connection: "2" },
    { text: "Gabby", connection: "3" },
    { text: "Deborah", connection: "3" },
    { text: "Malachi", connection: "1" },
    { text: "Adit", connection: "3" },
    { text: "Anjolie", connection: "4" },
    { text: "4th Intl Person", connection: "4" },
    { text: "Kaylee", connection: "1" },
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
        if (selectedPairs[0][1] == "1"){
            alert("Enrolled in CSCI 170");
        }
        else if (selectedPairs[0][1] == "2"){
            alert("Seniors");
        }
        else if (selectedPairs[0][1] == "3"){
            alert("E-Board");
        }
        else {
            alert("International People");
        }
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
