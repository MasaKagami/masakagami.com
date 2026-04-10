import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navbar from '../components/NavBar/navbar';

const RevealImage = ({ src, alt, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          clipPath: isVisible ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
          transitionDelay: `${delay}ms`,
        }}
      >
        <div
          className="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isVisible ? 'scale(1)' : 'scale(1.15)',
            transitionDelay: `${delay}ms`,
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <Navbar scrollThreshold={80} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-3 md:pt-5 flex justify-between items-start about-header">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img
            src="/logo/logo.svg"
            alt=""
            className="h-7 md:h-9 w-auto"
            draggable={false}
            aria-hidden="true"
          />
          <span
            className="font-lora text-2xl md:text-4xl leading-normal tracking-wide text-[var(--foreground)]"
            style={{ fontWeight: 500 }}
          >
            Masa Kagami
          </span>
        </Link>

        <div className="hidden sm:flex items-start gap-8 md:gap-12 font-poppins text-xs sm:text-sm md:text-base font-medium">
          <span className="text-[var(--text-muted)] pt-0.5">
            &copy; {new Date().getFullYear()}
          </span>
          <nav className="flex flex-col gap-1 text-[var(--foreground)]" aria-label="Page navigation">
            <Link to="/" className="hover:text-[var(--text-muted)] transition-colors duration-300">Home</Link>
            <Link to="/experience" className="hover:text-[var(--text-muted)] transition-colors duration-300">Experience</Link>
            <button type="button" className="text-left cursor-pointer hover:text-[var(--text-muted)] transition-colors duration-300" disabled>Contact</button>
          </nav>
          <div className="flex flex-col gap-1 text-[var(--foreground)]">
            <a href="https://www.linkedin.com/in/nagamasa/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-muted)] transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/masakagami" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-muted)] transition-colors duration-300">Github</a>
            <a href="https://www.instagram.com/masakagami/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-muted)] transition-colors duration-300">Instagram</a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Name + Paragraphs */}
        <div className="pt-16 md:pt-28">
          {/* Large name */}
          <h1
            className="font-poppins font-semibold text-[var(--foreground)] leading-[1] tracking-[-0.03em] about-reveal"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', '--reveal-delay': '0.2s' }}
          >
            Masa<br />Kagami
          </h1>

          {/* Two-column text */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 mt-12 md:mt-20">
            {/* Left: Primary paragraph */}
            <div className="w-full md:w-[55%] about-reveal" style={{ '--reveal-delay': '0.5s' }}>
              <p className="font-poppins text-lg sm:text-xl md:text-2xl leading-[1.5] text-[var(--foreground)]">
                I'm a product developer and frontend engineer with a background in engineering from McGill University. Born and raised in Bangkok as a Japanese national, I bring a cross-cultural perspective to everything I build. My work sits at the intersection of product thinking, UI/UX, and clean frontend code, creating digital experiences that are intuitive, purposeful, and built to last.
              </p>
            </div>

            {/* Right: Secondary paragraph */}
            <div className="w-full md:w-[45%] md:pt-1 about-reveal" style={{ '--reveal-delay': '0.65s' }}>
              <p className="font-poppins text-sm md:text-base leading-[1.7] text-[var(--text-secondary)]">
                With experience across startups and independent projects, I've shipped products from concept through to production. The details matter to me, from interaction design and typography to performance and accessibility. Currently based in Montreal.
              </p>
            </div>
          </div>
        </div>

        {/* Three photos — bottom-aligned */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-16 md:mt-28 pb-20 md:pb-32 items-end">
          <div className="w-full sm:flex-1">
            <RevealImage src="/image/masa-images/masa1.webp" alt="Masa Kagami" delay={0} />
          </div>
          <div className="w-full sm:flex-1">
            <RevealImage src="/image/masa-images/masa3.webp" alt="Masa Kagami" delay={150} />
          </div>
          <div className="w-full sm:flex-1">
            <RevealImage src="/image/masa-images/masa2.webp" alt="Masa Kagami" delay={300} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AboutPage;
