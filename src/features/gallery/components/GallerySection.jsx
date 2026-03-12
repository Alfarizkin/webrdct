import { motion } from "motion/react";
import { Link } from "react-router-dom";
import eb_bg from '../../../assets/background/gallery/EB.png';
import uset_bg from '../../../assets/background/gallery/USET.png';
import std_bg from  '../../../assets/background/gallery/StD.png'

const GALLERY_ITEMS = [
  {
    id: "echoes",
    image: eb_bg,
    title: "ECHOES BENEATH",
    description: "Descend into Echoes Beneath, a chilling first-person psychological horror game where your choices leads to multiple ending that reflect your moral compass. Play as Xavier, a sewer inspection leader for Brilliante, crushed by medical debts, facing a deceptively simple job that unravels into terror.",
    tags: "Horror, Psychological Horror, Singleplayer",
    link: "/echoes-beneath",
    imageFirst: true,
  },
  {
    id: "uset",
    image: uset_bg,
    title: "USET",
    description: "A Narrative Puzzle that takes place in an unknown planet where you play as a rover assigned by the (United Space Exploration Team) from Earth to discover the unknown. All prior rovers have been sent and failed miserably with bit to no important information. In this journey which feels like there's no purpose what will you do and discover?",
    tags: "Advanture, Puzzle",
    link: "/uset",
    imageFirst: true,
  },
  {
    id: "std",
    image: std_bg,
    title: "Seconds to Dread",
    description: 'A 3D Puzzle Survival Horror game where you escape your fears by navigating between the real world and a nightmarish dreamscape within a limited time. Taking the main theme of "Cost", where player needs to take risks in order to gain higher reward and escape in time.',
    tags: "Horror",
    link: "/std",
    imageFirst: true,
  },
];

export default function GallerySection() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-34 px-16 max-w-[1920px] mx-auto overflow-x-hidden">
      <div className="flex flex-col gap-12.5">
        {GALLERY_ITEMS.map((item, idx) => (
          <div key={item.id}>
            <div className="flex items-stretch min-h-[200px] max-md:flex-col">
              {item.imageFirst && (
                <div className="w-87.5 h-87.5 overflow-hidden bg-black">
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
              <div className="flex-1 px-5 flex flex-col" style={{ fontFamily: "Istok Web" }}>
                <h3 className="font-bold text-[clamp(1.5rem,2.5vw,48px)] text-[#4d4d4d] mb-3">
                  {item.title}
                </h3>
                <p className="text-[clamp(0.85rem,1.2vw,24px)] text-[#4d4d4d] leading-[1.5] mb-3">
                  {item.description}
                </p>
                <div className="flex h-full justify-between items-end pb-7">
                  <span className="text-[clamp(0.75rem,1vw,16px)] text-[#989898]">
                    {item.tags}
                  </span>
                  <motion.div
                    href={item.link}
                    whileHover={{ color: "#1c1c1c", x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.link}
                      className="text-[clamp(0.9rem,1.2vw,18px)] text-[#989898] no-underline flex items-center gap-1"
                    >
                      See More &gt;&gt;
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}