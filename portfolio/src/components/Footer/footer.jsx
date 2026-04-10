import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="w-full" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-8 md:pb-12">
        {/* Top row: Logo/name left, nav columns right */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          {/* Left: Logo + Name */}
          <div className="flex items-center">
            <img
              src="/logo/logo.svg"
              alt="Masa Kagami"
              className="h-10 md:h-14 w-auto"
              draggable={false}
            />
          </div>

          {/* Right: Three columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16 md:gap-20 font-poppins text-sm">
            {/* Menu */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">Menu</span>
              <Link to="/about" className="text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300">About</Link>
              <Link to="/experience" className="text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300">Experience</Link>
              <button type="button" className="text-left text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300 cursor-pointer" disabled>Contact</button>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">Social</span>
              <a href="https://www.instagram.com/masakagami/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300">Instagram</a>
              <a href="https://www.linkedin.com/in/nagamasa/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300">LinkedIn</a>
              <a href="https://github.com/masakagami" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300">Github</a>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">Contact</span>
              <a href="mailto:nagamasakagami@gmail.com" className="text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors duration-300">nagamasakagami@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Large name at bottom, clipped at the baseline */}
        <div className="mt-16 md:mt-24">
          <p
            className="font-poppins font-medium text-[var(--foreground)] leading-[1] tracking-[-0.03em] select-none whitespace-nowrap"
            style={{ fontSize: 'min(13vw, 10rem)' }}
            aria-hidden="true"
          >
            Masa Kagami
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 pt-4 border-t border-[var(--border)]">
          <p className="font-poppins text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Nagamasa Kagami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
