import React from "react";
import styles from "./Score.module.css";

const Score = ({ score }) => {
  return (
    <div className={styles.Score}>
      <h2>Results</h2>
      <h4>Your score: {score}</h4>
    </div>
  );
};

export default Score;
