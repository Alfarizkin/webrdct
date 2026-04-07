import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import navbarbg from '../../assets/background/navbarbg.png'

const NAV_LINKS = [
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/" },
  { name: "Contact", path: "/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav 
      className='relative top-0 left-0 w-full z-[1000] flex flex-col items-center justify-between gap-14.5 bg-[#EDEDED]'
    >
      <img src={navbarbg} className="w-full max-h-[350px] object-cover h-auto" alt="Background"></img>

      {/* Nav Menu Desktop */}
      <div className="w-full flex items-start px-16">
        <div className="hidden md:flex gap-[clamp(20px,3.75vw,72px)]">
          {NAV_LINKS.map(link => (
            <motion.div 
              key={link.name}
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.path}
                className="!text-[#060606] no-underline text-[clamp(18px,2.5vw,27px)] relative group" style={{ fontFamily: "Inter" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
                <span className="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#060606] to-transparent transition-all duration-300 group-hover:w-full" />
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
                className="!text-[#060606] text-3xl" style={{ fontFamily: "Inter" }}
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