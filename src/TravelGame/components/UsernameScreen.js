import React from "react";
import PropTypes from "prop-types";

const UsernameScreen = ({ username, setUsername, setGameStarted }) => {
  const handleStartGame = () => {
    if (!username.trim()) {
      alert("⚠️ Please enter a username!");
      return;
    }
    setGameStarted(true);
  };

  return (
    <div className="username-container">
      <h2>Enter your username</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Your name" 
      />
      <button 
        className="startButton" 
        onClick={handleStartGame} 
      >
        Start Game
      </button>
    </div>
  );
};

UsernameScreen.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setGameStarted: PropTypes.func.isRequired,
};

export default UsernameScreen;
