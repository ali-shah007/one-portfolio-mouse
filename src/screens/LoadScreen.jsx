import React from 'react';

function LoadScreen() {
  return (
    <div className="loading-screen">
      <div className="logo font-Signature ">Ali</div>
      <div className="spinner"></div>
      <p>Loading...</p>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default LoadScreen;
