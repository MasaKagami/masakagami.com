import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const MENU_ITEMS = [
  { label: 'Home', type: 'scroll', to: 'home' },
  { label: 'About', type: 'route', to: '/about' },
  { label: 'Experience', type: 'route', to: '/experience' },
  { label: 'Resume', type: 'external', to: 'https://drive.google.com/file/d/1y3IBrguRgR5Gvd8TdXDwxqd7mwwclQnm/view' },
  { label: 'Contact', type: 'action', to: 'contact' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagamasa/' },
  { label: 'Github', href: 'https://github.com/masakagami' },
  { label: 'Instagram', href: 'https://www.instagram.com/masakagami/' },
];

const Navbar = ({ scrollThreshold }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = scrollThreshold ?? window.innerHeight * 0.85;
      setShowMenuButton(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // External trigger from page headers
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-nav-menu', handler);
    return () => window.removeEventListener('open-nav-menu', handler);
  }, []);

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 450);
  };

  return (
    <>
      {/* ─── Floating Menu Button ─── */}
      <button
        className={`menu-button fixed top-6 right-6 md:top-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--overlay)] flex items-center justify-center cursor-pointer group ${
          showMenuButton ? 'is-visible' : ''
        }`}
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <img
          src="/logo/logo.svg"
          alt=""
          className="h-6 w-6 md:h-7 md:w-7 brightness-0 invert"
          draggable={false}
          aria-hidden="true"
        />
      </button>

      {/* ─── Full-Screen Overlay ─── */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[100] bg-[var(--overlay)] overlay-menu ${
            isClosing ? 'is-closing' : 'is-opening'
          }`}
        >
          <div className="relative flex flex-col w-full h-full">

            {/* Top bar: Close button aligned to menu button position */}
            <div className="flex justify-end items-center px-6 md:px-8 pt-6 md:pt-8">
              <button
                className="overlay-item w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#333] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors duration-300"
                style={{ '--item-delay': '0.1s' }}
                onClick={close}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--background)]">
                  <path d="M1 1l16 16M17 1L1 17" />
                </svg>
              </button>
            </div>


            {/* Main content: Nav left, Info right */}
            <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-0 px-6 md:px-8">

              {/* Navigation links */}
              <nav className="md:w-3/5" aria-label="Main navigation">
                <ul className="flex flex-col gap-2 md:gap-3">
                  {MENU_ITEMS.map((item, i) => (
                    <li key={item.label} className="overlay-item" style={{ '--item-delay': `${0.25 + i * 0.06}s` }}>
                      {item.type === 'scroll' ? (
                        <ScrollLink
                          to={item.to}
                          smooth={true}
                          duration={700}
                          delay={400}
                          onClick={close}
                          className="group flex items-center gap-4 cursor-pointer"
                        >
                          <span className="font-poppins text-xs text-[#555] w-8 font-medium">0{i + 1}</span>
                          <span className="font-poppins text-5xl sm:text-6xl md:text-8xl font-medium text-[var(--background)] group-hover:text-[#666] transition-colors duration-300">
                            {item.label}
                          </span>
                        </ScrollLink>
                      ) : item.type === 'external' ? (
                        <a
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={close}
                          className="group flex items-center gap-4"
                        >
                          <span className="font-poppins text-xs text-[#555] w-8 font-medium">0{i + 1}</span>
                          <span className="font-poppins text-5xl sm:text-6xl md:text-8xl font-medium text-[var(--background)] group-hover:text-[#666] transition-colors duration-300">
                            {item.label}
                          </span>
                        </a>
                      ) : item.type === 'action' ? (
                        <button
                          type="button"
                          onClick={() => {
                            close();
                            setTimeout(() => window.dispatchEvent(new Event('open-contact-form')), 500);
                          }}
                          className="group flex items-center gap-4 cursor-pointer text-left"
                        >
                          <span className="font-poppins text-xs text-[#555] w-8 font-medium">0{i + 1}</span>
                          <span className="font-poppins text-5xl sm:text-6xl md:text-8xl font-medium text-[var(--background)] group-hover:text-[#666] transition-colors duration-300">
                            {item.label}
                          </span>
                        </button>
                      ) : (
                        <RouterLink
                          to={item.to}
                          onClick={close}
                          className="group flex items-center gap-4"
                        >
                          <span className="font-poppins text-xs text-[#555] w-8 font-medium">0{i + 1}</span>
                          <span className="font-poppins text-5xl sm:text-6xl md:text-8xl font-medium text-[var(--background)] group-hover:text-[#666] transition-colors duration-300">
                            {item.label}
                          </span>
                        </RouterLink>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right column: Socials + Email */}
              <div className="md:w-2/5 flex flex-col gap-10 md:gap-14 md:items-end">
                <div className="overlay-item" style={{ '--item-delay': '0.5s' }}>
                  <p className="font-poppins text-xs uppercase tracking-wider text-[#555] mb-4">Social</p>
                  <div className="flex flex-col gap-2.5">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins text-base md:text-lg text-[var(--background)] hover:text-[#666] transition-colors duration-300"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex justify-between items-center pb-6 md:pb-8 pt-6 mx-6 md:mx-8 border-t border-[#333] overlay-item" style={{ '--item-delay': '0.65s' }}>
              <span className="font-poppins text-xs text-[#555]">&copy; {new Date().getFullYear()} Nagamasa Kagami</span>
              <span className="font-poppins text-xs text-[#555]">All rights reserved</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
