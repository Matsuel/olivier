import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import "./i18n"
import { DarkModeContext } from './DarkModeContext';

function App() {
  const [darkMode, setDarkMode] = React.useState<boolean>(false); //true = dark, false = light

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <Navbar />
        <Home />
        <Projects />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
