import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/masa.png';
import Spotify from '../../assets/logos/spotify.png';
import LinkedIn from '../../assets/logos/linkedin.png';
import GitHubWhite from '../../assets/logos/github-white.png';
import GitHubBlack from '../../assets/logos/github-black.png';
import InstagramWhite from '../../assets/logos/instagram-white.png';

import { Link } from 'react-scroll';
import btnImg from '../../assets/file.png';

const Intro = () => {
  const phrases = [
    "a Passionate Learner.", 

    "Town Hall Level 8.",
    "stuck in Electrical Engineering."];
  const [dynamicText, setDynamicText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && currentLetter < phrases[currentPhrase].length) {
        typingTimeout = setTimeout(() => {
            setDynamicText(prev => prev + phrases[currentPhrase][currentLetter]);
            setCurrentLetter(currentLetter + 1);
        }, 75); // Typing speed
    } else if (!isDeleting && currentLetter === phrases[currentPhrase].length) {
        typingTimeout = setTimeout(() => {
            setIsDeleting(true);  // Start deleting after the pause
        }, 2000); // Pause duration at the end of the phrase
    } else if (isDeleting && currentLetter > 0) {
        typingTimeout = setTimeout(() => {
            setDynamicText(dynamicText.slice(0, currentLetter - 1));
            setCurrentLetter(currentLetter - 1);
        }, 50); // Deleting speed
    } else {
        setIsDeleting(false);
        setCurrentPhrase((currentPhrase + 1) % phrases.length);
        setCurrentLetter(0);
        setDynamicText('');  // Reset the text to start typing the next phrase
    }

    return () => clearTimeout(typingTimeout);
}, [currentLetter, isDeleting, currentPhrase, phrases]);


  return (
    <section id='intro'>
      <div className='intro-content'>
        <div className='intro-content-body'>
          <span className='intro-text-intro'>Hello, I am</span>
          <span className='intro-text-name'>Masa.</span>
          <span className='intro-text-sub'>Electrical Engineering Student @ McGill University</span>
        </div>  
        <div className='intro-content-link'>
          <Link><button className='intro-button'><img src={btnImg} alt='file' className='intro-btnImg'/>View Resume</button></Link>
          <a href='https://linkedin.com/in/nagamasa' target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt='LinkedIn' className='intro-link-icons'/>
          </a>
          <a href='https://github.com/MasaKagami' alt='github' target="_blank" rel="noopener noreferrer">
              <img src={GitHubWhite} alt='GitHub' className='intro-link-icons'/>
          </a>
          <a href='https://open.spotify.com/user/masa.kagami100?si=31c8282daceb4c41' target="_blank" rel="noopener noreferrer">
              <img src={Spotify} alt='Spotify' className='intro-link-icons'/>
          </a>
        </div>
        <div id="intro-typing">
            I am <span>{dynamicText}</span><span className="cursor">|</span>
        </div>

      </div>
      <img src={bg} alt='Profile' className='intro-photo'></img>
    </section>
  );
}

export default Intro;
