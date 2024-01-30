import React from 'react'
import './Projects.css'
import { DarkModeContext } from '../../DarkModeContext'

const Projects = () => {
    const { darkMode } = React.useContext(DarkModeContext);
    return (
        <section className="projects" id="projects">
            <h1 className={`projects-title ${darkMode ? "home-title-light" : "home-title-dark"}`}
            >Projects</h1>

        </section>
    )
}

export default Projects
