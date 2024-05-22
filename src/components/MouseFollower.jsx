import React, { useState, useEffect } from 'react';
import './MouseFollower.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="circle"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="dot-mouse"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};

export default MouseFollower;
