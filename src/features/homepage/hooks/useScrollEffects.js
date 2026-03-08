import { useEffect } from "react";

export function useScrollEffects(scrollWrapperRef) {
  useEffect(() => {
    // ============================
    // SCROLL REVEAL ANIMATIONS
    // ============================
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add("visible");
            if (entry.target.classList.contains("product-card")) {
              const index = parseInt(entry.target.dataset.index);
              entry.target.style.transitionDelay = `${index * 0.2}s`;
            }
          }, delay);
        }
      });
    }, observerOptions);

    const scrollRevealElements = document.querySelectorAll(
      ".scroll-reveal, .section-title, .section-title-gallery, .product-card, .more-button-container, .gallery-item, .social-item, .thank-you-text, .scroll-up-button"
    );
    scrollRevealElements.forEach((el) => observer.observe(el));

    // ============================
    // NAVBAR SCROLL EFFECTS
    // ============================
    const navbar = document.getElementById("navbar");
    const handleNavScroll = () => {
      const scrollTop =
        scrollWrapperRef?.current?.scrollTop ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      if (navbar) {
        if (scrollTop > 100) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      }
    };

    const scrollContainer = scrollWrapperRef?.current || window;
    const scrollEvent = scrollWrapperRef?.current ? "scroll" : "scroll";
    scrollContainer.addEventListener(scrollEvent, handleNavScroll);

    // ============================
    // PARALLAX ON HERO
    // ============================
    const heroBgImage = document.querySelector(".hero-bg-image");
    const handleParallax = () => {
      const scrolled =
        scrollWrapperRef?.current?.scrollTop || window.pageYOffset;
      const heroSection = document.getElementById("hero");
      if (!heroSection || !heroBgImage) return;
      const heroHeight = heroSection.offsetHeight;
      if (scrolled < heroHeight) {
        heroBgImage.style.transform = `translateY(${
          scrolled * 0.5
        }px) scale(1.1)`;
      }
    };
    scrollContainer.addEventListener(scrollEvent, handleParallax);

    // ============================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ============================
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section-full");

    const updateActiveNavLink = () => {
      const scrollPos =
        (scrollWrapperRef?.current?.scrollTop || window.pageYOffset) + 200;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };
    scrollContainer.addEventListener(scrollEvent, updateActiveNavLink);

    // ============================
    // FLOATING PARTICLES
    // ============================
    const particlesContainer = document.getElementById("particles");
    const particleCount = 30;
    const particleTimeouts = [];

    function createParticle() {
      if (!particlesContainer) return;
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      const size = Math.random() * 4 + 2;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      const duration = Math.random() * 15 + 10;
      particle.style.animationDuration = duration + "s";
      const delay = Math.random() * 5;
      particle.style.animationDelay = delay + "s";
      particlesContainer.appendChild(particle);

      const t = setTimeout(() => {
        particle.remove();
        createParticle();
      }, (duration + delay) * 1000);
      particleTimeouts.push(t);
    }

    const initTimeouts = [];
    for (let i = 0; i < particleCount; i++) {
      const t = setTimeout(() => createParticle(), i * 200);
      initTimeouts.push(t);
    }

    // ============================
    // RIPPLE EFFECT ON BUTTONS
    // ============================
    function createRipple(event) {
      const button = event.currentTarget;
      const existingRipple = button.querySelector(".ripple-effect");
      if (existingRipple) existingRipple.remove();

      const ripple = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
      ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
      ripple.classList.add("ripple-effect");
      button.appendChild(ripple);
    }

    const buttons = document.querySelectorAll(".cta-button, .more-button");
    buttons.forEach((btn) => btn.addEventListener("click", createRipple));

    // ============================
    // GALLERY HOVER EFFECTS
    // ============================
    const galleryItems = document.querySelectorAll(".gallery-item");
    const handleGalleryEnter = (item) => () => {
      item.style.transform = "scale(1.02)";
      item.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
    };
    const handleGalleryLeave = (item) => () => {
      item.style.transform = "";
      item.style.boxShadow = "";
    };
    galleryItems.forEach((item) => {
      item.addEventListener("mouseenter", handleGalleryEnter(item));
      item.addEventListener("mouseleave", handleGalleryLeave(item));
    });

    // Cleanup
    return () => {
      observer.disconnect();
      scrollContainer.removeEventListener(scrollEvent, handleNavScroll);
      scrollContainer.removeEventListener(scrollEvent, handleParallax);
      scrollContainer.removeEventListener(scrollEvent, updateActiveNavLink);
      buttons.forEach((btn) => btn.removeEventListener("click", createRipple));
      galleryItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleGalleryEnter(item));
        item.removeEventListener("mouseleave", handleGalleryLeave(item));
      });
      [...particleTimeouts, ...initTimeouts].forEach(clearTimeout);
    };
  }, []);
}