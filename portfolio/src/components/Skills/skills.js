import React from 'react';
import './skills.css';
import Java from '../../assets/coding-logo/java.png';
import Python from '../../assets/coding-logo/python.png';
import Javascript from '../../assets/coding-logo/javascript.png';
import Matlab from '../../assets/coding-logo/matlab.png';

import Html from '../../assets/coding-logo/html.png';
import Css from '../../assets/coding-logo/css.png';
import Django from '../../assets/coding-logo/django.png';
import Vuejs from '../../assets/coding-logo/vuejs.png';
import Reactt from '../../assets/coding-logo/react.png';
import Springboot from '../../assets/coding-logo/spring.png';

import Postgresql from '../../assets/coding-logo/postgresql.png';
import Numpy from '../../assets/coding-logo/numpy.png';
import Pandas from '../../assets/coding-logo/pandas.png';

const Skills = () => {
  return (
    <div className="w-screen xl:max-w-[70%] max-w-[90%] m-auto flex flex-col gap-6 my-10">
      <div className='space-y-2'>
        <p className='text-lg font-normal'>MY SKILLS</p>
        <h1 className='text-4xl sm:text-5xl font-extrabold'>Tech Stack.</h1>
      </div>
      <body className='flex flex-col gap-4 md:gap-8'>
        <h3>Programming and Scripting</h3>
        <div className='flex gap-4 xl:gap-10 justify-center py-2'>
          <img className='skills-logo-container-purple' src={Java} alt='java'/>
          <img className='skills-logo-container-purple' src={Python} alt='python'/>
          <img className='skills-logo-container-purple' src={Javascript} alt='javascript'/>
          <img className='skills-logo-container-purple' src={Matlab} alt='matlab'/>
        </div>

        <h3>Web Developement and Frameworks</h3>
        <div className='flex gap-4 xl:gap-10 justify-center py-2'>
          <img className='skills-logo-container-pink' src={Html} alt='HTML'/>
          <img className='skills-logo-container-pink' src={Css} alt='CSS'/>
          <img className='skills-logo-container-pink' src={Django} alt='Django'/>
          <img className='skills-logo-container-pink' src={Vuejs} alt='Vue.js'/>
          <img className='skills-logo-container-pink' src={Reactt} alt='React'/>
          <img className='skills-logo-container-pink' src={Springboot} alt='Spring Boot'/>
        </div>

        <h3>Data Management and Analysis</h3>
        <div className='flex gap-4 xl:gap-10 justify-center py-2'>
          <img className='skills-logo-container-blue' src={Postgresql} alt='PostSQL'/>
          <img className='skills-logo-container-blue' src={Numpy} alt='NumPy'/>
          <img className='skills-logo-container-blue' src={Pandas} alt='Pandas'/>
        </div>
      </body>  
    </div>
  )
}

export default Skills