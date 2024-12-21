import React, { useState, useEffect } from 'react';
import blackShirt from "../../assets/T-shirt-black.png"
import whiteShirt from "../../assets/T-shirt-white.png"
import Loader from "./loader/loader";
import Typed from "typed.js";

const Intro = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  const el = React.useRef(null)
  const el2 = React.useRef(null)
  const el3 = React.useRef(null)


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Masa<br>Kagami<br>Frontend<br>Dev<br>©2024...'],
      typeSpeed: 34,
      startDelay: 500,
      backDelay: 3000,
      backSpeed: 25,
      loop: true,
      cursorChar: '',
    });
    const typed2 = new Typed(el2.current, {
      strings: ['Masa<br>Kagami<br>Frontend<br>Dev<br>©2024...'],
      typeSpeed: 34,
      startDelay:1300,
      backDelay: 2200,
      backSpeed: 25,
      loop: true,
      cursorChar: '',
    });
    const typed3 = new Typed(el3.current, {
      strings: ['Masa<br>Kagami<br>Frontend<br>Dev<br>©2024...'],
      typeSpeed: 34,
      startDelay:2100,
      backDelay: 1400,
      backSpeed: 25,
      loop: true,
      cursorChar: '',
    });
    return () => {
      typed.destroy();
      typed2.destroy();
      typed3.destroy();
    };
  }, []);

  return (
    <>
      <section id='home'>
        {!loadingComplete && <Loader setLoadingComplete={setLoadingComplete} />}
        <div
          className={`overflow-x-hidden${
            loadingComplete ? 'opacity-100': 'opacity-0'
          } transition-opacity duration-[2500ms]`}
        >
          <div className="w-screen xl:max-w-[90%] max-w-[90%] mx-auto min-h-screen justify-between flex flex-col py-10">
            {/* <div className='flex text-3xl md:text-2xl lg:text-4xl xl:text-5xl h-full justify-around items-center w-full gap-4'> */}
            <div className='flex text-7xl sm:text-8xl h-full justify-around items-center w-full gap-8'>
              <div className='w-full h-full flex'>
                <div className="w-full h-96 flex bg-[white] mt-36 sm:mt-48 text-black font-geologica font-medium -tracking-wider">
                  <span 
                    ref={el} 
                    className="absolute w-full"
                  ></span>
                </div>
              </div>
              <div className='w-full h-full lg:flex hidden'>
                <div className="w-full h-96 flex bg-[#1b0dc6] mt-48 text-black font-geologica font-medium -tracking-wider">
                  <span 
                    ref={el2} 
                    className="absolute w-full"
                  ></span>
                </div>
              </div>
              <div className='w-full h-full xl:flex hidden'>
                <div className="w-full h-96 flex bg-[#fd4d34] mt-48 text-black font-geologica font-medium -tracking-wider">
                  <span 
                    ref={el3} 
                    className="absolute w-full"
                  ></span>
                </div>
              </div>
              {/* <div 
                className='w-full md:w-1/2 flex h-[46rem] justify-center items-center relative' 
                style={{ 
                  backgroundImage: `url(${whiteShirt})`, 
                  backgroundSize: 'contain', 
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat', 
                }}
              >
                <div className="relative text-black font-geologica font-semibold -tracking-wider">
                  <span 
                    ref={el} 
                    className="absolute w-full 
                    -top-[6rem] -left-[5rem]
                    sm:-top-[6rem] sm:-left-[5rem]
                    md:-top-[6rem] md:-left-[4rem]
                    lg:-top-[6rem] lg:-left-[5rem]
                    xl:-top-[8rem] xl:-left-[7rem]"
                  ></span>
                </div>
              </div>
              <div 
                className='hidden md:w-1/2 md:flex h-[46rem] justify-center items-center relative' 
                style={{ 
                  backgroundImage: `url(${blackShirt})`, 
                  backgroundSize: 'contain', 
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="relative text-white font-geologica font-semibold -tracking-wider">
                  <span 
                    ref={el2} 
                    className="absolute w-full 
                    -top-[6rem] -left-[5rem]
                    sm:-top-[6rem] sm:-left-[5rem]
                    md:-top-[6rem] md:-left-[4rem]
                    lg:-top-[6rem] lg:-left-[5rem]
                    xl:-top-[8rem] xl:-left-[7rem]"
                  ></span>
                </div>
              </div>
              <div 
                className='hidden md:w-1/2 md:flex h-[46rem] justify-center items-center relative' 
                style={{ 
                  backgroundImage: `url(${blackShirt})`, 
                  backgroundSize: 'contain', 
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="relative text-white font-geologica font-semibold -tracking-wider">
                  <span 
                    ref={el3} 
                    className="absolute w-full 
                    -top-[6rem] -left-[5rem]
                    sm:-top-[6rem] sm:-left-[5rem]
                    md:-top-[6rem] md:-left-[4rem]
                    lg:-top-[6rem] lg:-left-[5rem]
                    xl:-top-[8rem] xl:-left-[7rem]"
                  ></span>
                </div>
              </div> */}
            </div>
            <div className='flex w-full justify-between text-base font-normal items-end gap-2'>
              <a href="https://drive.google.com/file/d/1tRL5ueUllPF28gNufx26mWrbscaLqoIU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-gray-700'>
                <p className='font-geologica sm:hidden block'>View<br/>Resume</p>
                <p className='font-geologica hidden sm:block'>View Resume</p>

              </a>
              <p className='font-geologica'>STUDENT ⋅ DEVELOPER ⋅ DJ</p>
              <p className='font-geologica'>Please<br/>Scroll...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
