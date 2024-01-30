import React,{useEffect} from 'react'
import './Home.css'
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../../DarkModeContext';
import Olivier from '../../assets/olivier.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const {darkMode} = React.useContext(DarkModeContext);
    const { t } = useTranslation();      

    return (
        <section id='about' className='home-wrapper'>
            <img src={Olivier} alt="Olivier" className='home-logo-img'/>
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
        </section>
    )
}

export default Home
