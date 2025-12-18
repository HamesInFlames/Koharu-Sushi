import './Hero.css'

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1920&q=80" 
          alt="Korean BBQ grilling"
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-tagline">Authentic Korean BBQ Experience</span>
          <h1 className="hero-title">
            <span className="title-line">GRILL YOUR OWN</span>
            <span className="title-line accent">PREMIUM MEATS</span>
          </h1>
          <p className="hero-description">
            Experience the art of Korean barbecue with premium cuts, 
            traditional banchan, and an unforgettable dining atmosphere.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://www.ubereats.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Order Online
            </a>
            <button onClick={scrollToMenu} className="btn btn-secondary">
              View Menu
            </button>
          </div>
        </div>

        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🥩</span>
            <span className="feature-text">Premium Cuts</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🔥</span>
            <span className="feature-text">Table-Side Grilling</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🥬</span>
            <span className="feature-text">Fresh Banchan</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero


