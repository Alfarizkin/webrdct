const InstagramIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="url(#instagram-gradient)" />
      <path
        d="M50 30c5.5 0 6.2 0 8.4.1 5.6.3 8.2 2.9 8.5 8.5.1 2.2.1 2.9.1 8.4s0 6.2-.1 8.4c-.3 5.6-2.9 8.2-8.5 8.5-2.2.1-2.9.1-8.4.1s-6.2 0-8.4-.1c-5.6-.3-8.2-2.9-8.5-8.5-.1-2.2-.1-2.9-.1-8.4s0-6.2.1-8.4c.3-5.6 2.9-8.2 8.5-8.5 2.2-.1 2.9-.1 8.4-.1zM50 26c-5.6 0-6.3 0-8.5.1-7.5.3-11.7 4.5-12 12-.1 2.2-.1 2.9-.1 8.5s0 6.3.1 8.5c.3 7.5 4.5 11.7 12 12 2.2.1 2.9.1 8.5.1s6.3 0 8.5-.1c7.5-.3 11.7-4.5 12-12 .1-2.2.1-2.9.1-8.5s0-6.3-.1-8.5c-.3-7.5-4.5-11.7-12-12-2.2-.1-2.9-.1-8.5-.1zm0 12.2c-5.9 0-10.7 4.8-10.7 10.7S44.1 59.6 50 59.6s10.7-4.8 10.7-10.7S55.9 38.2 50 38.2zm0 17.6c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9zm11.1-20.4c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z"
        fill="white"
      />
      <defs>
        <linearGradient id="instagram-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#833AB4" />
          <stop offset="50%" stopColor="#FD1D1D" />
          <stop offset="100%" stopColor="#FCAF45" />
        </linearGradient>
      </defs>
    </svg>
  );
  
  const LinkedInIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="#0077B5" />
      <path
        d="M35 43h-8v27h8V43zm-4-12c-2.5 0-4.5 2-4.5 4.5S28.5 40 31 40s4.5-2 4.5-4.5S33.5 31 31 31zm42 39h-8V56c0-3-1-5-3.5-5-1.9 0-3 1.3-3.5 2.5-.2.5-.2 1.1-.2 1.8V70h-8s.1-25.3 0-28h8v4c1-1.6 2.9-3.9 7-3.9 5.1 0 8.9 3.3 8.9 10.5V70z"
        fill="white"
      />
    </svg>
  );
  
  const ScrollUpArrows = () => (
    <>
      <svg width="57" height="114" viewBox="0 0 57 114" fill="none">
        <path
          d="M28.5 0L28.5 100M28.5 0L10 18.5M28.5 0L47 18.5"
          stroke="#A8A8A8"
          strokeWidth="4"
        />
      </svg>
      <svg width="57" height="114" viewBox="0 0 57 114" fill="none">
        <path
          d="M28.5 20L28.5 114M28.5 20L10 38.5M28.5 20L47 38.5"
          stroke="#333333"
          strokeWidth="4"
        />
      </svg>
    </>
  );
  
  export default function ContactSection() {
    const handleScrollUp = (e) => {
      e.preventDefault();
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  
    return (
      <>
        <div className="contact-background-left" />
        <div className="contact-background-right" />
  
        <div className="contact-container">
          {/* Instagram */}
          <div className="social-item social-left scroll-reveal" data-delay="0">
            <div className="social-icon instagram-icon">
              <InstagramIcon />
            </div>
            <p className="social-handle">@redactedinteractive</p>
          </div>
  
          {/* Center */}
          <div className="contact-center">
            <h2 className="thank-you-text scroll-reveal">
              <span>Thank You</span>
              <span>For Visiting</span>
            </h2>
  
            <a
              href="#hero"
              className="scroll-up-button scroll-reveal"
              id="scrollUpBtn"
              onClick={handleScrollUp}
            >
              <ScrollUpArrows />
            </a>
          </div>
  
          {/* LinkedIn */}
          <div
            className="social-item social-right scroll-reveal"
            data-delay="200"
          >
            <div className="social-icon linkedin-icon">
              <LinkedInIcon />
            </div>
            <p className="social-handle">@redactedinteractive</p>
          </div>
        </div>
  
        <footer className="footer">
          <p>© Redacted Interactive 2026</p>
        </footer>
      </>
    );
  }