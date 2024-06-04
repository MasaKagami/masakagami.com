import React from "react";
import './works.css';
import Porfolio1 from '../../assets/portfolio-1.png'

const Works = () => {
  return (
    <section id="works">
        <div className='works-header'>
            <h2>MY PROJECTS</h2>
            <h1>Websites and Applications.</h1>
        </div>
        <body className="works-content">
            <div className="works-budgetr">
                <h2>Budgetr.</h2>
                <p>Budgetr is an intuitive financial dashboard that allows users to manage their expenses and budgets effectively. It features interactive charts for tracking spending trends, budget comparisons, and categorization of expenses. This tool is designed to provide clear insights into personal financial habits, helping users optimize their financial decisions.</p>
            </div>            
        </body>
    </section>
    )
}

export default Works