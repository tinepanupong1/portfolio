// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './style.css';
import './main/main.css';
import Navbar from './Info/Navbar';
import CanvasComponent from './Info/CanvasComponent';
import Page from './Info/Page';
import Main from './main/main';
import startButton from './images/start.png';

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/page');
  };

  return (
    <div className="App">
      <Main />
      <img src={startButton} alt="Start" className="start-button" onClick={handleStartClick} />
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'bright' ? 'dark' : 'bright'));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/page"
          element={
            <>
              {/* Navbar จะปรากฏเฉพาะในเส้นทาง /page */}
              <Navbar theme={theme} toggleTheme={toggleTheme} />
              <div id="main">
                <CanvasComponent theme={theme} />
                <Page id="page" hasCanvas={true} />
                <Page id="page1" />
                <Page id="page2" />
                <Page id="page3" />
                <Page id="page4" />

              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
