import React from 'react'
import './Navbar.css'
import Olivier from '../../assets/olivier.png'

const Navbar = () => {
    const [active, setActive] = React.useState(-1);
    const navbarRef = React.useRef<HTMLDivElement>(null);

    window.onwheel = e => {
        if (e.deltaY > 0) {
            // @ts-ignore
            navbarRef.current.style.top = "-100px";
        } else if (e.deltaY < 0) {
            // @ts-ignore
            navbarRef.current.style.top = "0";
        }
    }

    const handleActive = (index: number) => {
        if (index===active) {
            setActive(-1);
        }else{
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
                <a className={`link ${active===0 ? "link-active":""}`} onClick={()=>handleActive(0)} href="#about">About</a>
                <a className={`link ${active===1 ? "link-active":""}`} onClick={()=>handleActive(1)} href="#projects">Projects</a>
            </div>
            <div className="icth-link">
                <button onClick={() => window.open('https://itch.io/profile/h1to', '_blank')} className='link-button'>Itch</button>
            </div>
        </div>
    )
}

export default Navbar
