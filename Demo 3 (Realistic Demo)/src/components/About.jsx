import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-stack">
            <div className="image-frame main">
              <img 
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80" 
                alt="Sushi chef at work"
              />
            </div>
            <div className="image-frame secondary">
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80" 
                alt="Fresh sushi"
              />
            </div>
            <div className="floating-badge">
              <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Koharu" />
            </div>
          </div>
        </div>

        <div className="about-right">
          <span className="section-label">Our Story</span>
          <h2 className="about-title">
            Authentic Japanese<br/>
            <span className="gold-text">Cuisine in Schomberg</span>
          </h2>
          <p className="about-desc">
            Located at 50 Doctor Kay Dr, Koharu brings the authentic flavors 
            of Japan to the heart of Schomberg, Ontario. Every dish is prepared 
            with care, using fresh ingredients and traditional techniques.
          </p>
          <p className="about-desc">
            From our signature sushi rolls to hearty noodle bowls and sizzling 
            teriyaki, we offer over 100 menu items for dine-in, takeout, or delivery.
          </p>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🍣</div>
              <div>
                <h4>Fresh Daily</h4>
                <p>Premium fish delivered fresh</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍🍳</div>
              <div>
                <h4>Expert Chefs</h4>
                <p>Skilled in traditional techniques</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🚗</div>
              <div>
                <h4>Fast Delivery</h4>
                <p>Order via UberEats</p>
              </div>
            </div>
          </div>

          <a href="tel:9055902888" className="about-cta">
            <span className="cta-text">Call to Reserve</span>
            <span className="cta-phone">(905) 590-2888</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
