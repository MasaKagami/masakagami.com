import React from 'react';

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Styling & UI',
    items: ['Tailwind CSS', 'Framer Motion', 'GSAP', 'DaisyUI', 'Bootstrap'],
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'Django', 'Spring', 'PostgreSQL', 'Supabase', 'Python'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Figma', 'Vercel', 'Vite', 'REST APIs'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-28 md:pt-20 md:pb-40">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-16 md:mb-24">
          <h2 className="font-poppins text-4xl md:text-5xl font-medium text-[var(--foreground)]">
            Skills
          </h2>
          <p className="font-poppins text-xs md:text-sm text-[var(--text-muted)]">
            Technologies I work with
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14 md:gap-y-16">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="font-poppins text-xs md:text-sm font-medium tracking-wide uppercase text-[var(--text-muted)] mb-5 md:mb-6 pb-3 border-b border-[var(--border)]">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-poppins text-base md:text-lg text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--text-muted)] cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
