const GALLERY_ITEMS = [
    {
      id: "echoes",
      side: "left",
      image: "/Assets/Background/EB_BG.png",
      title: "ECHOES BENEATH",
      description:
        "Descend into Echoes Beneath, a chilling first-person psychological horror game where your choices leads to multiple ending that reflect your moral compass. Play as Xavier, a sewer inspection leader for Brilliante, crushed by medical debts, facing a deceptively simple job that unravels into terror.",
      tags: "Horror, Psychological Horror, Singleplayer",
      link: "/EBPage",
      imageFirst: true,
    },
    {
      id: "frh",
      side: "right",
      image: "/Assets/Background/FRH_BG.png",
      title: "Far Rouge Horizon",
      description:
        "This is a space-themed multiplayer game that requires you to travel through space while being shot by enemies. It can be played with up to four friends.",
      tags: "Adventure, Puzzle",
      link: "#",
      imageFirst: false,
    },
  ];
  
  export default function GallerySection() {
    return (
      <div className="gallery-container">
        <p className="section-title-gallery scroll-reveal">
          <span className="text-gray">Our</span> Gallery
        </p>
  
        <div className="gallery-items">
          {GALLERY_ITEMS.map((item, idx) => (
            <>
              <div
                key={item.id}
                className={`gallery-item ${item.side === "left" ? "left-gallery" : "right-gallery"} scroll-reveal`}
                data-delay={item.side === "right" ? "200" : "0"}
              >
                <div className="gallery-content">
                  {item.imageFirst && (
                    <div className="gallery-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}
                  <div className="gallery-text">
                    <h3 className="gallery-game-title">{item.title}</h3>
                    <p className="gallery-description">{item.description}</p>
                    <div className="gallery-meta">
                      <span className="gallery-tags">{item.tags}</span>
                      <a href={item.link} className="gallery-link">
                        See More &gt;&gt;
                      </a>
                    </div>
                  </div>
                  {!item.imageFirst && (
                    <div className="gallery-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}
                </div>
              </div>
  
              {idx === 0 && (
                <div key="divider" className="gallery-divider-content">
                  <svg width="554" height="1" viewBox="0 0 554 1">
                    <line x1="0" y1="0.5" x2="544" y2="0.5" stroke="#969696" />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    );
  }