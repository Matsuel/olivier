import React,{useEffect} from 'react'
import './Home.css'
// @ts-ignore
import Olivier from '../../assets/olivier.png'
import CircleCloud from '../../assets/circleCloud.svg'
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../../DarkModeContext';

const Home = () => {
    const {darkMode} = React.useContext(DarkModeContext);
    const { t } = useTranslation();      

    return (
        <section id='about' className='home-wrapper'>
            <div className="home-speech">
                <h1 className={`speech-title ${darkMode ? "text-light" : "text-dark"}`}>
                {t('home.title')} <span className='hito'>Hito</span>,
                </h1>
                <p className={`speech-text ${darkMode ? "text-light" : "text-dark"}`}>
                {t('home.speech')}
                    </p>
            </div>
            <div className="logo-home">
                <img src={Olivier} alt="oliv" className={`oliv ${darkMode ? "oliv-dark" : "oliv-light"}`} />
            </div>
        </section>
    )
}

export default Home
