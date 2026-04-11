import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const ROLLING_TEXT = 'crafting interfaces that just work \u00A0\u00B7\u00A0';

const ROLES = [
  'Product Developer',
  'UI/UX Developer',
  'Frontend Developer',
];

const Intro = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-[85vh] md:h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <h1 className="sr-only">
        Nagamasa Kagami (Masa Kagami) — Frontend Developer &amp; Product Engineer
      </h1>

      {/* ─── Rolling Background Text ─── */}
      <div className="absolute inset-0 flex items-start pt-[25vh] md:pt-[20vh] overflow-hidden pointer-events-none select-none rolling-text-wrapper">
        <div
          className="rolling-text flex whitespace-nowrap font-lora text-[20vw] sm:text-[17vw] md:text-[14vw] leading-none tracking-[-0.03em] text-[var(--foreground)] opacity-[0.07]"
          style={{ fontWeight: 400 }}
          aria-hidden="true"
        >
          <span>{ROLLING_TEXT}</span>
          <span>{ROLLING_TEXT}</span>
          <span>{ROLLING_TEXT}</span>
          <span>{ROLLING_TEXT}</span>
        </div>
      </div>

      {/* ─── Top Header (z-30, always above everything) ─── */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 pt-3 md:pt-5 flex justify-between items-start">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/logo/logo.svg"
            alt=""
            className="h-7 md:h-9 w-auto hero-logo-reveal"
            draggable={false}
            aria-hidden="true"
          />
          <div className="overflow-hidden py-1">
            <span
              className="font-lora text-2xl md:text-4xl leading-normal tracking-wide text-[var(--foreground)] block hero-name-reveal"
              style={{ fontWeight: 500 }}
            >
              Masa Kagami
            </span>
          </div>
        </div>

        <button
          type="button"
          className="sm:hidden flex items-center gap-2 font-poppins text-sm font-medium text-[var(--foreground)] cursor-pointer hero-nav-reveal pt-2"
          onClick={() => window.dispatchEvent(new Event('open-nav-menu'))}
          aria-label="Open menu"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]" />
          Menu
        </button>

        <div className="hidden sm:flex items-start gap-8 md:gap-12 font-poppins text-xs sm:text-sm md:text-base font-medium hero-nav-reveal">
          <span className="text-[var(--text-muted)] pt-0.5">
            &copy; {new Date().getFullYear()}
          </span>
          <nav className="flex flex-col gap-1 text-[var(--foreground)]" aria-label="Page navigation">
            <RouterLink to="/about" className="hover:text-[var(--text-muted)] transition-colors duration-300">About</RouterLink>
            <RouterLink to="/experience" className="hover:text-[var(--text-muted)] transition-colors duration-300">Experience</RouterLink>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-contact-form'))}
              className="text-left cursor-pointer hover:text-[var(--text-muted)] transition-colors duration-300"
            >
              Contact
            </button>
          </nav>
          <div className="flex flex-col gap-1 text-[var(--foreground)]">
            <a href="https://www.linkedin.com/in/nagamasa/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-muted)] transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/masakagami" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-muted)] transition-colors duration-300">Github</a>
            <a href="https://www.instagram.com/masakagami/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-muted)] transition-colors duration-300">Instagram</a>
          </div>
        </div>
      </div>

      {/*
        Stacking via DOM order (no z-index on these three):
        1. Border      — lowest
        2. Dark text   — above border, BELOW image (image covers it)
        3. Image       — on top, with #f3f3f3 text masked inside
      */}

      {/* Subtle bottom gradient — matches bottom text bar height */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.08))' }}
        aria-hidden="true"
      >
        <div className="py-3 md:py-5">
          <div className="font-poppins text-xs sm:text-sm md:text-base font-medium space-y-0.5 invisible px-6">
            {ROLES.map((r) => <p key={r}>{r}</p>)}
          </div>
        </div>
      </div>

      {/* 1. Border line */}
      <div className="absolute bottom-0 left-0 right-0 hero-bottom-reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="border-t border-[var(--border)]" />
          <div className="py-3 md:py-5">
            <div className="font-poppins text-xs sm:text-sm md:text-base font-medium space-y-0.5 invisible" aria-hidden="true">
              {ROLES.map((r) => <p key={r}>{r}</p>)}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Dark text — image will cover this where they overlap */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="hero-bottom-reveal">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex justify-between items-start py-3 md:py-5">
              <div className="font-poppins text-xs sm:text-sm md:text-base font-medium space-y-0.5 text-[var(--foreground)] hero-bottom-stagger">
                {ROLES.map((r) => <p key={r}>{r}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Image + light text masked to image alpha */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center items-end hero-image-reveal">
        <div className="relative w-[480px] sm:w-[600px] md:w-[680px] lg:w-[760px] xl:w-[860px] 2xl:w-[950px]">
          <img
            src="/image/masa-images/masa-image.webp"
            alt="Masa Kagami"
            draggable={false}
            className="w-full h-auto object-cover grayscale brightness-[0.65]"
          />
          {/* Grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage: 'url(/image/masa-images/masa-image.webp)',
              maskImage: 'url(/image/masa-images/masa-image.webp)',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          >
            <svg className="w-full h-full mix-blend-overlay opacity-40" aria-hidden="true">
              <filter id="hero-grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#hero-grain)" />
            </svg>
          </div>

          {/* #f3f3f3 text — masked to image alpha, only visible on the photo */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              WebkitMaskImage: 'url(/image/masa-images/masa-image.webp)',
              maskImage: 'url(/image/masa-images/masa-image.webp)',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
            aria-hidden="true"
          >
            <div className="absolute bottom-0 left-1/2 -ml-[50vw] w-[100vw]">
              <div className="hero-bottom-reveal">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                  <div className="flex justify-between items-start py-3 md:py-5">
                    <div className="font-poppins text-xs sm:text-sm md:text-base font-medium space-y-0.5 text-[#f3f3f3] hero-bottom-stagger">
                      {ROLES.map((r) => <p key={r}>{r}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
