import React from "react";
import Confetti from "react-confetti";
import useGameLogic from "./hooks/useGameLogic";
import UsernameScreen from "./components/UsernameScreen";
import QuestionBox from "./components/QuestionBox";
import ScoreBoard from "./components/ScoreBoard";
import "./styles.css";

const TravelGame= () => {
  const {
    questions,
    currentIndex,
    selectedAnswer,
    isCorrect,
    showConfetti,
    score,
    wrongAttempts,
    loading,
    username,
    gameStarted,
    setUsername,
    setGameStarted,
    handleAnswer,
    nextQuestion,
    restartGame,
    handleChallengeFriend,
  } = useGameLogic();

  if (!gameStarted) {
    return <UsernameScreen username={username} setUsername={setUsername} setGameStarted={setGameStarted} />;
  }

  if (loading) return <h1 className="loader">Loading...</h1>;
  if (questions.length === 0) return <h1>No Questions Available</h1>;

  const question = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="mainContainer">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} 
      <h1>Travel Guessing Game</h1>
      <ScoreBoard score={score} wrongAttempts={wrongAttempts} handleChallengeFriend={handleChallengeFriend} />
      {question && <QuestionBox question={question} handleAnswer={handleAnswer} selectedAnswer={selectedAnswer} isCorrect={isCorrect} />}
      {!isLastQuestion && selectedAnswer && (
        <button onClick={nextQuestion} className="next-button">Next Question</button>
      )}
      {isLastQuestion && selectedAnswer && (
        <button onClick={restartGame} className="play-again-button">Play Again</button>
      )}
    </div>
  );
};

export default TravelGame;
