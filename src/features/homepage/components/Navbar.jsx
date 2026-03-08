import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="logo-container">
        <img src="/Assets/Background/RDCT_Logo.png" alt="Logo" className="logo" />
      </div>
      <div />
      <div className="nav-container">
        <button
          className={`hamburger${menuOpen ? " active" : ""}`}
          id="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu${menuOpen ? " active" : ""}`} id="navMenu">
          {["products", "gallery", "about", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, `#${id}`)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}