import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Standards from "./components/Standards";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "products", "standards", "about"];
    const handleSectionDetect = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleSectionDetect, { passive: true });
    return () => window.removeEventListener("scroll", handleSectionDetect);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#121824] min-h-screen text-[#F8FAFC] font-sans">
      <Header activeSection={activeSection} scrollTo={scrollTo} />
      <main>
        <Hero scrollY={scrollY} />
        <Products />
        <Standards />
        <About />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
