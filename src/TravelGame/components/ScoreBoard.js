import React from "react";
import PropTypes from "prop-types";

const ScoreBoard = ({ score, wrongAttempts, handleChallengeFriend }) => {
  return (
    <div>
      <h2>Score: {score} | Wrong Attempts: {wrongAttempts}</h2>
      <button onClick={handleChallengeFriend} className="challenge-button">
        Challenge a Friend
      </button>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  wrongAttempts: PropTypes.number.isRequired,
  handleChallengeFriend: PropTypes.func.isRequired,
};

export default ScoreBoard;
