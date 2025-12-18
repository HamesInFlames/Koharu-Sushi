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
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80" 
          alt="Coffee shop ambiance"
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-tagline">Specialty Coffee & Artisan Pastries</span>
          <h1 className="hero-title">
            <span className="title-line">Where Every</span>
            <span className="title-line">Cup Tells a <span className="accent">Story</span></span>
          </h1>
          <p className="hero-description">
            Sourced from small-batch roasters, crafted with care. 
            Join us for mindful moments and exceptional brews.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://www.ubereats.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Order Pickup
            </a>
            <button onClick={scrollToMenu} className="btn btn-secondary">
              View Menu
            </button>
          </div>
        </div>

        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🌱</span>
            <span className="feature-text">Ethically Sourced</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🥐</span>
            <span className="feature-text">Fresh Daily</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌿</span>
            <span className="feature-text">Organic Options</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

