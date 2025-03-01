import { useState, useEffect } from "react";

const useGameLogic = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    fetch("https://gamebe-production.up.railway.app/api/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.sort(() => Math.random() - 0.5));
        setLoading(false);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer);
    if (answer === questions[currentIndex].name) {
      setShowConfetti(true);
      setIsCorrect(true);
      setScore((prev) => prev + 1);
    } else {
      setIsCorrect(false);
      setWrongAttempts((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowConfetti(false);
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowConfetti(false);
    setScore(0);
    setWrongAttempts(0);
  };

  const handleChallengeFriend = () => {
    const inviteLink = `${window.location.origin}/invite?user=${username}&score=${score}`;
    const whatsappMessage = `I scored ${score} in Globetrotter Challenge! Think you can beat me? Play now: ${inviteLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return {
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
  };
};

export default useGameLogic;
