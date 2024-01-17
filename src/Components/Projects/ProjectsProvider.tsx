import React, { useEffect } from 'react'
import './Projects.css'
import datas from './datas'
// @ts-ignore
import Climb from '../../assets/ProjectsImages/Am8U3b.png'
import Windows from '../../assets/windows.svg'
import Apple from '../../assets/apple.svg'
import Linux from '../../assets/linux.svg'
import Arrow from '../../assets/arrow.svg'
import { platform } from 'os'

interface Project {
    title: string,
    description: string,
    category: string,
    plateform: [string],
}

const ProjectsProvider = () => {
    const IconsManager: { [key: string]: any } = { "W": Windows, "L": Linux, "Apple": Apple }

    return (
        <div className="projects-container">
            {datas.map((project, index) => {
                return (
                    <div key={index} className='project-card'>
                        <div className="project-infos">
                            <h1 className="project-card-title">{project.title}</h1>
                            <p className="project-card-description">{project.description}</p>
                            <button className="project-card-button">
                                <img className="project-card-arrow" src={Arrow} alt="Arrow" />
                            </button>
                        </div>
                        <div className="project-plateforms-image">
                            <img className="project-card-image" src={Climb} alt="Climb" />
                            {project.platform.length > 0?(
                            <div className="projects-plateforms">
                                {project.platform.map((p: string, index: number) => {
                                    console.log(p)
                                    return (
                                        <img key={index} className="project-card-plateform" src={IconsManager[p]} alt={p} />
                                    )
                                })}

                            </div>

                            ):("")}

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsProvider
