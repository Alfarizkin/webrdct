import { motion } from "motion/react";
import home_bg from '../../../assets/background/Home_BG.png';
import Navbar from "./Navbar"; 

export default function HeroSection() {
  const handleCTA = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden snap-start">
      <Navbar />

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={home_bg}
          alt="Background"
          /* Slow Zoom via Tailwind Animation */
          className="w-full h-full object-cover animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[rgba(28,28,28,0.3)]" />
      </div>

      {/* Content Layer */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center mt-60 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="font-['Istok_Web'] text-[clamp(2rem,5vw,64px)] text-[#ededed] mb-6 leading-[1.2] [text-shadow:2px_2px_20px_rgba(0,0,0,0.7)] font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Powering Games Behind the Scenes
        </motion.p>

        <motion.p
          className="font-['Istok_Web'] text-[clamp(1.25rem,3vw,32px)] text-[#b3b3b3] mb-12 [text-shadow:1px_1px_10px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Develop Your Game Faster
        </motion.p>

        {/* CTA Button - Full Tailwind Conversion */}
        <motion.button
          onClick={handleCTA}
          className={`
            group relative flex items-center justify-center overflow-hidden
            bg-[#1c1c1c] text-[#ededed] font-['Inter'] font-bold border border-black
            rounded-[40px] shadow-[0_0_23.8px_rgba(178,172,172,0.35)]
            py-[1.5rem] px-[5rem] text-[1.5rem] mt-[5rem]
            transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
            animate-[pulse_2s_ease-in-out_infinite]
          `}
          whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(178,172,172,0.6)" }}
          whileTap={{ scale: 1.02 }}
        >
          <span className="relative z-[2]">Get Products</span>
          
          {/* Shine Sweep - Full Tailwind */}
          <div className="absolute top-[-50%] left-[-100%] w-full h-[200%] 
            bg-gradient-to-r from-transparent via-white/20 to-transparent 
            -skew-x-[20deg] transition-[left] duration-700
            group-hover:left-[200%]" 
          />
        </motion.button>
      </motion.div>
    </section>
  );
}