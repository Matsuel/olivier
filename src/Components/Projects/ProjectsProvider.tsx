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
                    <>
                        <div className="project">
                            <div key={index} className='project-card'>
                                <div className="card-image">
                                    <img src={Climb} alt="project" className='project-image' />
                                </div>
                                <div className="card-infos">
                                    <h2 className="card-title">
                                        {project.title}
                                    </h2>
                                    {
                                        project.category ? (
                                            <h3 className="card-category">
                                                {project.category}
                                            </h3>
                                        ) : (
                                            <></>
                                        )
                                    }
                                    {
                                        project.description ? (
                                            <p className="card-description">
                                                {project.description}
                                            </p>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="plateforms">
                                {project.platform.map((plateform, index) => {
                                    return (
                                        <img key={index} src={IconsManager[plateform]} alt="plateform" className="plateform-icon" />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="divider"></div>
                    </>
                )
            })}
        </div>
    )
}

export default ProjectsProvider
