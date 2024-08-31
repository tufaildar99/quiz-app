import { React, useState } from "react";
import Score from "./Score";
import Question from "./Question";
import qbank from "./QuestionBank";
import styles from "./Quiz.module.css";

const qb = qbank;

const Quiz = () => {
  const [quizEnd, setQuizEnd] = useState(false);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  let [score, setScore] = useState(0);

  function onOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  }

  function checkAnswer() {
    if (selectedOption === qb[currentQuestion].answer) {
      setScore((score += 1));
    }
  }

  function handleNextQuestion() {
    if (currentQuestion + 1 < qb.length) {
      setCurrentQuestion((currentQuestion += 1));
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  }

  return (
    <div className={styles.Quiz}>
      <div className={styles.QuizContainer}>
        <h1>Quiz App</h1>
        {quizEnd ? (
          <Score score={score} />
        ) : (
          <Question
            question={qb[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};
export default Quiz;
