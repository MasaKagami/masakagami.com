import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
        <nav className="navbar">
            <img src={logo} alt="<ogo" clasName='logo'/>
            <div className="desktopMenu">
              <Link className="desktopMenuListItem">Home</Link>
              <Link className="desktopMenuListItem">About</Link>
              <Link className="desktopMenuListItem">Skills</Link>
              <Link className="desktopMenuListItem">Portfolio</Link>
              <Link className="desktopMenuListItem">Contact</Link>


            </div>
            <button className="desktopMenuBtn">
              <img src="" alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar