import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "Standards", id: "standards" },
  { label: "About", id: "about" },
];

export default function Header({ activeSection, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1420]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <circle cx="20" cy="20" r="19" stroke="#F59E0B" strokeWidth="2" />
              <circle cx="20" cy="20" r="13" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="20" cy="20" r="5" fill="#F59E0B" />
              <circle cx="20" cy="7" r="2.5" fill="#F59E0B" opacity="0.85" />
              <circle cx="20" cy="33" r="2.5" fill="#F59E0B" opacity="0.85" />
              <circle cx="7" cy="20" r="2.5" fill="#F59E0B" opacity="0.85" />
              <circle cx="33" cy="20" r="2.5" fill="#F59E0B" opacity="0.85" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-base font-black tracking-widest text-[#F8FAFC] uppercase leading-none group-hover:text-[#F59E0B] transition-colors duration-300">
              NEXUS
            </div>
            <div className="text-[9px] font-semibold tracking-[0.25em] text-[#F59E0B] uppercase leading-none mt-0.5">
              SEAL &amp; BEARING
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-200 rounded-sm ${
                activeSection === link.id
                  ? "text-[#F59E0B]"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <div className="h-0.5 bg-[#F59E0B] mt-0.5 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="group flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#121824] font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200">
            Request Technical Catalog
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1420]/98 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                className={`text-left px-3 py-3 text-sm font-medium tracking-wider uppercase transition-colors ${
                  activeSection === link.id
                    ? "text-[#F59E0B] border-l-2 border-[#F59E0B] pl-4"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button className="mt-4 flex items-center justify-center gap-2 bg-[#F59E0B] text-[#121824] font-bold text-xs tracking-widest uppercase px-5 py-3">
              Request Technical Catalog
              <ChevronRight size={14} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
