import React, { useState, useEffect } from 'react';
import logo from '../../../src/assets/kagami-logo.png'
import { Link } from 'react-scroll';
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isSideBarClosing, setisSideBarClosing] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);

  // side-bar text animation
  useEffect(() => {
    if (isSideBarVisible) {
      const initialDelay = 400;
      const textWrappers = document.querySelectorAll('.ml11');

      textWrappers.forEach((wrapper) => {
        wrapper.style.opacity = '0';
      });

      setTimeout(() => {
        textWrappers.forEach((wrapper, index) => {
          const letters = wrapper.querySelector('.letters');
          if (letters) {
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
                delay: (el, i) => 15 * (i + 1),
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
    }, 350);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className='flex justify-between gap-4 w-[90%] mt-10 mx-auto font-geologica items-center'>
          
          {/* Menu Button */}
          <button
            className='z-[500] flex items-center gap-3 md:gap-4 rounded-full text-base md:text-2xl font-bold px-5 md:px-8 py-3 md:py-4 bg-[#f1f1f1] text-black border border-black cursor-pointer hover:scale-105 transition-transform duration-200'
            onClick={() => setIsSideBarVisible(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col justify-center items-start w-6 md:w-9 h-4 md:h-5 relative">
              {/* Top line */}
              <span
                className='absolute left-0 w-full h-[2px] md:h-[2.5px] bg-black transition-all duration-300 ease-in-out'
                style={{
                  top: isHovered ? '50%' : '0',
                  transform: isHovered ? 'translateY(-50%) rotate(-35deg) scaleX(0.6)' : 'none',
                  transformOrigin: 'right center',
                }}
              />
              {/* Middle line */}
              <span
                className='absolute left-0 top-1/2 -translate-y-1/2 h-[2px] md:h-[2.5px] bg-black transition-all duration-300 ease-in-out'
                style={{ width: isHovered ? '60%' : '100%' }}
              />
              {/* Bottom line */}
              <span
                className='absolute left-0 w-full h-[2px] md:h-[2.5px] bg-black transition-all duration-300 ease-in-out'
                style={{
                  bottom: isHovered ? undefined : '0',
                  top: isHovered ? '50%' : undefined,
                  transform: isHovered ? 'translateY(-50%) rotate(35deg) scaleX(0.6)' : 'none',
                  transformOrigin: 'right center',
                }}
              />
            </div>
            <span className="font-geologica leading-none">MENU</span>
          </button>

          {/* Clan Logo */}
          <Link 
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            className='cursor-pointer hover:scale-110 hover:transform duration-200'
          >
            <img src={logo} alt="Logo" className='h-12 sm:h-14 md:h-16 w-auto rounded-full border-2 border-black p-1.5 bg-[#f1f1f1]'/>
          </Link>
        </div>
      </nav>

      {isSideBarVisible && (
      <div
        className={`fixed inset-0 z-[100] bg-[#010101] text-white transition-transform duration-350 ${
          // isSideBarClosing ? True : False
          isSideBarClosing ? 'slide-up ' : 'slide-down'
        }`}  
      > 
        <div className='flex flex-col w-full h-full justify-between'>
          <button
                className="absolute top-6 right-6 md:top-10 md:right-10 text-4xl md:text-7xl cursor-pointer hover:scale-90 transition-transform duration-300"
                onClick={closeSidebar}
            >
              ✕
            </button>
            <div className='flex h-full items-center'>
              <ul className="space-y-1 md:space-y-2 text-start pl-6 md:pl-10 font-geologica">
                {['HOME', 'ABOUT', 'WORK', 'CONTACT'].map((text, index) => (
                  <li key={index} className="text-4xl sm:text-6xl md:text-9xl font-bold cursor-pointer hover:text-gray-300 transition">
                    <Link to={text.toLowerCase()} smooth={true} duration={700} delay={350} onClick={closeSidebar}>
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
              className={`flex sm:flex-row text-end flex-col w-full justify-between px-6 md:px-10 pb-6 md:pb-10 text-base sm:text-xl md:text-3xl transition-opacity ease-in-out duration-[1000ms] ${
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
                <p className='font-geologica hover:text-gray-300 cursor-pointer'>MY PLAYLISTS</p>
              </a>
            </div>
          </div>
        
        </div>
      )}
    </>
  )
}

export default Navbar