import { useEffect, useRef } from "react";
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
        <section className="section-full scroll-section" id="hero">
          <Navbar />
          <HeroSection />
        </section>

        <section className="section-full scroll-section products-section" id="products">
          <ProductsSection />
        </section>

        <section className="section-full scroll-section gallery-section" id="gallery" data-section="3">
          <GallerySection />
        </section>

        <section className="section-full scroll-section contact-section" id="contact" data-section="4">
          <ContactSection />
        </section>
      </article>

      {/* Floating Particles */}
      <div className="particles-container" id="particles" />
    </div>
  );
}
