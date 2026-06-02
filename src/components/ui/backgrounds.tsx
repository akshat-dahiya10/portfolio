"use client";

import { useEffect, useRef } from "react";

export function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <div
        className="aurora-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.5), transparent 70%)",
          top: "-10%",
          left: "-10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)",
          top: "20%",
          right: "-10%",
          animationDelay: "-5s",
          animationDuration: "25s",
        }}
      />
      <div
        className="aurora-orb"
        style={{
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.35), transparent 70%)",
          bottom: "10%",
          left: "30%",
          animationDelay: "-10s",
          animationDuration: "30s",
        }}
      />
      <div
        className="aurora-orb"
        style={{
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
          top: "60%",
          left: "60%",
          animationDelay: "-15s",
          animationDuration: "22s",
        }}
      />
    </div>
  );
}

export function NoiseOverlay() {
  return <div className="noise" />;
}

export function GridBackground() {
  return <div className="fixed inset-0 grid-bg pointer-events-none" />;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const count = Math.min(80, Math.floor((w * h) / 25000));

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      o: number;
    };

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.5 + 0.1,
    }));

    let anim = 0;
    let mouse = { x: w / 2, y: h / 2 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.005;
          p.y -= dy * 0.005;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 180, 252, ${p.o})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(165, 180, 252, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      anim = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}
