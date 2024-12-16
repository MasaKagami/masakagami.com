import React, { useState, useEffect } from 'react';
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  useEffect(() => {
    // Simulate loading completion after 2 seconds
    const timeout = setTimeout(() => setLoadingComplete(true), 4500);
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (


        <nav className={`sticky top-0 w-screen flex justify-between m-auto h-14 bg-black transform transition-opacity duration-1000 ${
          loadingComplete ? 'opacity-100 z-10' : 'opacity-0'
          }`}>
          <div className='flex mx-2 flex-row gap-2 md:gap-10 w-full h-full justify-center items-center'>
            <Link 
                to="intro"
                smooth={true}
                duration={500}
                offset={-100}
 
                className='cursor-pointer'
              >
                <img src={logo} alt="Logo" className='h-12 w-auto'/>
              </Link>

              <Link 
                to="about"
                smooth={true}
                duration={500}
                offset={-100} // Scroll 100px above the section
 
                className='rounded-full border border-[#010101] hover:border-white transition duration-300 ease-in-out px-3 text-sm cursor-pointer'
              >
                ABOUT
              </Link>

              <Link 
                to="skills"
                smooth={true}
                duration={500}
                offset={-100} // Scroll 100px above the section
 
                className='rounded-full border border-[#010101] hover:border-white transition duration-300 ease-in-out px-3 text-sm cursor-pointer'
              >
                SKILLS
              </Link>
              <Link 
                to="works" 
                smooth={true}
                duration={500} 
                offset={-100} // Scroll 100px above the section

                className='rounded-full border border-[#010101] hover:border-white transition duration-300 ease-in-out px-3 text-sm cursor-pointer'
              >
                WORKS
              </Link>
              <Link 
                to="contact" 
                smooth={true}
                duration={500} 
                offset={-100} // Scroll 100px above the section

                className='rounded-full border border-[#010101] hover:border-white transition duration-300 ease-in-out px-3 text-sm cursor-pointer'
              >
                CONTACT
              </Link>
            </ div>
        </nav>
    )
}

export default Navbar