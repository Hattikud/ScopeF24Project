import React from 'react';
import styles from "./submitbutton.module.css"; 


interface SubmitButtonProps {
    Submitted: boolean
}

const submitPress = () => {
    // Does Nothing
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ Submitted }) => {
    return (
        <button onClick={submitPress} className={styles.SubmitButton} style={{ display: Submitted ? 'none' : 'flex' }}>
            Submit
        </button>
    );
};

export default SubmitButton;