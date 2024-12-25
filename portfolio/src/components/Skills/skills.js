import React, { useEffect } from 'react';
const Skills = () => {
  useEffect(() => {
    // TextScramble class definition
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 100);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    // Initialize scramble effect on hover
    const elements = document.querySelectorAll('.scramble-text');
    elements.forEach((el) => {
      const fx = new TextScramble(el);
      el.addEventListener('mouseenter', () => {
        fx.setText(el.dataset.text); // Scramble the current text
      });
    });
  }, []);

  return (
    <section id="skills" className="w-screen bg-[#010101]">
      <div className="w-full xl:max-w-[90%] max-w-[90%] mx-auto min-h-screen flex flex-col py-20 md:py-32 overflow-x-hidden">
        <div className="w-full py-4 border-b-2">
          <p className="font-geologica text-3xl font-bold text-[#f1f1f1]">
            TECHNICAL SKILLS
          </p>
        </div>
        <div className="border-b-2 w-full flex justify-between text-[#f1f1f1] text-2xl gap-4">
          <p className="text-2xl font-medium mt-2 font-geologica text-[#f1f1f1]">LANGUAGES</p>
          <div className="flex flex-col text-end w-8/12">
            {['JavaScript', 'TypeScript', 'Python', 'Java', 'ARM Assembly', 'Matlab', 'HTML', 'CSS'].map((skill, index) => (
              <span key={index} className="scramble-text border-b border-b-gray-800 w-full" data-text={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="border-b-2 w-full flex justify-between text-[#f1f1f1] text-2xl gap-4">
          <p className="text-2xl font-medium mt-2 font-geologica text-[#f1f1f1]">FRAMEWORKS</p>
          <div className="flex flex-col text-end w-8/12">
            {['React.JS', 'Next.JS', 'Vue.JS', 'Django', 'Node.JS', 'Spring', 'Pandas', 'Numpy', 'Dash by Plotly', 'Bootstrap', 'TailwindCSS', 'DaisyUI'].map((framework, index) => (
              <span key={index} className="scramble-text border-b border-b-gray-800 w-full" data-text={framework}>
                {framework}
              </span>
            ))}
          </div>
        </div>
        <div className="border-b-2 w-full flex justify-between text-[#f1f1f1] text-2xl gap-4">
          <p className="text-2xl font-medium mt-2 font-geologica text-[#f1f1f1]">DATA MANAGEMENT AND ANALYSIS</p>
          <div className="flex flex-col text-end w-8/12">
            {['PostgreSQL', 'Pandas', 'Numpy'].map((tool, index) => (
              <span key={index} className="scramble-text border-b border-b-gray-800 w-full" data-text={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
