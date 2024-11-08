import React, { useState, useEffect } from 'react';
import './button.css';

const ToggleSwitch = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState); // สลับสถานะ
  };

  useEffect(() => {
    onToggle(isToggled); // เรียกใช้ onToggle เมื่อตัวแปร isToggled เปลี่ยนแปลง
  }, [isToggled]); // ใช้ useEffect เพื่อตรวจสอบการเปลี่ยนแปลงของ isToggled

  return (
    <div className="switch-container">
      <div className="switch">
        <label htmlFor="toggle">
          <input
            id="toggle"
            className="toggle-switch"
            type="checkbox"
            checked={isToggled}
            onChange={handleToggle} // เมื่อสลับปุ่มจะเรียกฟังก์ชัน handleToggle
          />
          <div className="sun-moon">
            <div className="dots"></div> {/* เพิ่มเมฆในโหมดกลางวัน */}
          </div>
          <div className="background">
            <div className="stars1"></div>
            <div className="stars2"></div>
          </div>
          <div className="fill"></div>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
