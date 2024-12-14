import React from 'react';
import logo from '../../../src/assets/logo.png'
import contactImg from '../../../src/assets/contact.png'
import { Link } from 'react-scroll'; //npmjs package

const Navbar = () => {
  return (
        <nav className="w-screen max-w-[95%] flex justify-between m-auto py-2">
            <div className='flex flex-row gap-4 justify-center items-center'>
              <img src={logo} alt="Logo" className='h-14 w-auto'/>
              <span className='text-lg font-semibold'>Masa Kagami</span>
            </div>
            <div className="">
            </div>
            <button className="flex btn justify-between hover:bg-gray-200 bg-white text-black gap-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>              
              <p className='hidden md:block'>Contact Me</p>
            </button>
        </nav>
    )
}

export default Navbar