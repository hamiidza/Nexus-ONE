import { useEffect, useRef } from "react";
import { ArrowDown, Shield, Zap, Globe } from "lucide-react";

/* ─── Scroll-Driven Bearing SVG ─── */
function BearingSVG({ scrollY }) {
  const maxScroll = 3000;
  const rotation = (scrollY / maxScroll) * 720; // 2 full rotations over 3000px scroll

  // Ball positions on a circle, animated via rotation offset
  const ballCount = 8;
  const ballRadius = 62; // orbit radius
  const cx = 100;
  const cy = 100;

  const balls = Array.from({ length: ballCount }, (_, i) => {
    const angle = (i / ballCount) * 2 * Math.PI + (rotation * Math.PI) / 180;
    return {
      x: cx + ballRadius * Math.cos(angle),
      y: cy + ballRadius * Math.sin(angle),
    };
  });

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Animated mechanical bearing diagram"
    >
      {/* Outer ring shadow/glow */}
      <defs>
        <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="innerFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
        <filter id="ballGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx={cx} cy={cy} r="96" fill="url(#outerGlow)" />

      {/* Outer ring – static */}
      <circle cx={cx} cy={cy} r="92" fill="none" stroke="#F59E0B" strokeWidth="5" />
      <circle cx={cx} cy={cy} r="85" fill="none" stroke="#2D3F5A" strokeWidth="1.5" />

      {/* Raceway track */}
      <circle
        cx={cx}
        cy={cy}
        r={ballRadius}
        fill="none"
        stroke="#1A2840"
        strokeWidth="14"
      />
      <circle
        cx={cx}
        cy={cy}
        r={ballRadius}
        fill="none"
        stroke="#253350"
        strokeWidth="10"
        strokeDasharray="4 2"
      />

      {/* Inner ring – rotates with scroll */}
      <g
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: `${cx}px ${cy}px`,
          transition: "transform 0.05s linear",
        }}
      >
        <circle cx={cx} cy={cy} r="36" fill="url(#innerFill)" stroke="#F59E0B" strokeWidth="3.5" />
        <circle cx={cx} cy={cy} r="28" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
        {/* Inner ring cross-hatch detail */}
        <line x1={cx - 24} y1={cy} x2={cx + 24} y2={cy} stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
        <line x1={cx} y1={cy - 24} x2={cx} y2={cy + 24} stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
        <line
          x1={cx - 17}
          y1={cy - 17}
          x2={cx + 17}
          y2={cy + 17}
          stroke="#F59E0B"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <line
          x1={cx + 17}
          y1={cy - 17}
          x2={cx - 17}
          y2={cy + 17}
          stroke="#F59E0B"
          strokeWidth="0.8"
          opacity="0.35"
        />
        {/* Center bore */}
        <circle cx={cx} cy={cy} r="10" fill="#0d1420" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="3" fill="#F59E0B" />
      </g>

      {/* Rolling elements (balls) – animated */}
      {balls.map((ball, i) => (
        <g key={i} filter="url(#ballGlow)">
          <circle cx={ball.x} cy={ball.y} r="9" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.8" />
          <circle cx={ball.x - 2.5} cy={ball.y - 2.5} r="2.5" fill="#F59E0B" opacity="0.6" />
        </g>
      ))}

      {/* Outer ring label ticks */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * 2 * Math.PI - Math.PI / 2;
        const r1 = 89, r2 = i % 6 === 0 ? 82 : 85;
        return (
          <line
            key={`tick-${i}`}
            x1={cx + r1 * Math.cos(angle)}
            y1={cy + r1 * Math.sin(angle)}
            x2={cx + r2 * Math.cos(angle)}
            y2={cy + r2 * Math.sin(angle)}
            stroke="#F59E0B"
            strokeWidth={i % 6 === 0 ? 1.5 : 0.8}
            opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

/* ─── Stats Row ─── */
const STATS = [
  { value: "40+", label: "Years of German Engineering" },
  { value: "ISO P5", label: "Bearing Precision Class" },
  { value: "98.7%", label: "Zero-Leakage Guarantee Rate" },
  { value: "62", label: "Countries Supplied" },
];

/* ─── Hero Section ─── */
export default function Hero({ scrollY }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1E293B]/40 via-transparent to-transparent pointer-events-none" />

      {/* Amber accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[#F59E0B]/30 bg-[#F59E0B]/5 text-[#F59E0B] text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            Engineered in Germany · Global Supply
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-[#F8FAFC]">Precision</span>
            <br />
            <span className="text-[#F59E0B]">Sealing &amp;</span>
            <br />
            <span className="text-[#F8FAFC]">Bearing</span>
            <br />
            <span className="text-[#94A3B8] font-light text-3xl sm:text-4xl lg:text-5xl tracking-wide">
              Solutions
            </span>
          </h1>

          <p className="text-[#94A3B8] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
            NEXUS engineers industrial-grade O-Ring and Bearing maintenance packs to{" "}
            <span className="text-[#F8FAFC]">ISO, ASTM, FDA &amp; NSF 61</span> standards.
            Manufactured in Germany. Deployed in critical infrastructure across 62 countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button className="group flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#121824] font-black text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200">
              Explore Product Packs
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#94A3B8]/30 hover:border-[#F59E0B]/50 text-[#94A3B8] hover:text-[#F59E0B] font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200">
              Download Catalog
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Shield, label: "ISO 492 Certified" },
              { icon: Zap, label: "ASTM D2000 Rated" },
              { icon: Globe, label: "FDA / NSF 61 Compliant" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs text-[#94A3B8] font-medium tracking-wider"
              >
                <Icon size={13} className="text-[#F59E0B]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bearing Animation */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center gap-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#F59E0B]/5 blur-3xl scale-110" />
            <BearingSVG scrollY={scrollY} />
          </div>
          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2 text-[#94A3B8]/60">
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll to animate</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative border-t border-white/5 bg-[#1E293B]/30">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#F59E0B] tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
