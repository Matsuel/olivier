import React,{useEffect} from 'react'
import './Home.css'
// @ts-ignore
import Olivier from '../../assets/olivier.png'
import CircleCloud from '../../assets/circleCloud.svg'
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();      

    return (
        <section id='about' className='home-wrapper'>
            <div className="home-speech">
                <h1 className='speech-title'>
                {t('home.title')} <span className='hito'>Hito</span>,
                </h1>
                <p className='speech-text'> 
                {/* Former R&D engineer for 20 years, experienced in diverse industries and major international projects. 
                Recently pursued retraining in 2021 to transition into game design, combining technical expertise with artistic passion. 
                Excited about the dynamic role, currently showcasing creations with more content coming soon.<br/> 
                <strong className='hito'>Breaking news:</strong> Climb demo update released. <br/>Welcome constructive comments and valuable advice. 
                <br/>- Hito */}
                {t('home.speech')}
                    </p>
            </div>
            <div className="logo-home">
                <img src={Olivier} alt="oliv" className='oliv' />
            </div>
        </section>
    )
}

export default Home
