import React, { useContext } from 'react'
import './Navbar.css'
import Olivier from '../../assets/olivier.png'
import Visit from '../../assets/visit.svg'
import { useTranslation } from 'react-i18next';
import Lang from '../../SwitchLang/Lang';
import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'
import { DarkModeContext } from '../../DarkModeContext';

const Navbar = () => {
    const [active, setActive] = React.useState(-1);
    const navbarRef = React.useRef<HTMLDivElement>(null);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    console.log(darkMode);
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

    // const handleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // }

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
                <a href='/' className={`pseudo ${darkMode ? "navbar-text-light" : "navbar-text-dark"}`}>H1to</a>
            </div>
            <div className="nav-links">
                <a className={`link ${darkMode ? "navbar-text-light" : "navbar-text-dark"} ${active === 0 ? "link-active" : ""}`} onClick={() => handleActive(0)} href="#about">{t('navbar.about')}</a>
                <a className={`link ${darkMode ? "navbar-text-light" : "navbar-text-dark"} ${active === 1 ? "link-active" : ""}`} onClick={() => handleActive(1)} href="#projects">{t('navbar.projects')}</a>
            </div>
            <Lang />
            <div className="icth-link">
                <button onClick={() => window.open('https://itch.io/profile/h1to', '_blank')} className={`link-button ${darkMode ? "navbar-text-light" : "navbar-text-dark"}`}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='visit-logo'>
                            <path d="M4.93367 12L3.08987 5.73239C2.60867 4.09667 4.14094 2.58539 5.75514 3.10362C10.2067 4.53274 14.4553 6.53713 18.3948 9.06662C19.5259 9.79292 21 10.4417 21 12C21 13.5583 19.5259 14.2071 18.3948 14.9334C14.4553 17.4629 10.2067 19.4673 5.75514 20.8964C4.14094 21.4146 2.60867 19.9033 3.08987 18.2676L4.93367 12ZM4.93367 12H9.83493" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    Itch</button>
                <button className='mode-button' onClick={() => toggleDarkMode()}>
                    {darkMode ? <img src={Moon} alt="Moon" className='mode-logo' /> : <img src={Sun} alt="Sun" className='mode-logo' />}
                </button>
            </div>
        </div>
    )
}

export default Navbar
