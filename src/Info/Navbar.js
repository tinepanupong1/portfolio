// Navbar.js
import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div id="nav">
      <h3><b>MY </b>PORTFOLIO*</h3>
      <button onClick={toggleTheme}>
        Changed to {theme === 'bright' ? 'Dark' : 'Bright'} 
      </button>
    </div>
  );
};

export default Navbar;
