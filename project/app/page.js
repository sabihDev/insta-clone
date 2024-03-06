'use client';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/index.jsx';
import Sidebar from './components/Sidebar/index.jsx';
// import InstagramPost from './components/Post/index.jsx';

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
      </div>
    </div>
  );
};

export default Home;
