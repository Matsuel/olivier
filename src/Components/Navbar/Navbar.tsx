import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className="pseudo-wrap">
                <a href='/' className='pseudo'>H1to</a>
                <h1 className="pseudo">Oliver Tébar</h1>
            </div>
            <div className="nav-links">
                <a className='link' href="#about">About</a>
                <a className='link' href="#projects">Projects</a>
                <a className='link' target='_blank' href="https://itch.io/profile/h1to">Itch</a>
            </div>
        </div>
    )
}

export default Navbar
