import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import DecryptedText from '../DecryptedText';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Home", "Projects", "Skills", "Experience", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      const scrollY = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
          setActive(menuItems[i].toLowerCase());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg
       border-b border-white/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
          className="text-2xl font-bold
           tracking-widest
            text-cyan-500">

              {/*  */}
              <DecryptedText
          text="MEHEDI HASAN"
          animateOn="view"
          revealDirection="center"
          speed={200}
          className="revealed text-cyan-400"
        />


            {/* Mehedi Hasan */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white text-lg font-medium">
            {menuItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative group transition duration-300 ${
                    isActive ? "text-cyan-300" : "text-white"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-300
                      transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 text-center space-y-3
         backdrop-blur-lg bg-white/10 border-t border-white/20 shadow-inner">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block text-lg transition duration-300 ${
                  isActive ? "text-cyan-300" : "text-white hover:text-cyan-300"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
