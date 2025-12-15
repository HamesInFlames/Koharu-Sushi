import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80" 
          alt="Sushi background"
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text animate-fade-in-up">
          <span className="hero-tagline">Authentic Japanese Cuisine</span>
          <h1 className="hero-title">
            <span className="title-line">Make</span>
            <span className="title-line accent">Sushi</span>
            <span className="title-line">Make</span>
            <span className="title-line gold">Memories</span>
          </h1>
          <p className="hero-description">
            Experience the art of traditional Japanese cuisine crafted with passion, 
            premium ingredients, and centuries of culinary tradition.
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
            <Link to="/menu" className="btn btn-secondary">
              View Menu
            </Link>
          </div>
        </div>

        <div className="hero-features animate-fade-in-up delay-3">
          <div className="feature">
            <span className="feature-icon">🍣</span>
            <span className="feature-text">Premium Sushi</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🥢</span>
            <span className="feature-text">Fresh Daily</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🚗</span>
            <span className="feature-text">Fast Delivery</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero

