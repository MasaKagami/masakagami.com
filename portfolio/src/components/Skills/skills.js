import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDescription'>I am a skilled and passionate....</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='' className="skillBarImg"/>
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>THis is a demo text</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='' className="skillBarImg"/>
            <div className='skillBarText'>
            <h2>Website Design</h2>
              <p>THis is a demo text</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='' className="skillBarImg"/>
            <div className='skillBarText'>
            <h2>App Design</h2>
              <p>THis is a demo text</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills