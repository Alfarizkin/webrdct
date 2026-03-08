const PRODUCTS = [
    {
      index: 0,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=750&fit=crop",
      name: "Sweet Land",
      description:
        "250+ models for building vibrant levels: platforms, decorations, traps, teleporters, collectibles, and 15 unique characters with animations - everything for dynamic and lively gameplay.",
    },
    {
      index: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=750&fit=crop",
      name: "Warehouse Pack",
      description:
        "Downtown factory with ruined old walls. Warehouse building, and still a few working machines. Industrial, rusty structure makes you feel overwhelmed by surrounding environment.",
    },
    {
      index: 2,
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=750&fit=crop",
      name: "Lowpoly City Pack",
      description:
        "Poly Pro Universe - A massive low poly asset pack to build your dream low poly stylized games and even worlds like in scene promo.",
    },
  ];
  
  const DividerSVG = () => (
    <div className="divider-container">
      <svg width="186" height="2" fill="none" viewBox="0 0 186 2">
        <path d="M0 1h186" stroke="#BEBEBE" strokeWidth="2" />
      </svg>
    </div>
  );
  
  export default function ProductsSection() {
    return (
      <div className="products-container">
        <p className="section-title fade-in">Preview Products</p>
  
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <div
              className="product-card"
              data-index={product.index}
              key={product.index}
            >
              <div className="card-inner">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
  
                <DividerSVG />
  
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="more-button-container">
          <button className="more-button">
            <span>More</span>
            <svg
              className="arrow-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }