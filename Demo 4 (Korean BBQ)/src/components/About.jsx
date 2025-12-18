import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="image-main">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" 
                alt="Grilling meats"
              />
            </div>
            <div className="image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&q=80" 
                alt="Korean dining"
              />
            </div>
            <div className="experience-badge">
              <span className="years">20+</span>
              <span className="text">Years of Tradition</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              Bringing <span className="accent">Seoul's Flavors</span> to Your Table
            </h2>
            <p className="about-text">
              Founded by the Kim family in 2004, Seoul Fire brings the authentic taste 
              of Korean BBQ straight from the streets of Seoul. Our recipes have been 
              passed down through three generations.
            </p>
            <p className="about-text">
              Every cut of meat is carefully selected and marinated using our secret 
              family recipe. Paired with over 15 varieties of fresh banchan, each meal 
              is a celebration of Korean culinary heritage.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🇰🇷</div>
                <div className="feature-content">
                  <h4>Authentic Recipes</h4>
                  <p>Traditional family recipes from Seoul</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🥩</div>
                <div className="feature-content">
                  <h4>Premium Meats</h4>
                  <p>USDA Prime and Korean Hanwoo beef</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🥢</div>
                <div className="feature-content">
                  <h4>Fresh Banchan</h4>
                  <p>Made fresh daily in-house</p>
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
