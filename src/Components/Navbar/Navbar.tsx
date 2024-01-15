import React from 'react'
import './Navbar.css'
import Olivier from '../../assets/olivier.png'
import Visit from '../../assets/visit.svg'
import { useTranslation } from 'react-i18next';
import Lang from '../../SwitchLang/Lang';
import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'

const Navbar = () => {
    const [active, setActive] = React.useState(-1);
    const navbarRef = React.useRef<HTMLDivElement>(null);
    const [darkMode, setDarkMode] = React.useState<boolean>(false); //true = dark, false = light
    const { t } = useTranslation();

    window.onwheel = e => {
        if (e.deltaY > 0) {
            // @ts-ignore
            navbarRef.current.style.top = "-100px";
        } else if (e.deltaY < 0) {
            // @ts-ignore
            navbarRef.current.style.top = "30px";
        }
    }

    const handleDarkMode = () => {
        if (darkMode) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }

    const handleActive = (index: number) => {
        if (index === active) {
            setActive(-1);
        } else {
            setActive(index);
        }
    }

    return (
        <div className='navbar-wrapper' ref={navbarRef}>
            <div className="pseudo-wrap">
                <img className='home-logo' src={Olivier} alt="Olivier" onClick={() => window.location.href = "/"} />
                <a href='/' className='pseudo'>H1to</a>
            </div>
            <div className="nav-links">
                <a className={`link ${active === 0 ? "link-active" : ""}`} onClick={() => handleActive(0)} href="#about">{t('navbar.about')}</a>
                <a className={`link ${active === 1 ? "link-active" : ""}`} onClick={() => handleActive(1)} href="#projects">{t('navbar.projects')}</a>
            </div>
            <Lang />
            <div className="icth-link">
                <button onClick={() => window.open('https://itch.io/profile/h1to', '_blank')} className='link-button'>
                    <img src={Visit} alt="Visit" className='visit-logo' />
                    Itch</button>
                <button className='mode-button' onClick={() => handleDarkMode()}>
                    {/* <img src={Mode} alt="Mode" className='mode-logo' /> */}
                    {darkMode ? <img src={Moon} alt="Moon" className='mode-logo' /> : <img src={Sun} alt="Sun" className='mode-logo' />}
                </button>
            </div>
        </div>
    )
}

export default Navbar
