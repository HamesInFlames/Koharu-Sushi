import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="image-main">
              <img 
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80" 
                alt="Chef preparing sushi"
              />
            </div>
            <div className="image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80" 
                alt="Sushi platter"
              />
            </div>
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              A Tradition of <span className="accent">Authentic</span> Japanese Cuisine
            </h2>
            <p className="about-text">
              Founded in 2009, Sakura Sushi House has been dedicated to bringing the authentic 
              flavors of Japan to our community. Our head chef, trained in Tokyo's renowned 
              Tsukiji fish market, personally selects the freshest ingredients every morning.
            </p>
            <p className="about-text">
              We believe that sushi is more than just food—it's an art form that connects 
              people through shared experiences. Every roll is crafted with precision, 
              passion, and respect for centuries-old traditions.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🐟</div>
                <div className="feature-content">
                  <h4>Fresh Ingredients</h4>
                  <p>Sourced daily from trusted suppliers</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">👨‍🍳</div>
                <div className="feature-content">
                  <h4>Master Chefs</h4>
                  <p>Trained in traditional Japanese techniques</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🌿</div>
                <div className="feature-content">
                  <h4>Premium Quality</h4>
                  <p>Only the finest cuts and produce</p>
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

