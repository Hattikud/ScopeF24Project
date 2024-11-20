import React from 'react';
import styles from "./square.module.css"; 


interface SquareProps {
    ID: number;
    squareText: string;
}

const press = () => {
    // Does Nothing
}

const Square: React.FC<SquareProps> = ({ ID, squareText }) => {
    return (
        <button onClick={press} className={styles.Button}>
            {squareText}
        </button>
    );
};

export default Square;