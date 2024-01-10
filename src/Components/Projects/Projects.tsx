import React from 'react'
import './Projects.css'
import ProjectsProvider from './ProjectsProvider'

const Projects = () => {
    return (
        <div className='projects-wrapper'>
            <h1 className="projects-title">
                Projects
            </h1>
            <div className="projects-container">
                <ProjectsProvider />
            </div>
        </div>
    )
}

export default Projects
