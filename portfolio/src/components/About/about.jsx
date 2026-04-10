import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const STATEMENT = 'I build products that people actually want to use. From concept to code, I focus on creating interfaces that are intuitive, polished, and built to last.';

const About = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = STATEMENT.split(' ');

  return (
    <section id="about" className="w-full" style={{ backgroundColor: 'var(--background)' }}>
      <h2 className="sr-only">About Nagamasa Kagami</h2>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-14 md:pt-40 md:pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-start">
          {/* Left: Large serif statement with word-by-word reveal */}
          <div className="w-full md:w-[55%]" ref={textRef}>
            <p className="font-lora text-[1.65rem] sm:text-3xl md:text-[2.5rem] lg:text-[2.85rem] leading-[1.2] tracking-[-0.015em] text-[var(--foreground)]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden mr-[0.3em] last:mr-0"
                >
                  <span
                    className="inline-block transition-all duration-500 ease-out"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${i * 30}ms`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </p>
          </div>

          {/* Right: Supporting text + About link */}
          <div className="w-full md:w-[45%] md:pt-1">
            <p className="font-poppins text-sm md:text-[0.95rem] leading-[1.7] text-[var(--text-secondary)]">
              McGill Engineering alumni with a focus on frontend development and product thinking. I care about how things work just as much as how they look.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2.5 mt-8 font-poppins text-sm text-[var(--foreground)] border border-[var(--foreground)] rounded-full px-6 py-2.5 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
            >
              About me
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
