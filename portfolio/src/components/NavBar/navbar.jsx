import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isSideBarClosing, setisSideBarClosing] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  // Show circle button after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setShowMenuButton(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sidebar text animation
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
        setTimeout(() => {
          setIsSocialVisible(true);
        }, 4000);
      }, initialDelay);
    }
  }, [isSideBarVisible]);

  const closeSidebar = () => {
    setisSideBarClosing(true);
    setTimeout(() => {
      setIsSideBarVisible(false);
      setisSideBarClosing(false);
      setIsSocialVisible(false);
    }, 350);
  };

  return (
    <>
      {/* ─── Floating Circle Menu Button ─── */}
      <button
        className={`fixed top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--overlay)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ${
          showMenuButton ? 'menu-button-visible' : 'menu-button-hidden'
        }`}
        onClick={() => setIsSideBarVisible(true)}
        aria-label="Open navigation menu"
      >
        <img
          src="/logo/logo.svg"
          alt=""
          className="h-5 w-5 md:h-6 md:w-6 brightness-0 invert"
          aria-hidden="true"
        />
      </button>

      {/* ─── Full-Screen Overlay Menu ─── */}
      {isSideBarVisible && (
        <div
          className={`fixed inset-0 z-[100] bg-[var(--overlay)] text-[var(--background)] transition-transform duration-350 ${
            isSideBarClosing ? 'slide-up' : 'slide-down'
          }`}
        >
          <div className="flex flex-col w-full h-full justify-between">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-4xl md:text-7xl cursor-pointer hover:scale-90 transition-transform duration-300 text-[var(--background)]"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              &times;
            </button>

            {/* Menu Items */}
            <div className="flex h-full items-center">
              <ul className="space-y-1 md:space-y-2 text-start pl-6 md:pl-10">
                {['HOME', 'ABOUT', 'WORK', 'CONTACT'].map((text, index) => (
                  <li
                    key={index}
                    className="text-4xl sm:text-6xl md:text-9xl font-bold cursor-pointer hover:text-[#8c8c8c] transition-colors duration-300"
                  >
                    <Link
                      to={text.toLowerCase()}
                      smooth={true}
                      duration={700}
                      delay={350}
                      onClick={closeSidebar}
                    >
                      <h2 className="ml11 font-lora">
                        <span className="text-wrapper">
                          <span className="line line1"></span>
                          <span className="letters whitespace-nowrap">
                            {text}
                          </span>
                        </span>
                      </h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div
              className={`flex sm:flex-row text-end flex-col w-full justify-between px-6 md:px-10 pb-6 md:pb-10 text-base sm:text-xl md:text-3xl font-poppins transition-opacity ease-in-out duration-[1000ms] ${
                isSocialVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <a
                href="https://www.linkedin.com/in/nagamasa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:text-[#8c8c8c] cursor-pointer transition-colors duration-300">
                  LINKEDIN
                </p>
              </a>
              <a
                href="https://www.instagram.com/masakagami/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:text-[#8c8c8c] cursor-pointer transition-colors duration-300">
                  INSTAGRAM
                </p>
              </a>
              <a
                href="https://soundcloud.com/jodyekagami"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:text-[#8c8c8c] cursor-pointer transition-colors duration-300">
                  MY PLAYLISTS
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
