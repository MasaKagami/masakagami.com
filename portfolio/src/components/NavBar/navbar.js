import React, { useState, useEffect } from 'react';
import logo from '../../../src/assets/kagami-logo.png'
import { Link } from 'react-scroll';
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {
  
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isSideBarClosing, setisSideBarClosing] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  
  useEffect(() => {
    // Simulate loading completion after 4.5 seconds
    const timeout = setTimeout(() => setLoadingComplete(true), 4500);
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  // menu button text animation
  useEffect(() => {
    if (isHovered) {
      const textWrapper = document.querySelector('.ml6 .letters');
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g, "<span class='letter'>$&</span>"
        );
        
        anime
          .timeline({ loop: false })
          .add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i,
            easing: "easeOutExpo",
          })
      }
    }
  }, [isHovered]);

  // side-bar text animation
  useEffect(() => {
    if (isSideBarVisible) {
      const initialDelay = 1000;
      const textWrappers = document.querySelectorAll('.ml11');

      textWrappers.forEach((wrapper) => {
        wrapper.style.opacity = '0';
      });

      setTimeout(() => {
        textWrappers.forEach((wrapper, index) => {
          const letters = wrapper.querySelector('.letters');
          if (letters) {
            // Wrap letters in spans
            letters.innerHTML = letters.textContent.replace(
              /\S/g,
              "<span class='letter'>$&</span>"
            );

            wrapper.style.opacity = '1';

            anime
              .timeline({ loop: false })
              .add({
                targets: wrapper.querySelector('.line'),
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: 'easeOutExpo',
                duration: 300, 
                delay: index * 1000,
              })
              .add({
                targets: wrapper.querySelector('.line'),
                translateX: [
                  0,
                  wrapper.querySelector('.letters').getBoundingClientRect().width + 10,
                ],
                easing: 'easeOutExpo',
                duration: 300,
                delay: 30,
              })
              .add({
                targets: wrapper.querySelectorAll('.letter'),
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 300,
                offset: '-=300',
                delay: (el, i) => 15 * (i + 1), // Reduced per-letter delay
              })
              .add({
                targets: wrapper.querySelector('.line'),
                opacity: 0,
                duration: 500,
                easing: 'easeOutExpo',
                delay: 0,
              });
          }
        });
        setTimeout(()=> {
          setIsSocialVisible(true);
        }, 4000);
      }, initialDelay)
    }
  }, [isSideBarVisible]);

  const closeSidebar = () =>{
    setisSideBarClosing(true);
    setTimeout(() => {
      setIsSideBarVisible(false);
      setisSideBarClosing(false);
      setIsSocialVisible(false);
    }, 700);
  }

  return (
    <>
      <nav className={`fixed top-0 w-screen flex justify-between m-auto transform transition-opacity duration-1000 ${
        loadingComplete ? 'opacity-100 z-10' : 'opacity-0'
        }`}
      >
        <div className='flex justify-between gap-4 max-w-[90%] mt-10 w-full mx-auto font-geologica items-center'>
          
          {/* Menu Button */}
          <button 
            className='hamburger-label hover:transform hover:scale-110 hover:ease-in duration-200 flex items-center justify-center gap-3 md:gap-6 rounded-full text-5xl md:text-7xl font-bold px-6 md:px-10 py-1 md:py-2 bg-[#f1f1f1] text-black border-2 border-black'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsSideBarVisible(true)}
          >
            <div className="relative flex flex-col gap-2 items-center justify-center h-full">
              <div className='line1-small md:line1 transition-all duration-300 w-12 md:w-14 h-1 md:h-2 bg-black'></div>
              <div className='w-12 md:w-14 h-1 md:h-2 bg-black'></div>
              <div className='"md:line3 line3-small transition-all duration-300 w-12 md:w-14 h-1 md:h-2 bg-black'></div>
            </div>   
            <h1 class="ml6">
              <span class="text-wrapper">
                <span class="letters font-geologica whitespace-nowrap">MENU</span>
              </span>
            </h1>
          </button>

          {/* Clan Logo */}
          <Link 
            to="intro"
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer hover:scale-110 hover:transform duration-200'
          >
            <img src={logo} alt="Logo" className='h-16 md:h-20 w-auto rounded-full border-4 border-black p-2 bg-[#f1f1f1] border-collapse'/>
          </Link>
        </div>
      </nav>

      {isSideBarVisible && (
      <div
        className={`fixed inset-0 z-50 bg-background w-screen h-screen bg-[#010101]  text-white transition-transform duration-700 mb-10 sm:mb-0 ${
          // isSideBarClosing ? True : False
          isSideBarClosing ? 'slide-up ' : 'slide-down'
        }`}  
      > 
        <div className='flex flex-col w-full h-full item-start justify-between'>
          <button
                className="absolute top-10 right-10 text-7xl md:text-9xl hover:transform hover:scale-90 duration-500"
                onClick={closeSidebar}
            >
              ✕
            </button>
            <div className='flex h-full items-center'>
              <ul className="space-y-2 text-start pl-10 font-geologica">
                {['HOME', 'ABOUT', 'WORK', 'CONTACT'].map((text, index) => (
                  <li key={index} className="text-6xl md:text-9xl font-bold cursor-pointer hover:text-gray-300 transition">
                    <Link to={text.toLowerCase()} smooth={true} duration={700} delay={700} onClick={closeSidebar}>
                      <h1 className="ml11">
                        <span className="text-wrapper">
                          <span className="line line1"></span>
                          <span className="letters whitespace-nowrap font-geologica">{text}</span>
                        </span>
                      </h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className={`flex sm:flex-row text-end flex-col w-full justify-between px-10 pb-10 text-xl sm:text-3xl m-auto transition-opacity ease-in-out duration-[1000ms] ${
              isSocialVisible ? 'opacity-100' : 'opacity-0'
            }`}
            >
              <a href="https://www.linkedin.com/in/nagamasa/" target="_blank" rel="noopener noreferrer">
                <p className='font-geologica hover:text-gray-300 cursor-pointer'>LINKEDIN</p>
              </a>
              <a href="https://www.instagram.com/masakagami/" target="_blank" rel="noopener noreferrer">
                <p className='font-geologica hover:text-gray-300 cursor-pointer'>INSTAGRAM</p>
              </a>
              <a href="https://soundcloud.com/jodyekagami" target="_blank" rel="noopener noreferrer">
                <p className='font-geologica hover:text-gray-300 cursor-pointer'>SOUNDCLOUD</p>
              </a>
            </div>
          </div>
        
        </div>
      )}
    </>
  )
}

export default Navbar