import React from 'react';

const Footer = () => {
  return (
    <section id="contact" className='w-screen bg-[#010101]'>    
      <div className='w-full max-w-[90%] text-white flex py-8 justify-between items-center m-auto text-sm font-extralight'>
          {/* <p>Copyright &#169; 2024 Nagamasa Kagami. All right reserved.</p> */}
          <p>Masa Kagami</p>

          <p><a href="mailto:nagamasakagami@gmail.com" className="underline decoration-dotted">contact me</a></p>
      </div>
    </section>
  )
}

export default Footer