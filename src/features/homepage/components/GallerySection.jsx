import { motion } from "motion/react";
import { Link } from "react-router-dom";
import eb_bg from '../../../assets/background/EB_BG.png';
import frh_bg from '../../../assets/background/FRH_BG.png';

const GALLERY_ITEMS = [
  {
    id: "echoes",
    side: "left",
    image: eb_bg,
    title: "ECHOES BENEATH",
    description: "Descend into Echoes Beneath, a chilling first-person psychological horror game where your choices leads to multiple endings. Play as Xavier, a sewer inspection leader crushed by medical debts, facing a deceptively simple job that unravels into terror.",
    tags: "Horror, Psychological Horror, Singleplayer",
    link: "/echoes-beneath",
    imageFirst: true,
  },
  {
    id: "frh",
    side: "right",
    image: frh_bg,
    title: "Far Rouge Horizon",
    description: "A space-themed multiplayer game that requires you to travel through space while being shot by enemies. Playable with up to four friends.",
    tags: "Adventure, Puzzle",
    link: "/frh",
    imageFirst: false,
  },
];

export default function GallerySection() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-8 px-4 max-w-[1920px] mx-auto overflow-x-hidden">
      
      <motion.p
        className="font-['Istok_Web'] text-[clamp(2rem,4vw,52px)] text-[#1c1c1c] text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#828282]">Our</span> Gallery
      </motion.p>

      <div className="flex flex-col gap-4">
        {GALLERY_ITEMS.map((item, idx) => (
          <div key={item.id}>
            <motion.div
              className="bg-[#ededed] rounded-[10px] overflow-hidden shadow-md"
              initial={{ 
                opacity: 0, 
                x: item.side === "left" ? -120 : 120,
                filter: "blur(4px)"
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                filter: "blur(0px)"
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                delay: idx * 0.1, 
                duration: 0.9, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
            >
              <div className="flex items-stretch min-h-[200px] max-md:flex-col">
                {item.imageFirst && (
                  <div className="flex-[0_0_22%] overflow-hidden bg-black">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="flex-1 px-10 py-8 flex flex-col justify-center">
                  <h3 className="font-['Istok_Web'] font-bold text-[clamp(1.5rem,2.5vw,40px)] text-[#4d4d4d] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-['Istok_Web'] text-[clamp(0.85rem,1.2vw,18px)] text-[#4d4d4d] leading-[1.5] mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-['Istok_Web'] text-[clamp(0.75rem,1vw,14px)] text-[#989898]">
                      {item.tags}
                    </span>
                    <motion.div
                      href={item.link}
                      whileHover={{ color: "#1c1c1c", x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={item.link}
                        className="font-['Istok_Web'] text-[clamp(0.9rem,1.2vw,18px)] text-[#989898] no-underline flex items-center gap-1"
                      >
                        See More &gt;&gt;
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Image Section - Right Side */}
                {!item.imageFirst && (
                  <div className="flex-[0_0_22%] overflow-hidden bg-black">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Divider SVG */}
            {idx === 0 && (
              <div className="flex justify-center my-4">
                <motion.svg 
                  width="554" height="1" viewBox="0 0 554 1"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <line x1="0" y1="0.5" x2="554" y2="0.5" stroke="#969696" strokeWidth="1" />
                </motion.svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}