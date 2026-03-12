import logo from '../../../../assets/background/RDCT_Logo.png';
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Products", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/" },
  { name: "Contact", path: "/" },
];

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMenuOpen(false);
    };

    return (
        <nav className='w-full bg-[#FF0000] py-11.25 px-28.75 top-0 left-0 flex items-center justify-between'>
            <motion.div
                className="w-[180px] md:w-[205px] cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 2 }}
                onClick={(e) => handleNavClick(e, "#hero")}
            >
                <img src={logo} alt="Logo" className="w-51.25 h-17.5 object-contain" />
            </motion.div>
            <div className="flex items-center">
                <div className="hidden md:flex gap-19">
                    {NAV_LINKS.map(link => (
                        <motion.div 
                        key={link.name}
                        whileHover={{ y: -2 }}
                        >
                        <Link
                            to={link.path}
                            className="!text-[#060606] no-underline text-[22px] lg:text-[27px] relative group" style={{ fontFamily: "Inter" }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                            <span className="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#060606] to-transparent transition-all duration-300 group-hover:w-full" />
                        </Link>
                        </motion.div>
                    ))}
                </div>
            </div> 
        </nav>
    )
}