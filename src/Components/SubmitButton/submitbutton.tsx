import React from "react";
import styles from "./submitbutton.module.css";

interface SubmitButtonProps {
  Submitted: boolean;
  onClick: () => void;
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ Submitted, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={styles.SubmitButton}
      style={{ display: "flex" }}
      disabled={disabled}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
