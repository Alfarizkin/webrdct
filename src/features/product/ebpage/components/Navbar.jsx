import logo from '../../../../assets/background/RDCT_Logo.png';
import { motion, AnimatePresence } from "motion/react";
const NAV_LINKS = ["products", "gallery", "about", "contact"];

export default function Navbar () {
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
                    {NAV_LINKS.map(id => (
                        <motion.a
                            key={id}
                            href={`#${id}`}
                            className="font-['Inter'] !text-[#060606] no-underline text-[27px] lg:text-[27px] relative group"
                            onClick={e => handleNavClick(e, `#${id}`)}
                            whileHover={{ y: -2 }}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                            {/* Underline Animasi */}
                            <span className="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#060606] to-transparent transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>
            </div> 
        </nav>
    )
}