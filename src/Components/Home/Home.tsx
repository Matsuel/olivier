import React,{useEffect} from 'react'
import './Home.css'
// @ts-ignore
import Olivier from '../../assets/olivier.png'
import CircleCloud from '../../assets/circleCloud.svg'

const Home = () => {
    const opacity: {[key:number]:number} = {1:0.9,2:0.8,3:0.7,4:0.6,5:0.5,6:0.4,7:0.3,8:0.2,9:0.1,10:0.0};

    const handleScrollY = () => {
        const scrollY = window.scrollY;
        if (scrollY<500) {
            const moduloOp:number = Math.floor(scrollY/50);
            document.getElementsByClassName('circle-cloud')[0].setAttribute('style', `opacity: ${opacity[moduloOp]}`);
        }
    }   

    useEffect(() => {
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }
    }, []);
        
        



    return (
        <section id='about' className='home-wrapper'>
            <div className="home-speech">
                <img id='circleCloud' className='circle-cloud' src={CircleCloud} alt="CircleCloud" />
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
