import './Location.css'

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-content">
            <span className="section-label">Visit Us</span>
            <h2 className="section-title">
              Find Your Nearest <span className="accent">Location</span>
            </h2>
            
            <div className="location-info">
              <div className="info-block">
                <h3>📍 Address</h3>
                <p>123 Sakura Street<br/>Toronto, ON M4B 1B3</p>
              </div>
              
              <div className="info-block">
                <h3>🕐 Hours</h3>
                <p>
                  Monday - Thursday: 11:30 AM - 10:00 PM<br/>
                  Friday - Saturday: 11:30 AM - 11:00 PM<br/>
                  Sunday: 12:00 PM - 9:00 PM
                </p>
              </div>
              
              <div className="info-block">
                <h3>📞 Contact</h3>
                <p>
                  Phone: (416) 555-0123<br/>
                  Email: hello@sakurasushi.ca
                </p>
              </div>
            </div>

            <div className="location-actions">
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
              <a href="tel:+14165550123" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80" 
                alt="Restaurant interior"
              />
              <div className="map-overlay">
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-btn"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

