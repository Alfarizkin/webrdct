import "./style.css"
import useSmoothScroll from "../hooks/useSmoothScroll"
import useNavbarScroll from "../hooks/useNavbarScroll"
import useScrollReveal from "../hooks/useScrollReveal"
import useParallax from "../hooks/useParallax"
import useScrollProgress from "../hooks/useScrollProgress"
import useParticles from "../hooks/useParticles"
import useActiveNav from "../hooks/useActiveNav"

function Homepage() {

  useSmoothScroll()
  useNavbarScroll()
  useScrollReveal()
  useParallax()
  useScrollProgress()
  useParticles()
  useActiveNav()

  return (
    <article className="scroll-wrapper">

      {/* Hero Section */}
      <section className="hero-section section-full scroll-section" id="hero">

        <div className="navbar" id="navbar">
          <div className="logo-container">
            <img src="/Assets/Background/RDCT_Logo.png" alt="Logo" className="logo" />
          </div>

          <div className="nav-container">

            <button className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="nav-menu" id="navMenu">
              <a href="#products" className="nav-link">Products</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

          </div>
        </div>

        <div className="hero-background">
          <img
            src="/Assets/Background/Home_BG.png"
            alt="Background"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content fade-in-up">
          <p className="hero-title">Powering Games Behind the Scenes</p>
          <p className="hero-subtitle">Develop Your Game Faster</p>

          <button className="cta-button pulse-animation">
            <span>Get Products</span>
            <div className="button-shine"></div>
          </button>
        </div>

      </section>

      {/* Products Section */}
      <section className="products-section section-full scroll-section" id="products">

        <div className="products-container">

          <p className="section-title fade-in">Preview Products</p>

          <div className="products-grid">

            <div className="product-card">
              <div className="card-inner">

                <div className="product-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                    alt="Sweet Land"
                    className="product-image"
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">Sweet Land</h3>

                  <p className="product-description">
                    250+ models for building vibrant levels...
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="contact-section section-full scroll-section" id="contact">

        <footer className="footer">
          <p>© Redacted Interactive 2026</p>
        </footer>

      </section>

    </article>
  )
}

export default Homepage