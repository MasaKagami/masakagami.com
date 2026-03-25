import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className='w-full bg-[#010101]'>
      <div className='w-[90%] mx-auto text-white flex py-8 justify-between items-center text-sm font-extralight'>
          <p>&copy; {new Date().getFullYear()} Nagamasa Kagami</p>

          <p><a href="mailto:nagamasakagami@gmail.com" className="underline decoration-dotted">contact me</a></p>
      </div>
    </footer>
  )
}

export default Footer