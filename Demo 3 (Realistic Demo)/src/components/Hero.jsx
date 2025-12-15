import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80" 
          alt="Sushi"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-location animate-fade-in-up">
            <span className="location-icon">📍</span>
            Schomberg, Ontario
          </p>
          <h1 className="hero-title animate-fade-in-up delay-1">
            <span className="title-small">小春 Japanese Restaurant</span>
            <span className="title-large">KOHARU</span>
          </h1>
          <p className="hero-tagline animate-fade-in-up delay-2">
            Fresh Sushi • Authentic Cuisine • Since Day One
          </p>
          <div className="hero-cta animate-fade-in-up delay-3">
            <a href="tel:9055902888" className="btn btn-primary">
              Call (905) 590-2888
            </a>
            <a 
              href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=DELIVERY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Order Delivery
            </a>
          </div>
        </div>

        <div className="hero-info animate-fade-in delay-4">
          <div className="info-item">
            <span className="info-number">100+</span>
            <span className="info-label">Menu Items</span>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="info-number">Fresh</span>
            <span className="info-label">Daily Catch</span>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="info-number">Fast</span>
            <span className="info-label">Delivery</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
