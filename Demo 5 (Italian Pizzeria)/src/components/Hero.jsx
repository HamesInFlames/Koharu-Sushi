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
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80" 
          alt="Fresh pizza"
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-tagline">Authentic Italian Since 1985</span>
          <h1 className="hero-title">
            <span className="title-line">Wood-Fired</span>
            <span className="title-line accent">Perfection</span>
          </h1>
          <p className="hero-description">
            Handcrafted pizzas made with imported Italian ingredients, 
            baked in our traditional wood-fired oven at 900°F.
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

          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🍕</span>
              <span className="feature-text">Wood-Fired</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🇮🇹</span>
              <span className="feature-text">Imported Ingredients</span>
            </div>
            <div className="feature">
              <span className="feature-icon">👨‍🍳</span>
              <span className="feature-text">Family Recipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

