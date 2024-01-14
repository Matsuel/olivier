import React, { useEffect } from 'react'
import './Projects.css'
import datas from './datas'
// @ts-ignore
import Climb from '../../assets/ProjectsImages/Am8U3b.png'
import axios from 'axios'

interface Project {
    title: string,
    description: string,
    category: string,
    plateform: [string],
}

const ProjectsProvider = () => {
    return (
        <div>
            {datas.map((data, index) => {
                return (
                    <div key={index} className='project-container'>
                        <h1 className='project-title'>{data.title}</h1>
                        <div className="project-image">
                            <img src={Climb} alt="Climb" />
                        </div>
                        <div className="project-content">
                            <div className="project-text">
                                <p>{data.description}</p>
                                <p>{data.category}</p>
                                {data.platform.map((p, index) => {
                                    return (
                                        <p key={index}>{p}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsProvider
