import React from 'react'
import './Projects.css'
import { DarkModeContext } from '../../DarkModeContext'
import datas from './datas'
import ImageTest from '../../assets/ProjectsImages/Am8U3b.png'
import Apple from '../../assets/apple.svg'
import Linux from '../../assets/linux.svg'
import Windows from '../../assets/windows.svg'

interface Project {
    title : string,
    description : string,
    category : string,
    platform : [string],
}

const Projects = () => {
    const { darkMode } = React.useContext(DarkModeContext);
    const Plteforms : Record<string, any> = {
        "W": Windows,
        "L": Linux,
        "Apple": Apple,
    }
    return (
        <section className="projects" id="projects">
            <h1 className={`projects-title ${darkMode ? "home-title-light" : "home-title-dark"}`}>Projects</h1>
            <h2 className={`projects-subtitle ${darkMode ? "home-title-light" : "home-title-dark"}`}>Things I’ve built so far</h2>

            <div className="projects-container">
                {datas.map((project: any, index: number) => {
                    return (
                        <div className={`project ${darkMode ? "project-dark" : "project-light"}`} key={index}>
                            <img src={ImageTest} alt="project" className="project-img" />
                            <h3 className={`project-title ${darkMode ? "home-title-light" : "home-title-dark"}`}>{project.title}</h3>
                            <p className={`project-description ${darkMode ? "home-title-light" : "home-title-dark"}`}>
                                {project.description}
                            </p>
                            <p className={`project-category ${darkMode ? "home-title-light" : "home-title-dark"}`}>
                                Category: {project.category ? project.category : "No category"}
                            </p>
                            <div className="project-footer">
                                {project.platform.map((platform: string, index: number) => {
                                    return (
                                        <img src={Plteforms[platform]} alt="platform" className="project-platform" key={index} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
