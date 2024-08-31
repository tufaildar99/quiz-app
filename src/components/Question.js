import React from "react";
import Option from "./Option";
import styles from "./Question.module.css";

const Question = ({
  question,
  selectedOption,
  onOptionChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.Question}>
      <h3>Question {question.id}</h3>
      <h5>{question.question}</h5>
      <form onSubmit={handleSubmit}>
        <Option
          options={question.options}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
