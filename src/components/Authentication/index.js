import React from 'react';
import './Authentication.css'; // Import CSS file

function Authentication() {
  const handleLoginClick = () => {
    window.location.href = 'http://localhost:3000/login';
  };
  return (
    <div className="button-container">
      <button className="login-button"  onClick={handleLoginClick}>Login</button>
      <button className="signup-button">Signup</button>
    </div>
  );
}

export default Authentication;
