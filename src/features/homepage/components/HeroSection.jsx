export default function HeroSection() {
    const handleCTA = () => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <>
        <div className="hero-background">
          <img
            src="/Assets/Background/Home_BG.png"
            alt="Background"
            className="hero-bg-image"
          />
          <div className="hero-overlay" />
        </div>
  
        <div className="hero-content fade-in-up">
          <p className="hero-title">Powering Games Behind the Scenes</p>
          <p className="hero-subtitle">Develop Your Game Faster</p>
          <button
            className="cta-button pulse-animation"
            id="ctaButton"
            onClick={handleCTA}
          >
            <span>Get Products</span>
            <div className="button-shine" />
          </button>
        </div>
      </>
    );
  }