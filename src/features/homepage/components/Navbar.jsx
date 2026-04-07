import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logo from '../../../assets/background/RDCT_Logo.png';

const NAV_LINKS = [
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/" },
  { name: "Contact", path: "/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek buat ganti style navbar pas di-scroll
  useEffect(() => {
    const handleScroll = () => {
      // Karena lo pake scroll-wrapper, kita deteksi scroll di container tersebut
      const wrapper = document.querySelector(".scroll-wrapper");
      if (wrapper && wrapper.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const wrapper = document.querySelector(".scroll-wrapper");
    wrapper?.addEventListener("scroll", handleScroll);
    return () => wrapper?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav 
      className={`relative top-0 left-0 w-full z-[1000] px-8 transition-all duration-500 flex items-center justify-between
      ${isScrolled ? "py-4 bg-[#1c1c1c]/95 backdrop-blur-md shadow-xl" : "py-12 bg-transparent"}`}
    >
      {/* Logo Container */}
      <motion.div
        className="w-[180px] md:w-[205px] cursor-pointer"
        whileHover={{ scale: 1.05, rotate: 2 }}
        onClick={(e) => handleNavClick(e, "#hero")}
      >
        <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
      </motion.div>

      {/* Nav Menu Desktop */}
      <div className="flex">
        <div className="hidden md:flex gap-16 lg:gap-20">
          {NAV_LINKS.map(link => (
            <motion.div 
              key={link.name}
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.path}
                className="!text-[#ededed] no-underline text-[22px] lg:text-[27px] relative group" style={{ fontFamily: "Inter" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
                <span className="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#ededed] to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span 
            animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white" 
          />
          <motion.span 
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-0.5 bg-white" 
          />
          <motion.span 
            animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white" 
          />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#1c1c1c] flex flex-col justify-center items-center gap-10 z-[1000]"
          >
            {NAV_LINKS.map(link => (
              <Link
                to={link.path}
                className="!text-[#ededed] text-3xl" style={{ fontFamily: "Inter" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}