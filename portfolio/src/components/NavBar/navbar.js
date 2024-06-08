import React from 'react';
import './navbar.css';
import logo from '../../../src/assets/logo.png'
import contactImg from '../../../src/assets/contact.png'
import { Link } from 'react-scroll'; //npmjs package

const Navbar = () => {
  return (
        <nav className="navbar">
            <div className='navbar-logo-name'>
              <img src={logo} alt="Logo" className='logo'/>
              <span>Masa Kagami</span>
            </div>
            <div className="desktopMenu">
              <Link to="/" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Home</Link>
              <Link to="intro" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">About</Link>
              <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Skills</Link>
              <Link to="works" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn">
              <img src={contactImg} alt="contactImage" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar