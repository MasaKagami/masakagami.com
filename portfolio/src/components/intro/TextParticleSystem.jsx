import { useRef, useEffect } from 'react';

const TextParticleSystem = ({
  textSets = [['MASA KAGAMI', 'FRONTEND DEV']],
  color = '#ffffff',
  ballSize = 3,
  interval = 8000,
}) => {
  const canvasRef = useRef(null);
  const state = useRef({
    particles: [],
    mouse: { x: null, y: null },
    phase: 'entering',
    textIndex: 0,
    idleTimer: 0,
    waitTimer: 0,
    fallStart: 0,
    enterStart: 0,
    w: 0,
    h: 0,
    isMobile: false,
  });
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const s = state.current;

    const getPositions = (index) => {
      const texts = textSets[index % textSets.length];
      const isMobile = s.isMobile;

      // Mobile: split each text line to fit, use larger relative size
      let mainSize, subSize, density;
      if (isMobile) {
        mainSize = Math.min(s.w / 5, 80);
        subSize = mainSize * 0.5;
        density = Math.max(4, Math.floor(mainSize / 14));
      } else {
        mainSize = Math.min(s.w / 12, 140);
        subSize = mainSize * 0.6;
        density = Math.max(3, Math.floor(mainSize / 18));
      }

      const gap = mainSize * 0.35;

      const off = document.createElement('canvas');
      off.width = s.w;
      off.height = s.h;
      const c = off.getContext('2d');
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillStyle = '#fff';

      if (isMobile) {
        // Helper: auto-fit text to width, returns actual font size used
        const fitText = (text, weight, maxFontSize, maxWidth) => {
          let size = maxFontSize;
          c.font = `${weight} ${size}px geologica, sans-serif`;
          while (c.measureText(text).width > maxWidth && size > 10) {
            size -= 1;
            c.font = `${weight} ${size}px geologica, sans-serif`;
          }
          return size;
        };

        const maxWidth = s.w * 0.85;
        const mainWords = texts[0].split(' ');

        // Always try to split main text for mobile
        const lines = [];
        if (mainWords.length > 1) {
          // Split into two lines
          lines.push(mainWords[0]);
          lines.push(mainWords.slice(1).join(' '));
        } else {
          lines.push(texts[0]);
        }

        // Measure and fit each main line
        const mainSizes = lines.map(line => fitText(line, 800, mainSize, maxWidth));
        const actualMainSize = Math.min(...mainSizes);

        // Calculate total block height
        const lineGap = actualMainSize * 0.15;
        const subActualSize = texts[1] ? fitText(texts[1], 400, subSize, maxWidth) : 0;
        const totalHeight = actualMainSize * lines.length + lineGap * (lines.length - 1) +
          (texts[1] ? gap + subActualSize : 0);

        let curY = s.h / 2 - totalHeight / 2 + actualMainSize / 2;

        // Draw main lines
        c.font = `800 ${actualMainSize}px geologica, sans-serif`;
        for (const line of lines) {
          c.fillText(line, s.w / 2, curY);
          curY += actualMainSize + lineGap;
        }

        // Draw sub text
        if (texts[1]) {
          curY += gap - lineGap;
          c.font = `400 ${subActualSize}px geologica, sans-serif`;
          c.fillText(texts[1], s.w / 2, curY);
        }
      } else {
        // Desktop: single line each
        c.font = `800 ${mainSize}px geologica, sans-serif`;
        c.fillText(texts[0], s.w / 2, s.h / 2 - subSize / 2 - gap / 2);

        if (texts[1]) {
          c.font = `400 ${subSize}px geologica, sans-serif`;
          c.fillText(texts[1], s.w / 2, s.h / 2 + mainSize / 2 + gap / 2);
        }
      }

      const data = c.getImageData(0, 0, s.w, s.h).data;
      const pts = [];
      for (let y = 0; y < s.h; y += density) {
        for (let x = 0; x < s.w; x += density) {
          if (data[(y * s.w + x) * 4 + 3] > 128) {
            pts.push({ x, y });
          }
        }
      }
      return pts;
    };

    const spawnEntering = (index) => {
      const targets = getPositions(index);

      targets.sort((a, b) => {
        const rowDiff = b.y - a.y;
        if (Math.abs(rowDiff) > 2) return rowDiff;
        return a.x - b.x + (Math.random() - 0.5) * 10;
      });

      const delayPer = 1;
      s.particles = targets.map((t, i) => ({
        x: t.x,
        y: -Math.random() * s.h * 0.6 - 80,
        tx: t.x,
        ty: t.y,
        vy: 0,
        vx: 0,
        delay: i * delayPer,
        active: false,
        landed: false,
        falling: false,
        fallDelay: 0,
      }));
      s.enterStart = 0;
      s.phase = 'entering';
    };

    const resize = () => {
      s.w = canvas.width = window.innerWidth;
      s.h = canvas.height = window.innerHeight;
      s.isMobile = s.w < 768;
      spawnEntering(s.textIndex);
    };

    // input — desktop only
    const onMouseMove = (e) => {
      if (!s.isMobile) { s.mouse.x = e.clientX; s.mouse.y = e.clientY; }
    };
    const onMouseLeave = () => { s.mouse.x = null; s.mouse.y = null; };

    // loop
    let lastTime = performance.now();
    const r = ballSize;
    const rMobile = Math.max(2, ballSize - 0.5);

    const loop = (now) => {
      const dtMs = now - lastTime;
      const dt = Math.min(dtMs / 16.67, 3);
      lastTime = now;

      ctx.clearRect(0, 0, s.w, s.h);
      const { particles: pts, mouse: m, phase } = s;
      const radius = s.isMobile ? rMobile : r;

      if (phase === 'idle') {
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          p.vx += (p.tx - p.x) * 0.08 * dt;
          p.vy += (p.ty - p.y) * 0.08 * dt;

          // Mouse repel — desktop only
          if (!s.isMobile && m.x !== null) {
            const dx = p.x - m.x, dy = p.y - m.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80 && dist > 0) {
              const f = (80 - dist) / 80 * 8 * dt;
              p.vx += (dx / dist) * f;
              p.vy += (dy / dist) * f;
            }
          }

          p.vx *= Math.pow(0.88, dt);
          p.vy *= Math.pow(0.88, dt);
          p.x += p.vx;
          p.y += p.vy;
        }

        s.idleTimer += dtMs;
        if (s.idleTimer >= interval) {
          s.idleTimer = 0;
          s.phase = 'falling';
          s.fallStart = 0;

          let minY = Infinity, maxY = -Infinity;
          for (let i = 0; i < pts.length; i++) {
            if (pts[i].ty < minY) minY = pts[i].ty;
            if (pts[i].ty > maxY) maxY = pts[i].ty;
          }
          const yRange = maxY - minY || 1;
          const maxFallDelay = 800;

          for (let i = 0; i < pts.length; i++) {
            const norm = 1 - (pts[i].ty - minY) / yRange;
            pts[i].fallDelay = norm * maxFallDelay * 0.8 + Math.random() * maxFallDelay * 0.2;
            pts[i].falling = false;
            pts[i].vx = 0;
            pts[i].vy = 0;
          }
        }
      } else if (phase === 'falling') {
        s.fallStart += dtMs;
        const gravity = 0.6 * dt;
        let allGone = true;

        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];

          if (!p.falling) {
            if (s.fallStart >= p.fallDelay) {
              p.falling = true;
              p.vx = (Math.random() - 0.5) * 1.5;
              p.vy = Math.random() * 1.5;
            } else {
              p.vx += (p.tx - p.x) * 0.08 * dt;
              p.vy += (p.ty - p.y) * 0.08 * dt;
              p.vx *= Math.pow(0.88, dt);
              p.vy *= Math.pow(0.88, dt);
              p.x += p.vx;
              p.y += p.vy;
              allGone = false;
              continue;
            }
          }

          p.vy += gravity;
          p.vx *= 0.99;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.y < s.h + 50) allGone = false;
        }

        if (allGone) {
          s.particles = [];
          s.waitTimer = 0;
          s.phase = 'waiting';
        }
      } else if (phase === 'waiting') {
        s.waitTimer += dtMs;
        if (s.waitTimer >= 500) {
          s.textIndex = (s.textIndex + 1) % textSets.length;
          spawnEntering(s.textIndex);
        }
      } else if (phase === 'entering') {
        s.enterStart += dtMs;
        const gravity = 0.5 * dt;

        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];

          if (p.landed) continue;

          if (!p.active) {
            if (s.enterStart >= p.delay) {
              p.active = true;
            } else {
              continue;
            }
          }

          p.vy += gravity;
          p.y += p.vy * dt;

          if (p.y >= p.ty) {
            p.x = p.tx;
            p.y = p.ty;
            p.vy = 0;
            p.landed = true;
          }
        }

        if (pts.length > 0 && pts.every(p => p.landed)) {
          for (let i = 0; i < pts.length; i++) {
            pts[i].vx = 0;
            pts[i].vy = 0;
          }
          s.phase = 'idle';
          s.idleTimer = 0;
        }
      }

      // Draw
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (phase === 'entering' && !p.active) continue;
        ctx.moveTo(p.x + radius, p.y);
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      }
      ctx.fill();

      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    resize();
    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, [textSets, color, ballSize, interval]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default TextParticleSystem;
