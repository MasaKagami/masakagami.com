import React from 'react';
import './works.css';
import Budgetr from '../../assets/example.png';
import MasaKagamiPreview from '../../assets/masakagami.com-preview.png';

import External from '../../assets/external.png';
import GitHubWhite from '../../assets/logos/github-white.png';
import Reactt from '../../assets/coding-logo/react.png';
import Javascript from '../../assets/coding-logo/javascript.png';
import Css from '../../assets/coding-logo/css.png';
import Html from '../../assets/coding-logo/html.png';
import Python from '../../assets/coding-logo/python.png';
import Postgresql from '../../assets/coding-logo/postgresql.png';


const Works = () => { 
  return (
    <section id="works">
        <div className='works-header'>
            <h2>MY PROJECTS</h2>
            <h1>Websites and Applications.</h1>
        </div>
        
        <div className="works-content-container">
            <div className="works-content">
                <div className="works-content-title">
                    <h2>Budgetr.</h2>
                    <div className='works-content-title-icon'>
                        <a href='https://github.com/MasaKagami/Finance-Dashboard' alt='github' target="_blank" rel="noopener noreferrer">
                            <img src={External} alt='External'/>
                        </a>                                    
                        <a href='https://github.com/MasaKagami/Finance-Dashboard' alt='github' target="_blank" rel="noopener noreferrer">
                            <img src={GitHubWhite} alt='GitHub'/>
                        </a>                        
                    </div>

                </div>
                <p>Budgetr. is an intuitive financial dashboard that allows users to manage their expenses and budgets effectively. It features interactive charts for tracking spending trends, budget comparisons, and categorization of expenses. This tool is designed to provide clear insights into personal financial habits, helping users optimize their financial decisions.</p>
                <div className="works-tech-logo">
                    <img src={Python} alt='python'/>
                    <img src={Postgresql} alt='sql'/>
                    <img src={Html} alt='html'/>
                    <img src={Css} alt='css'/>
                </div>
            </div>
            <img src={Budgetr} alt='Budgetr.' className='works-display'/>
        </div>
        
        <div className="works-content-container">
            <div className="works-content">
                <div className="works-content-title">
                    <h2>My Portfolio Page</h2>
                    <div className='works-content-title-icon'>
                        <a href='https://masakagami.com' alt='github' target="_blank" rel="noopener noreferrer">
                            <img src={External} alt='External'/>
                        </a>                                    
                        <a href='https://github.com/MasaKagami/masakagami.com' alt='github' target="_blank" rel="noopener noreferrer">
                            <img src={GitHubWhite} alt='GitHub'/>
                        </a>                        
                    </div>
                </div>
                <p>This website that you are currently on.</p>
                <div className="works-tech-logo">
                    <img src={Reactt} alt='react'/>
                    <img src={Javascript} alt='javascript'/>
                    <img src={Html} alt='html'/>
                    <img src={Css} alt='css'/>
                </div>
            </div>
            <img src={MasaKagamiPreview} alt='Budgetr.' className='works-display'/>
        </div>
    </section>
    )
}

export default Works
            