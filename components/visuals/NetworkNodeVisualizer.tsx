"use client";

import React, { useEffect, useRef, useState } from "react";

export function NetworkNodeVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user accessibility preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const canvas = canvasRef.current;
    if (!canvas || mediaQuery.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      height = canvas.height = 320;
    };

    window.addEventListener("resize", handleResize);

    // Node particles
    const numNodes = width < 640 ? 18 : 34;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = ["#1D4ED8", "#2563EB", "#E55A00", "#FF8A1F", "#0F172A"];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2.5 + 2,
        color: colors[i % colors.length],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = 1 - dist / 110;
            ctx.strokeStyle = `rgba(29, 78, 216, ${alpha * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-48 bg-gradient-to-r from-blue-50/50 via-white to-orange-50/50 rounded-2xl border border-slate-100 flex items-center justify-center text-xs font-mono text-slate-400">
        Interactive Visualizer (Static Mode)
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-subtle p-2">
      <div className="absolute top-3 left-4 flex items-center gap-2 z-10">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wider">
          Live Growth Engine Network
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-56 block rounded-xl"
        aria-label="Interactive Node Growth Graphic"
      />
    </div>
  );
}
