import { useEffect } from "react";

export function useScrollEffects(scrollWrapperRef) {
  useEffect(() => {
    const scrollContainer = scrollWrapperRef?.current;
    if (!scrollContainer) return;

    // ============================
    // 1. SCROLL REVEAL (Intersection Observer)
    // ============================
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const scrollRevealElements = document.querySelectorAll(".scroll-reveal, .product-card, .gallery-item");
    scrollRevealElements.forEach((el) => observer.observe(el));

    // ============================
    // 2. NAV & PARALLAX (Optimized with requestAnimationFrame)
    // ============================
    const navbar = document.getElementById("navbar");
    const heroBgImage = document.querySelector(".hero-bg-image");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".scroll-section"); // Sesuaikan selector

    let ticking = false;

    const updateElements = () => {
      const scrolled = scrollContainer.scrollTop;

      // Navbar Effect
      if (navbar) {
        if (scrolled > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      }

      // Parallax Effect (Hanya jalan kalau di section Hero)
      if (heroBgImage && scrolled < window.innerHeight) {
        heroBgImage.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
      }

      // Active Link Highlighting
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrolled >= sectionTop && scrolled < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateElements);
        ticking = true;
      }
    };

    scrollContainer.addEventListener("scroll", onScroll);

    // ============================
    // 3. PARTICLES & RIPPLE (Tetap sama)
    // ============================
    // ... (Kode particle & ripple lo di sini)

    return () => {
      observer.disconnect();
      scrollContainer.removeEventListener("scroll", onScroll);
      // ... (Cleanup particle timeouts)
    };
  }, [scrollWrapperRef]);
}