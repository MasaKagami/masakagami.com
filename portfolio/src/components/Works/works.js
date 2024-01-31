import React from "react";
import './works.css';
import Porfolio1 from '../../assets/portfolio-1.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">I take pride in paying....</span>
        <div className="worksImgs">
            <img src={Porfolio1} alt="" className="worksImg"/>
            <img src={Porfolio1} alt="" className="worksImg"/>
            <img src={Porfolio1} alt="" className="worksImg"/>
            <img src={Porfolio1} alt="" className="worksImg"/>
            <img src={Porfolio1} alt="" className="worksImg"/>
            <img src={Porfolio1} alt="" className="worksImg"/>
            <img src={Porfolio1} alt="" className="worksImg"/>
        </div>

    </section>
    )
}

export default Works