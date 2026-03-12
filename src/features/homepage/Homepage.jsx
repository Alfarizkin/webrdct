import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import { useScrollEffects } from "./hooks/useScrollEffects";
import "./Homepage.css";

export default function Homepage() {
  const scrollWrapperRef = useRef(null);
  useScrollEffects(scrollWrapperRef);

  return (
    <div 
      className="scroll-wrapper w-full overflow-y-scroll h-screen overflow-x-hidden snap-y snap-mandatory no-scrollbar" 
      // ↑ hapus scroll-smooth
      ref={scrollWrapperRef}
    >
      {/* HERO */}
      <section className="scroll-section h-dvh w-full relative bg-[#1c1c1c] snap-always snap-center shrink-0" id="hero">
        <HeroSection />
      </section>

      {/* PRODUCTS */}
      <section
        className="scroll-section h-dvh w-full bg-[#ededed] rounded-t-[50px] snap-always snap-center shrink-0"
        id="products"
      >
        <ProductsSection />
      </section>

      {/* GALLERY */}
      <section
        className="scroll-section h-dvh w-full bg-[#ededed] snap-start snap-always shrink-0"
        id="gallery"
      >
        <GallerySection />
      </section>

      {/* CONTACT */}
      <section
        className="scroll-section h-dvh w-full bg-[#1c1c1c] relative overflow-hidden flex items-center justify-center snap-start snap-always shrink-0"
        id="contact"
      >
        <ContactSection />
      </section>

      <div className="fixed inset-0 pointer-events-none z-[1]" id="particles" />
    </div>
  );
}