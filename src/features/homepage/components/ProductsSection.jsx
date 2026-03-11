import { motion } from "motion/react";

const PRODUCTS = [
  {
    index: 0,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=750&fit=crop",
    name: "Sweet Land",
    description: "250+ models for building vibrant levels: platforms, decorations, traps, teleporters, collectibles, and 15 unique characters.",
  },
  {
    index: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=750&fit=crop",
    name: "Warehouse Pack",
    description: "Downtown factory with ruined old walls. Industrial, rusty structure makes you feel overwhelmed by surrounding environment.",
  },
  {
    index: 2,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=750&fit=crop",
    name: "Lowpoly City Pack",
    description: "A massive low poly asset pack to build your dream low poly stylized games and worlds.",
  },
];

// Komponen Divider dengan animasi scale horizontal saat card di-hover
const DividerSVG = () => (
  <div className="flex justify-center my-4">
    <motion.svg
      width="186" height="2" fill="none" viewBox="0 0 186 2"
      whileHover={{ scaleX: 1.2 }}
      transition={{ duration: 0.4 }}
    >
      <path d="M0 1h186" stroke="#BEBEBE" strokeWidth="2" />
    </motion.svg>
  </div>
);

// Variants untuk Stagger Animation (muncul satu per satu)
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1, // Jeda antar card berdasarkan index
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // Ease Out Cubic biar smooth
    },
  }),
};

export default function ProductsSection() {
  return (
    <div className="w-full h-full flex flex-col items-center max-w-[1920px] mx-auto px-8 overflow-hidden">
      
      {/* Container Judul */}
      <motion.div 
        className="pt-[8vh] pb-[4vh]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }} // once: false agar animasi ulang terus
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-['Istok_Web'] text-[clamp(2rem,4vw,52px)] text-[#1c1c1c] text-center font-bold">
          Preview Products
        </h2>
      </motion.div>

      {/* Grid Utama Produk */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex flex-wrap gap-10 justify-center items-stretch w-full">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.index}
              className="bg-[#ededed] border-2 border-[#656565] rounded-[41px] w-full max-w-[24rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] perspective-[1000px]"
              custom={i} // Mengirim index ke variants
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Memicu animasi saat 20% card terlihat
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                borderColor: "#1c1c1c",
              }}
            >
              {/* Image Section */}
              <div className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[424/300] rounded-[25px] object-cover"
                />
              </div>

              <DividerSVG />

              {/* Text Content */}
              <div className="px-6 pb-8 text-center">
                <h3 className="font-['Istok_Web'] text-[clamp(1.5rem,2.2vw,32px)] text-[#4d4d4d] mb-3 font-bold">
                  {product.name}
                </h3>
                <p className="font-['Istok_Web'] text-[16px] lg:text-[18px] text-[#989898] leading-[1.5]">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tombol Footer */}
      <motion.div 
        className="pt-[4vh] pb-[8vh]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="bg-[#1c1c1c] text-white font-['Istok_Web'] text-2xl px-12 py-4 rounded-[10px] flex items-center gap-4 shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}