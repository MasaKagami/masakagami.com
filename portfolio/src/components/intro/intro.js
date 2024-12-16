import React, { useState, useEffect } from 'react';
import masa from '../../assets/masa_resize.png';
import Spotify from '../../assets/logos/spotify.png';
import LinkedIn from '../../assets/logos/linkedin.png';
import GitHubWhite from '../../assets/logos/github-white.png';
import btnImg from '../../assets/file.png';

const Intro = () => {
  const phrases = [
    "a Passionate Learner.", 
    "a Brother.",
    "a Software Enthusiast.",
    "a Food Connoisseur.",
    "Town Hall Level 12."];
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
      <div className="w-screen xl:max-w-[70%] max-w-[90%] m-auto flex flex-col md:flex-row min-h-screen">
        <div className='flex flex-col w-full md:w-1/2 justify-center gap-4'>
          <span className='text-6xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap'>
            Hello, I am
            <br/>
            <span className='text-sky-800'>Masa.</span>
          </span>
          <span className='hidden md:flex text-lg font-light'>
            Electrical Engineering Studenty
            <br/>
            @ McGill University  
          </span>
          <span className='md:hidden text-lg font-light'>
            <span className='whitespace-nowrap'>Electrical Engineering Studenty</span> <span className='whitespace-nowrap'> @ McGill University </span>
          </span>
          <div className='flex md:flex-row flex-col gap-3 items-start justify-start'>
            <div className=' btn btn-ghost flex w-auto items-center gap-2 px-4 py-2 rounded-lg justify-center border-2 border-white'>
              <img src={btnImg} alt='file' className='w-4 h-auto'/>
              <p className='whitespace-nowrap md:text-sm'>View Resume</p>
            </div>
            <div className='flex gap-1'>
              <a href='https://linkedin.com/in/nagamasa' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-square hover:outline-none'>
                <img src={LinkedIn} alt='LinkedIn' className='w-10 h-auto'/>
              </a>
              <a href='https://github.com/MasaKagami' alt='github' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-circle hover:outline-none'>
                <img src={GitHubWhite} alt='GitHub' className='w-10 h-auto'/>
              </a>
              <a href='https://soundcloud.com/jodyekagami' alt="soundcloud" target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-square hover:outline-none'>
                <svg role="img" fill='white' className='w-10 h-auto' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SoundCloud</title><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/></svg>
              </a>
              <a href='https://open.spotify.com/user/masa.kagami100?si=31c8282daceb4c41' alt="spotify" target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-circle hover:outline-none'>
                <img src={Spotify} alt='Spotify' className='w-10 h-auto'/>
              </a>
            </div>
          </div>
          <div id="intro-typing">
            I am <span>{dynamicText}</span><span className="cursor">|</span>
          </div>
        </div>
        <div className='md:w-1/2  md:block m-auto h-full items-center'>
          <img src={masa} alt='Profile' className='' />
        </div>
      </div>
    </section>
      
  );
}

export default Intro;
