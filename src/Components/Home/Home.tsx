import React, { useEffect } from 'react'
import './Home.css'
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../../DarkModeContext';
import Olivier from '../../assets/olivier.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const { darkMode } = React.useContext(DarkModeContext);
    const { t } = useTranslation();

    return (
        <section id='about' className='home-wrapper'>
            <img src={Olivier} alt="Olivier" className='home-logo-img' />
            <h1 className={`home-title ${darkMode ? "home-title-light" : "home-title-dark"}`}>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        'Hi everyone,',
                        1000,
                        'I\'m H1to',
                        1000,
                        "I'm a game designer",
                        1000
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                />
            </h1>
            <pre className={`home-text`} >
                former R&D engineer during about 20 years. I have worked in different industries and been involved in a few major international projects. 
                Despite my interest in this position, I fell the need to integrate an artistic side to my work.
                So I started a retraining in 2021 in order to become a game designer. Both technical and artistic aspects mixed in one role, the best position i could imagine ever.
                So here we are. 
                I am gonna try to show you some of my creations. Thank you to take a look to my works. Additionnal contents will be available soon.
                Breaking news : Climb demo update is out.  :)
                Feel free to let constructive comments.
                Any advice is really welcome.
                Hito
            </pre>
        </section>
    )
}

export default Home
