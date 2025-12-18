import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="image-main">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80" 
                alt="Coffee roasting"
              />
            </div>
            <div className="image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" 
                alt="Latte art"
              />
            </div>
            <div className="experience-badge">
              <span className="text">Est.</span>
              <span className="years">2018</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              Rooted in <span className="accent">Community</span>
            </h2>
            <p className="about-text">
              Ember & Bloom began as a dream shared between friends—a space where quality 
              coffee meets genuine connection. Named after the warmth of shared moments 
              (ember) and the growth they inspire (bloom), we've made it our mission to 
              craft more than just great coffee.
            </p>
            <p className="about-text">
              We partner with sustainable farms across Ethiopia, Colombia, and Guatemala, 
              ensuring every bean is ethically sourced and carefully roasted to bring out 
              its unique character. From our house-made pastries to our seasonal specials, 
              everything is crafted with intention.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🌍</div>
                <div className="feature-content">
                  <h4>Direct Trade</h4>
                  <p>From farm to cup, we know our sources</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🔥</div>
                <div className="feature-content">
                  <h4>Small Batch Roasted</h4>
                  <p>Fresh roasted weekly in-house</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">💚</div>
                <div className="feature-content">
                  <h4>Eco-Conscious</h4>
                  <p>Compostable cups, zero-waste focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
