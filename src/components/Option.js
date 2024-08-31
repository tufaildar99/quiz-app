import React from "react";
import styles from "./Option.module.css";

const Option = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className={styles.option}>
      {options.map((option, index) => (
        <div key={index} className={styles.optionField}>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Option;
