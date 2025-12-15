import './Philosophy.css'

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="philosophy-header">
          <span className="section-label">Our Philosophy</span>
          <h2 className="section-title">
            "Food is holy. We should be<br />
            <span className="accent">conscious of what we eat</span>"
          </h2>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="card-number">01</div>
            <h3>Tradition</h3>
            <p>
              We honor centuries-old Japanese techniques passed down through 
              generations of master sushi chefs. Every cut, every roll is a 
              tribute to this rich heritage.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="card-number">02</div>
            <h3>Quality</h3>
            <p>
              Our fish is sourced from sustainable fisheries worldwide. We 
              receive fresh deliveries daily, ensuring each piece meets our 
              exacting standards.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="card-number">03</div>
            <h3>Artistry</h3>
            <p>
              Sushi is more than food—it's an art form. Our chefs craft 
              each dish with precision and creativity, creating edible 
              masterpieces.
            </p>
          </div>
        </div>

        <div className="philosophy-image">
          <img 
            src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1200&q=80" 
            alt="Chef preparing sushi"
          />
          <div className="image-caption">
            <span className="caption-label">Head Chef</span>
            <span className="caption-name">Master Takeshi Yamamoto</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy

