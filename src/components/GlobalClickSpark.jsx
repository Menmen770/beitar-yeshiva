// GlobalClickSpark.jsx
// אפקט ניצוצות גלובלי שרץ רק בלחיצה על אזור שאינו כפתור / לינק / אלמנט אינטראקטיבי
import React, { useRef, useEffect } from "react";

export default function GlobalClickSpark({
  sparkColor = "#C9A961",
  sparkSize = 10,
  sparkRadius = 22,
  sparkCount = 10,
  duration = 500,
  easing = "ease-out",
  ignoreSelectors = 'button, a, [role="button"], input, textarea, select, [data-no-spark]',
  zIndex = 30,
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const rafRef = useRef(null);

  const ease = (t) => {
    switch (easing) {
      case "linear":
        return t;
      case "ease-in":
        return t * t;
      case "ease-in-out":
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default:
        return t * (2 - t); // ease-out
    }
  };

  // Resize canvas to viewport
  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = (ts) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparksRef.current = sparksRef.current.filter((s) => {
        const elapsed = ts - s.start;
        if (elapsed >= duration) return false;
        const p = ease(elapsed / duration);
        const dist = p * sparkRadius;
        const len = sparkSize * (1 - p);
        const x1 = s.x + dist * Math.cos(s.angle);
        const y1 = s.y + dist * Math.sin(s.angle);
        const x2 = s.x + (dist + len) * Math.cos(s.angle);
        const y2 = s.y + (dist + len) * Math.sin(s.angle);
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return true;
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing]);

  // Global click handler
  useEffect(() => {
    const handler = (e) => {
      // אל תייצר ניצוצות אם לוחצים על אלמנט אינטראקטיבי
      if (e.target.closest(ignoreSelectors)) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Adjust position to compensate for RTL offset
      const x = e.clientX + 18;
      const y = e.clientY;
      const now = performance.now();
      const sparks = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        start: now,
      }));
      sparksRef.current.push(...sparks);
    };
    window.addEventListener("click", handler, { passive: true });
    return () => window.removeEventListener("click", handler);
  }, [ignoreSelectors, sparkCount, sparkRadius]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex,
      }}
    />
  );
}
