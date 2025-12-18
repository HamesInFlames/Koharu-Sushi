import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="image-main">
              <img 
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80" 
                alt="Chef making pizza"
              />
            </div>
            <div className="image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" 
                alt="Wood-fired oven"
              />
            </div>
            <div className="experience-badge">
              <span className="years">40</span>
              <span className="text">Years of Tradition</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              A <span className="accent">Family</span> Tradition Since 1985
            </h2>
            <p className="about-text">
              Bella Napoli began with Nonna Maria's dream of bringing authentic Neapolitan 
              pizza to America. Using recipes passed down through four generations, we 
              craft each pizza with the same love and dedication as our ancestors in Naples.
            </p>
            <p className="about-text">
              Our dough ferments for 72 hours, our San Marzano tomatoes are imported from 
              Italy, and our mozzarella is made fresh daily. Every pizza tells a story of 
              tradition, passion, and the pursuit of perfection.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🔥</div>
                <div className="feature-content">
                  <h4>Wood-Fired Oven</h4>
                  <p>Baked at 900°F for the perfect char</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🍅</div>
                <div className="feature-content">
                  <h4>Imported Ingredients</h4>
                  <p>San Marzano tomatoes from Italy</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🧀</div>
                <div className="feature-content">
                  <h4>Fresh Mozzarella</h4>
                  <p>Made in-house every morning</p>
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
