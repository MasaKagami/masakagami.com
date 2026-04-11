import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    name: 'PromptShop',
    category: 'Startup',
    services: 'Product Development',
    year: '2026',
    image: '/image/thumbnails/promptshop.png',
    link: 'https://promptshop.co',
  },
  {
    name: 'Z3ntra',
    category: 'Landing Page',
    services: 'Design & Development',
    year: '2026',
    image: '/image/thumbnails/z3ntra.png',
    link: 'https://www.z3ntra.com/',
  },
  {
    name: 'Link Affiliates',
    category: 'Landing Page',
    services: 'Design & Development',
    year: '2025',
    image: '/image/thumbnails/LinkAffiliates.png',
    link: 'https://www.linkaffiliates.ca/',
  },
  {
    name: 'Imada HK',
    category: 'Landing Page',
    services: 'Frontend Development',
    year: '2025',
    image: '/image/thumbnails/imada-hk.jpg',
    link: null,
  },
  {
    name: 'Empor',
    category: 'Marketplace',
    services: 'Frontend Development',
    year: '2025',
    image: '/image/thumbnails/empor.png',
    link: null,
  },
  {
    name: 'Budgetr',
    category: 'Dashboard',
    services: 'Full Stack',
    year: '2024',
    image: '/image/thumbnails/budgetr.png',
    link: null,
  },
  {
    name: 'MyHealthPal',
    category: 'Hackathon',
    services: 'Frontend & ML',
    year: '2024',
    image: null,
    link: 'https://devpost.com/software/myhealthpal',
  },
  {
    name: 'masakagami.com',
    category: 'Portfolio',
    services: 'Design & Development',
    year: '2024',
    image: null,
    link: null,
  },
];

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const hoveredProject = hoveredIndex !== null ? PROJECTS[hoveredIndex] : null;

  return (
    <section
      id="work"
      className="w-full"
      style={{ backgroundColor: 'var(--background)' }}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-28 md:pt-20 md:pb-40">
        {/* Section header */}
        <div className="flex items-baseline justify-between gap-2 mb-12 md:mb-20">
          <div className="flex items-baseline gap-3">
            <h2 className="font-poppins text-4xl md:text-5xl font-medium text-[var(--foreground)]">
              Work
            </h2>
            <span className="font-poppins text-lg md:text-xl text-[var(--text-muted)]">
              ({PROJECTS.length})
            </span>
          </div>
        </div>

        {/* Desktop column headers */}
        <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_0.5fr] gap-4 pb-4 border-b border-[var(--border)]">
          <span className="font-poppins text-xs uppercase tracking-wider text-[var(--text-muted)]">Project</span>
          <span className="font-poppins text-xs uppercase tracking-wider text-[var(--text-muted)]">Category</span>
          <span className="font-poppins text-xs uppercase tracking-wider text-[var(--text-muted)]">Scope</span>
          <span className="font-poppins text-xs uppercase tracking-wider text-[var(--text-muted)] text-right">Year</span>
        </div>

        {/* Project rows */}
        <div className="relative">
          {PROJECTS.map((project, index) => {
            const Wrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Wrapper
                key={project.name}
                {...wrapperProps}
                className="group block border-b border-[var(--border)] cursor-pointer transition-opacity duration-300 py-5 md:py-8"
                style={{
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.35 : 1,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_0.5fr] gap-4 items-baseline">
                  <div className="flex items-center gap-3">
                    <h3 className="font-poppins text-4xl lg:text-5xl font-medium text-[var(--foreground)] group-hover:text-[var(--text-muted)] transition-colors duration-300">
                      {project.name}
                    </h3>
                    {project.link && (
                      <ArrowUpRight
                        size={20}
                        className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                      />
                    )}
                  </div>
                  <span className="font-poppins text-sm text-[var(--text-muted)]">{project.category}</span>
                  <span className="font-poppins text-sm text-[var(--text-muted)]">{project.services}</span>
                  <span className="font-poppins text-sm text-[var(--foreground)] text-right font-medium">{project.year}</span>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex flex-col gap-3">
                  {/* Image */}
                  {project.image && (
                    <div className="w-full aspect-[16/10] bg-[var(--overlay)] p-2.5">
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </div>
                  )}
                  {/* Project name */}
                  <div className="flex items-center gap-2">
                    <h3 className="font-poppins text-2xl sm:text-3xl font-medium text-[var(--foreground)] group-hover:text-[var(--text-muted)] transition-colors duration-300">
                      {project.name}
                    </h3>
                    {project.link && (
                      <ArrowUpRight size={16} className="text-[var(--text-muted)] shrink-0" />
                    )}
                  </div>
                  {/* Category + Year */}
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-xs text-[var(--text-muted)]">{project.category}</span>
                    <span className="font-poppins text-xs text-[var(--foreground)] font-medium">{project.year}</span>
                  </div>
                </div>
              </Wrapper>
            );
          })}

          {/* Desktop: Cursor-following thumbnail in black square */}
          {hoveredProject?.image && (
            <div
              className="hidden md:flex pointer-events-none fixed z-50 w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] bg-[var(--overlay)] p-3 items-center justify-center"
              style={{
                left: mousePos.x + 12,
                top: mousePos.y + 12,
              }}
            >
              <img
                src={hoveredProject.image}
                alt=""
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
