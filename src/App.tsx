import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import "./i18n"
import { DarkModeContext } from './DarkModeContext';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false); //true = dark, false = light

  darkMode ? document.body.style.backgroundColor = "#000" : document.body.style.backgroundColor = "#fff";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.backgroundColor = "#000";
    }
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <Navbar />
        <Home />
        {/* <Projects /> */}
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
