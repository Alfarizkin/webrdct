import { useRef } from "react";
import Navbar from "./components/Navbar";
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
    <div className="scroll-wrapper" ref={scrollWrapperRef}>
      <article>
        {/* HERO */}
        <section className="scroll-section relative bg-[#1c1c1c]" id="hero">

          <HeroSection />
        </section>

        {/* PRODUCTS */}
        <section
          className="scroll-section bg-[#ededed] rounded-t-[50px] overflow-y-auto"
          id="products"
        >
          <ProductsSection />
        </section>

        {/* GALLERY */}
        <section
          className="scroll-section bg-[#ededed] overflow-y-auto"
          id="gallery"
        >
          <GallerySection />
        </section>

        {/* CONTACT */}
        <section
          className="scroll-section bg-[#1c1c1c] relative overflow-hidden flex items-center justify-center"
          id="contact"
        >
          <ContactSection />
        </section>
      </article>

      {/* Floating particles — dihandle oleh useScrollEffects */}
      <div className="fixed inset-0 pointer-events-none z-[1]" id="particles" />
    </div>
  );
}