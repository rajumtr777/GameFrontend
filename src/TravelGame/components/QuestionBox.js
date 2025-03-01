import React from "react";
import PropTypes from "prop-types";

const QuestionBox = ({ question, handleAnswer, selectedAnswer, isCorrect }) => {
  return (
    <div className="question-box">
      <p>{question.clues[Math.floor(Math.random() * question.clues.length)]}</p>
      <div className="options">
        {question.choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleAnswer(choice)}
            className={
              selectedAnswer === choice ? (isCorrect ? "correct selected" : "incorrect selected") : ""
            }
            disabled={selectedAnswer !== null}
          >
            {choice}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <p className={`fun-fact ${isCorrect ? "correct-text" : "incorrect-text"}`}>
          {isCorrect ? "🎉 Correct! " : "😢 Incorrect! "}Fun Fact: {question.funFact}
        </p>
      )}
    </div>
  );
};

QuestionBox.propTypes = {
  question: PropTypes.shape({
    clues: PropTypes.arrayOf(PropTypes.string).isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    funFact: PropTypes.string.isRequired,
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  isCorrect: PropTypes.bool,
};

export default QuestionBox;
