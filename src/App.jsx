import { useState, useEffect } from 'react';
import Navbar from './components/nevbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Certification from './sections/certifications';
import ToggleSwitch from './components/ToggleSwitch';
import { FaHandPointUp } from "react-icons/fa";

function App() {
  const [isDark, setIsDark] = useState(true); // default dark
  const [isVisible, setIsVisible] = useState(false); // scroll-to-top visibility

  // Theme effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // button visible after 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" min-h-screen scroll-smooth">
      {/* Theme toggle switch */}
       <div className="fixed top-4 right-4 z-[60]">
    <ToggleSwitch isDark={isDark} toggleTheme={toggleTheme} />
  </div>

      {/* Navbar */}
      <Navbar />

      {/* Scroll-to-top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-purple-700 text-white p-4 text-3xl rounded-full shadow-lg hover:bg-black transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaHandPointUp />
        </button>
      )}

      {/* Sections — remove bg/text classes inside each section */}
       <div className="mt-[72px]">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="certification"><Certification /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>

  );
}

export default App;
