import React from 'react'
import './Navbar.css'
import Olivier from '../../assets/olivier.png'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className="pseudo-wrap">
                <img className='home-logo' src={Olivier} alt="Olivier" onClick={()=>window.location.href="/"} />
                <a href='/' className='pseudo'>H1to</a>
            </div>
            <div className="nav-links">
                <a className='link' href="#about">About</a>
                <a className='link' href="#projects">Projects</a>
            </div>
            <div className="icth-link">
                <button onClick={() => window.open('https://itch.io/profile/h1to', '_blank')} className='link-button'>Itch</button>
            </div>
        </div>
    )
}

export default Navbar
