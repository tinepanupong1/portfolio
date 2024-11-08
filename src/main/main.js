// main.js
import React, { useState } from 'react';
import './main.css';
import ToggleSwitch from '../components/button';

function Main() {
  const [isNight, setIsNight] = useState(false);

  const handleToggle = (newState) => {
    setIsNight(newState);
  };

  const videoSrc = isNight ? `${process.env.PUBLIC_URL}/videos/day1.mp4` : `${process.env.PUBLIC_URL}/videos/night1.mp4`;

  return (
    <div className="video-container">
      <video 
        key={isNight ? "night" : "day"}
        autoPlay 
        loop 
        muted 
        className="background-video"
      >
        <source src={videoSrc} type="video/mp4" />
        
      </video>
      <div className="content"></div>
      {/* ใส่เฉพาะ ToggleSwitch โดยไม่มี onClick ที่คอนเทนเนอร์หลัก */}
      <div className="switch-container">
        <ToggleSwitch onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default Main;
