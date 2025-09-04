import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    // Hide navbar after clicking on any link
    setVisible(false);
  };

  return (
    <nav
       className={`fixed top-0 w-full h-[72px] shadow-md flex items-center justify-center z-50 transition-transform duration-300
  bg-white text-black dark:bg-gray-900 dark:text-white
  ${visible ? "translate-y-0" : "-translate-y-[72px]"}`}
    >
        
      <div className="flex justify-center gap-8">
        <a
          href="#about"
          onClick={handleLinkClick}
          className="px-3 py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Skills
        </a>
        <a
          href="#experience"
          onClick={handleLinkClick}
          className="px-3 py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Work Experience
        </a>
        <a
          href="#projects"
          onClick={handleLinkClick}
          className="px-3 py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Projects
        </a>
        <a
          href="#certification"
          onClick={handleLinkClick}
          className="px-3 py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Achievements
        </a>
        <a
          href="#education"
          onClick={handleLinkClick}
          className="px-3 py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Education
        </a>
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="px-3 py-1 rounded hover:bg-purple-400 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
