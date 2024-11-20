'use client'

import { useState, useEffect } from "react";
import styles from "./game.module.css";
import SubmitButton from "../SubmitButton/submitbutton";
import Square from "../Square/square";



export default function Game() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <div className={styles.GameBoard}>
        <div className={styles.Row1}>
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
        </div>
        <div className={styles.Row2}>
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
        </div>
        <div className={styles.Row3}>
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
        </div>
        <div className={styles.Row4}>
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
            <Square ID={1} squareText="Hello" />
        </div>
      </div>

      <div className={styles.Buttons}>
          <SubmitButton Submitted={submitted} />
        </div>
    </div>
  );
}