import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navbar from '../components/NavBar/navbar';

const EXPERIENCE = [
  {
    role: 'UI/UX & Product Developer',
    company: 'PromptShop',
    period: '2026 — Present',
    description: 'Leading UI/UX for a startup building AI agents for the food and beverage industry, while contributing to product development across the team. Designing and building out page interfaces, helping shape AI agent interactions, and managing a team of graphic and web designers.',
    link: 'https://promptshop.co',
  },
  {
    role: 'Partner & Frontend Developer',
    company: 'Z3NTRA',
    period: '2026 — Present',
    description: 'Partner at an end-to-end software development firm that ships scalable, production-ready solutions for startups and brands. Handling frontend development, UI/UX design, and client-facing product strategy across web, mobile, and AI projects.',
    link: 'https://www.z3ntra.com/',
  },
  {
    role: 'Sales Engineer',
    company: 'Famic Technologies',
    period: '2025',
    description: 'Led the Japan market team, managing distributor relationships and representing the company at trade shows across Japan. Met with prospective and existing clients to deliver product demos, bridging technical engineering knowledge with client-facing sales.',
    link: null,
  },
  {
    role: 'Web Development Contractor',
    company: 'Link Affiliates',
    period: '2025',
    description: 'Contracted frontend developer for a marketing agency, building responsive web experiences for their clients. Developed landing pages and marketing sites using Next.js and Tailwind CSS.',
    link: 'https://www.linkaffiliates.ca/',
  },
  {
    role: 'Lead Frontend Developer',
    company: 'Empor',
    period: '2024 — 2025',
    description: 'Led frontend development for a student-exclusive marketplace platform serving 1,000+ university students. Built with Next.js, TypeScript, and Tailwind CSS. Collaborated on backend integration with Prisma and handled UI/UX prototyping in Figma.',
    link: null,
  },
  {
    role: 'Summer Analyst',
    company: 'Cyest Corporation',
    period: '2023',
    description: 'Researched and published six white papers on industry trends, startup ecosystems, ESG, and leadership for a Tokyo-based consulting firm. Facilitated cross-functional workshops and client strategy sessions for startup clients.',
    link: null,
  },
  {
    role: 'Orientation Leader',
    company: 'Engineering Undergraduate Society, McGill University',
    period: '2021',
    description: 'Led orientation activities for incoming engineering students, guiding groups through frosh week and helping new students transition into university life.',
    link: null,
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Engineering',
    school: 'McGill University',
    period: '2020 — 2025',
    location: 'Montreal, Canada',
  },
];

const ExperiencePage = () => {
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

        <button
          type="button"
          className="sm:hidden flex items-center gap-2 font-poppins text-sm font-medium text-[var(--foreground)] cursor-pointer pt-2"
          onClick={() => window.dispatchEvent(new Event('open-nav-menu'))}
          aria-label="Open menu"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]" />
          Menu
        </button>

        <div className="hidden sm:flex items-start gap-8 md:gap-12 font-poppins text-xs sm:text-sm md:text-base font-medium">
          <span className="text-[var(--text-muted)] pt-0.5">
            &copy; {new Date().getFullYear()}
          </span>
          <nav className="flex flex-col gap-1 text-[var(--foreground)]" aria-label="Page navigation">
            <Link to="/" className="hover:text-[var(--text-muted)] transition-colors duration-300">Home</Link>
            <Link to="/about" className="hover:text-[var(--text-muted)] transition-colors duration-300">About</Link>
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Page title */}
        <div className="pt-16 md:pt-28">
          <h1
            className="font-poppins font-semibold text-[var(--foreground)] leading-[1] tracking-[-0.03em] about-reveal"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', '--reveal-delay': '0.2s' }}
          >
            Experience
          </h1>
        </div>

        {/* Experience list */}
        <div className="mt-16 md:mt-24">
          {EXPERIENCE.map((exp, index) => {
            const Wrapper = exp.link ? 'a' : 'div';
            const wrapperProps = exp.link
              ? { href: exp.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Wrapper
                key={exp.company}
                {...wrapperProps}
                className="group block border-t border-[var(--border)] py-8 md:py-12 about-reveal"
                style={{ '--reveal-delay': `${0.3 + index * 0.08}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
                  {/* Left: Role + Company */}
                  <div className="md:w-[45%]">
                    <h3 className="font-poppins text-xl md:text-2xl font-medium text-[var(--foreground)] group-hover:text-[var(--text-muted)] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="font-poppins text-sm md:text-base text-[var(--text-muted)] mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Middle: Description */}
                  <div className="md:w-[40%]">
                    <p className="font-poppins text-sm md:text-[0.95rem] leading-[1.7] text-[var(--text-secondary)]">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right: Period */}
                  <div className="md:w-[15%] md:text-right">
                    <span className="font-poppins text-xs md:text-sm text-[var(--text-muted)]">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </Wrapper>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-[var(--border)]" />
        </div>

        {/* Education */}
        <div className="mt-20 md:mt-32 pb-20 md:pb-32">
          <h2 className="font-poppins text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-10 md:mb-14 about-reveal" style={{ '--reveal-delay': '0.3s' }}>
            Education
          </h2>
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="border-t border-[var(--border)] py-8 md:py-12 about-reveal"
              style={{ '--reveal-delay': '0.4s' }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
                <div className="md:w-[45%]">
                  <h3 className="font-poppins text-xl md:text-2xl font-medium text-[var(--foreground)]">
                    {edu.degree}
                  </h3>
                  <p className="font-poppins text-sm md:text-base text-[var(--text-muted)] mt-1">
                    {edu.school}
                  </p>
                </div>
                <div className="md:w-[40%]">
                  <p className="font-poppins text-sm text-[var(--text-secondary)]">
                    {edu.location}
                  </p>
                </div>
                <div className="md:w-[15%] md:text-right">
                  <span className="font-poppins text-xs md:text-sm text-[var(--text-muted)]">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ExperiencePage;
