import React from 'react';
import './intro.css';
import bg from '../../assets/masa 4.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/file.png';

const Intro = () => {
  return (
    <section id="intro">
        <img src={bg} alt='Profile' className='bg'/>
        <div className="introContent">
            <span className="hello"> Hello,</span>
            <span className="introText">I'm <span className="introName">Masa Kagami</span></span>
            {/* <br/> <- for breakline */}
            <span className='introSubTitle'>BEng Electrical Engineering</span>
            <p className="introParagraph">Fourth year Electrical Engineering minoring in <br/> Software Engineering...</p>
            <Link><button className='fileButton'><img src={btnImg} alt='file' className='btnImg'/>View my Resume</button></Link>
        </div>
    </section>
  )
}

export default Intro