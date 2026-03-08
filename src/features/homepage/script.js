// ============================
// SMOOTH SCROLL FUNCTIONALITY
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// CTA Button scroll to products
const ctaButton = document.getElementById('ctaButton');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ============================
// NAVBAR SCROLL EFFECTS
// ============================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ============================
// MOBILE MENU TOGGLE
// ============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// ============================
// SCROLL REVEAL ANIMATIONS
// ============================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            
            setTimeout(() => {
                entry.target.classList.add('visible');
                
                // Add stagger effect for product cards
                if (entry.target.classList.contains('product-card')) {
                    const index = parseInt(entry.target.dataset.index);
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                }
            }, delay);
        }
    });
}, observerOptions);

// Observe all scroll reveal elements
const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .section-title, .section-title-gallery, .product-card, .more-button-container, .gallery-divider, .gallery-item, .social-item, .thank-you-text, .scroll-up-button');
scrollRevealElements.forEach(element => observer.observe(element));

// ============================
// PARALLAX EFFECT ON HERO
// ============================
const heroSection = document.getElementById('hero');
const heroBgImage = document.querySelector('.hero-bg-image');

window.addEventListener('scroll', () => {
    if (!heroSection || !heroBgImage) return;
    
    const scrolled = window.pageYOffset;
    const heroHeight = heroSection.offsetHeight;
    
    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.5;
        heroBgImage.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
    }
});

// ============================
// SECTION SCROLL ANIMATIONS
// ============================
// const sections = document.querySelectorAll('.section-full');
// let currentSection = 0;

// const sectionObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const sectionNumber = entry.target.dataset.section;
//             currentSection = parseInt(sectionNumber);
            
//             // Add active class to section
//             entry.target.classList.add('active-section');
            
//             // Trigger section-specific animations
//             triggerSectionAnimations(currentSection);
//         } else {
//             entry.target.classList.remove('active-section');
//         }
//     });
// }, {
//     threshold: 0.5
// });

// sections.forEach(section => sectionObserver.observe(section));

// function triggerSectionAnimations(sectionNum) {
//     console.log(`Section ${sectionNum} is active`);
    
//     // Add custom animations for each section
//     switch(sectionNum) {
//         case 1:
//             // Hero section animations
//             break;
//         case 2:
//             // Products section animations
//             animateProductCards();
//             break;
//         case 3:
//             // Gallery section animations
//             animateGalleryItems();
//             break;
//         case 4:
//             // Contact section animations
//             animateContactSection();
//             break;
//     }
// }

// function animateProductCards() {
//     const cards = document.querySelectorAll('.product-card');
//     cards.forEach((card, index) => {
//         setTimeout(() => {
//             card.style.opacity = '1';
//             card.style.transform = 'translateY(0) rotateX(0)';
//         }, index * 200);
//     });
// }

// function animateGalleryItems() {
//     const items = document.querySelectorAll('.gallery-item');
//     items.forEach((item, index) => {
//         setTimeout(() => {
//             item.classList.add('visible');
//         }, index * 300);
//     });
// }

// function animateContactSection() {
//     const socialItems = document.querySelectorAll('.social-item');
//     socialItems.forEach((item, index) => {
//         setTimeout(() => {
//             item.classList.add('visible');
//         }, index * 200);
//     });
// }

// ============================
// PRODUCT CARD 3D TILT EFFECT
// ============================
// const productCards = document.querySelectorAll('.product-card');
// productCards.forEach(card => {
//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
        
//         const rotateX = (y - centerY) / 20;
//         const rotateY = (centerX - x) / 20;
        
//         card.style.transform = `translateY(-20px) scale(1.05) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = '';
//     });
// });

// ============================
// FLOATING PARTICLES
// ============================
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation duration
    const duration = Math.random() * 15 + 10;
    particle.style.animationDuration = duration + 's';
    
    // Random delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = delay + 's';
    
    particlesContainer.appendChild(particle);
    
    // Remove and recreate after animation
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, (duration + delay) * 1000);
}

// Create initial particles
for (let i = 0; i < particleCount; i++) {
    setTimeout(() => createParticle(), i * 200);
}

// ============================
// RIPPLE EFFECT ON BUTTONS
// ============================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple-effect');
    
    const rippleEffect = button.querySelector('.ripple-effect');
    if (rippleEffect) {
        rippleEffect.remove();
    }
    
    button.appendChild(ripple);
}

const buttons = document.querySelectorAll('.cta-button, .more-button');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// ============================
// SCROLL PROGRESS BAR
// ============================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
});

// ============================
// GALLERY ITEM HOVER EFFECTS
// ============================
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
        item.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
        item.style.boxShadow = '';
    });
});

// ============================
// SMOOTH SCROLL TO TOP
// ============================
const scrollUpBtn = document.getElementById('scrollUpBtn');
if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================
// IMAGE LAZY LOADING
// ============================
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
            }
            
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================
// SECTION TRANSITION EFFECTS
// ============================
let ticking = false;

function updateSectionTransitions() {
    const scrollPos = window.pageYOffset;
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPos;
        const sectionHeight = rect.height;
        
        // Calculate scroll progress through section
        const progress = (scrollPos - sectionTop) / sectionHeight;
        
        // Apply parallax or fade effects based on progress
        if (progress >= 0 && progress <= 1) {
            // Section is in view
            const opacity = 1 - Math.abs(progress - 0.5) * 0.5;
            section.style.opacity = Math.max(0.7, opacity);
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateSectionTransitions();
        });
        ticking = true;
    }
});

// ============================
// KEYBOARD NAVIGATION
// ============================
document.addEventListener('keydown', (e) => {
    const sectionsArray = Array.from(sections);
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const nextSection = sectionsArray[currentSection];
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prevSection = sectionsArray[Math.max(0, currentSection - 2)];
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
        e.preventDefault();
        const lastSection = sectionsArray[sectionsArray.length - 1];
        if (lastSection) {
            lastSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollPos = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================
// PERFORMANCE OPTIMIZATION
// ============================
let rafId;
function animate() {
    // Add any continuous animations here if needed
    rafId = requestAnimationFrame(animate);
}
animate();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(rafId);
});

// ============================
// CURSOR TRAIL EFFECT (OPTIONAL)
// ============================
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
});

// ============================
// INITIALIZATION LOG
// ============================
console.log('🎮 Redacted Interactive Landing Page Loaded!');
console.log('📱 All 4 sections with scroll animations active');
console.log('✨ Enhanced parallax and scroll effects enabled');
