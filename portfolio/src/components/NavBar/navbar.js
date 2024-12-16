import React from 'react';
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  return (
        <nav className="sticky top-0 w-screen max-w-[95%] flex justify-between m-auto py-1 bg-black">
            <div className='flex flex-row gap-5 md:gap-10 w-full h-full justify-center items-center'>
            <Link 
                to="intro"
                smooth={true}
                duration={500}
 
                className='cursor-pointer'
              >
                <img src={logo} alt="Logo" className='h-12 w-auto'/>
              </Link>

              <Link 
                to="skills"
                smooth={true}
                duration={500}
                offset={-100} // Scroll 100px above the section
 
                className='border-white rounded-full border px-3 text-sm cursor-pointer'
              >
                ABOUT
              </Link>
              <Link 
                to="works" 
                smooth={true}
                duration={500} 
                offset={-100} // Scroll 100px above the section

                className='border-white rounded-full border px-3 text-sm cursor-pointer'
              >
                WORKS
              </Link>
              <Link 
                to="contact" 
                smooth={true}
                duration={500} 
                offset={-100} // Scroll 100px above the section

                className='border-white rounded-full border px-3 text-sm cursor-pointer'
              >
                CONTACT
              </Link>
            </ div>
        </nav>
    )
}

export default Navbar