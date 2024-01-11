import React from 'react'
import './Home.css'
// @ts-ignore
import Olivier from '../../assets/olivier.png'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <section id='about' className='home-wrapper'>
            <div className="home-speech">
                <h1 className='speech-title'>
                    &nbsp;
                <TypeAnimation 
                    className='speech-title'
                    cursor={false}
                    sequence={['Hi everyone. ', 1000, 'I am Hito, ', 1000]}
                    wrapper="span"
                    repeat={Infinity}
                />
                </h1>
                <p className='speech-text'> 
                    A former R&D engineer during about 20 years. I have worked in different industries and been involved in a few major international projects. Despite my interest in this position, I fell the need to integrate an artistic side to my work.<br/>
                    So I started a retraining in 2021 in order to become a game designer. Both technical and artistic aspects mixed in one role, the best position i could imagine ever.<br/>

                    So here we are. I am gonna try to show you some of my creations. Thank you to take a look to my works. Additionnal contents will be available soon.

                    Breaking news : Climb demo update is out.  :) <br/>

                    Feel free to let constructive comments. Any advice is really welcome. <br/>

                    Hito
                    </p>
            </div>
            <div className="logo-home">
                <img src={Olivier} alt="Olivier" />
            </div>
        </section>
    )
}

export default Home
