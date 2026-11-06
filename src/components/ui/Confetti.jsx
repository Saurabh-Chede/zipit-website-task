import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const COLORS = ['#f5a623', '#2ec4b6', '#2b4acb', '#1f9d55', '#f7c948', '#6d4cdb', '#ef476f'];

/**
 * One-shot confetti burst on a full-screen canvas (no dependencies).
 * Mount it to fire; it clears itself after `duration` ms and never blocks clicks.
 * `origin` is where the burst starts, as a fraction of the viewport.
 */
export default function Confetti({ count = 150, duration = 3200, origin = { x: 0.5, y: 0.45 } }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      return {
        x: w * origin.x,
        y: h * origin.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 4 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        dot: Math.random() < 0.35,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.35,
      };
    });

    const FADE = 900;
    const start = performance.now();
    let last = start;
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const dt = Math.min((now - last) / 16.67, 2);
      last = now;

      ctx.clearRect(0, 0, w, h);
      if (elapsed >= duration) return;

      const alpha = elapsed > duration - FADE ? Math.max(0, (duration - elapsed) / FADE) : 1;
      const drag = Math.pow(0.98, dt);

      for (const p of particles) {
        p.vx *= drag;
        p.vy = p.vy * drag + 0.28 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vr * dt;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.dot) {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(<canvas ref={canvasRef} className="confetti" aria-hidden="true" />, document.body);
}
