'use client';
// pages/index.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/index.jsx';
import Sidebar from './components/Sidebar/index.jsx';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`instagram-app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Sidebar />
      <div className="main-content hidden">
        
        {/* Your main content goes here */}
      </div>
      
      {/* Add other content of the page here */}
    </div>
  );
};

export default Home;
