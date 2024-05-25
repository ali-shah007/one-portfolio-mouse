import React, { useState, useEffect } from 'react';
import './MouseFollower.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      {!isMobile && (
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
      )}
    </>
  );
};

export default MouseFollower;
