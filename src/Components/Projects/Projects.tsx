import React from 'react'
import './Projects.css'
import ProjectsProvider from './ProjectsProvider'

const Projects = () => {
    return (
        <section id='projects' className='projects-wrapper'>
            <h1 className="projects-title">
                Projects
            </h1>
            <div className="projects-container">
                <ProjectsProvider />
            </div>
        </section>
    )
}

export default Projects
