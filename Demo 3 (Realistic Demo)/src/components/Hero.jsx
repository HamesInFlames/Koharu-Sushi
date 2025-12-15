import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label animate-fade-in-up">Est. 2015 • Toronto</span>
          <h1 className="hero-title animate-fade-in-up delay-1">
            The Art of<br />
            <span className="title-accent">Omakase</span>
          </h1>
          <p className="hero-description animate-fade-in-up delay-2">
            An intimate culinary journey where tradition meets innovation.
            Each piece tells a story of craftsmanship and devotion.
          </p>
          <div className="hero-actions animate-fade-in-up delay-3">
            <a href="#contact" className="btn btn-primary">
              Reserve a Table
            </a>
            <a 
              href="https://www.ubereats.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Order Takeout
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper animate-fade-in delay-2">
          <img 
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80" 
            alt="Premium sushi"
          />
        </div>
        <div className="image-decoration"></div>
      </div>

      <div className="hero-stats">
        <div className="stat animate-fade-in-up delay-3">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years of Excellence</span>
        </div>
        <div className="stat animate-fade-in-up delay-4">
          <span className="stat-number">50+</span>
          <span className="stat-label">Signature Dishes</span>
        </div>
        <div className="stat animate-fade-in-up delay-5">
          <span className="stat-number">2</span>
          <span className="stat-label">Locations</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

