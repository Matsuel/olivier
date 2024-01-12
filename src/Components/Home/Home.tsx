import React from 'react'
import './Home.css'
// @ts-ignore
import Olivier from '../../assets/olivier.png'
import CircleCloud from '../../assets/circleCloud.svg'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <section id='about' className='home-wrapper'>
            <div className="home-speech">
                {/* <img className='circle-cloud' src={CircleCloud} alt="CircleCloud" /> */}
                <h1 className='speech-title'>
                Hi everyone. I am <span className='hito'>Hito</span>,
                </h1>
                <p className='speech-text'> 
                Former R&D engineer for 20 years, experienced in diverse industries and major international projects. 
                Recently pursued retraining in 2021 to transition into game design, combining technical expertise with artistic passion. 
                Excited about the dynamic role, currently showcasing creations with more content coming soon.<br/> 
                <strong className='hito'>Breaking news:</strong> Climb demo update released. <br/>Welcome constructive comments and valuable advice. 
                <br/>- Hito
                    </p>
            </div>
            <div className="logo-home">
                <img src={Olivier} alt="oliv" className='oliv' />
            </div>
        </section>
    )
}

export default Home
