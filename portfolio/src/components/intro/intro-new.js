import React, { useState, useEffect } from 'react';
// import masa from '../../assets/masa_resize.png';
// import Spotify from '../../assets/logos/spotify.png';
// import LinkedIn from '../../assets/logos/linkedin.png';
// import GitHubWhite from '../../assets/logos/github-white.png';
// import btnImg from '../../assets/file.png';
import Loader from "../intro/loader/loader";

const Intro = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollTop / windowHeight, 1); // Clamp between 0 and 1
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <section id='intro'>
        {!loadingComplete && <Loader setLoadingComplete={setLoadingComplete} />}
        <div
          className={`${
            loadingComplete ? 'opacity-100'  : 'opacity-0'
          } transition-opacity duration-[2500ms]`}
        >
          <div className="w-screen xl:max-w-[90%] max-w-[90%] m-auto flex flex-col md:flex-row h-[calc(100vh-3.5rem)]">
            <div className='sm:flex flex-col w-full lg:text-[16rem] md:text-[12rem] hidden sm:text-[10rem] h-full justify-center'>
              <p className='text-start font-charm'>MASA</p>
              <p className='text-end font-charm'>KAGAMI</p>
            </div>
            <div className='sm:hidden flex-col w-full flex justify-center items-center h-full text-[5rem]'>
              <p className='text-start font-charm'>M<br/>A<br/>S<br/>A</p>
            </div>
          </div>
        </div>
      </section>



      {/* Animated "MASA" (fixed positioning to persist across sections) */}
      {/* <div className="fixed inset-0 pointer-events-none flex flex-row gap-10">
        <span
          className="font-charm text-[10rem] sm:text-[16rem] absolute top-[50%] left-[50%] transition-transform duration-75"
          style={{
            transform: `translate(calc(-50% - ${scrollProgress * 45}vw), calc(-50% - ${scrollProgress * 40}vh))`,
            fontSize: `calc(16rem - ${scrollProgress * 10}rem)`, // Starts at 16rem, decreases to 8rem
          }}
        >
              <p className='text-start font-charm'>MASA</p>
              <p className='text-end font-charm'>KAGAMI</p>
        </span> */}

{/* 
        <span
          className="font-charm text-[10rem] sm:text-[16rem] absolute top-[50%] right-[50%] transition-transform duration-75"
          style={{
            transform: `translate(calc(50% + ${scrollProgress * 45}vw), calc(-50% - ${scrollProgress * 40}vh))`,
            fontSize: `calc(16rem - ${scrollProgress * 8}rem)`, // Starts at 16rem, decreases to 8rem
          }}
        >
          A
        </span>


        <span
          className="font-charm text-[10rem] sm:text-[16rem] absolute bottom-[50%] left-[50%] transition-transform duration-75"
          style={{
            transform: `translate(calc(-50% - ${scrollProgress * 45}vw), calc(50% + ${scrollProgress * 35}vh))`,
            fontSize: `calc(16rem - ${scrollProgress * 8}rem)`, // Starts at 16rem, decreases to 8rem
          }}
        >
          S
        </span>


        <span
          className="font-charm text-[10rem] sm:text-[16rem] absolute bottom-[50%] right-[50%] transition-transform duration-75"
          style={{
            transform: `translate(calc(50% + ${scrollProgress * 45}vw), calc(50% + ${scrollProgress * 35}vh))`,
            fontSize: `calc(16rem - ${scrollProgress * 8}rem)`, // Starts at 16rem, decreases to 8rem
          }}
        >
          A
        </span> */}
      {/* </div> */}

    </>
  );
}

export default Intro;