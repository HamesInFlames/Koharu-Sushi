import './Location.css'

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-content">
            <span className="section-label">Visit Us</span>
            <h2 className="section-title">
              Your <span className="accent">Neighborhood</span> Cafe
            </h2>
            
            <div className="location-info">
              <div className="info-block">
                <h3>📍 Find Us</h3>
                <p>456 Bloom Street<br/>Brooklyn, NY 11201</p>
              </div>
              
              <div className="info-block">
                <h3>🕐 Hours</h3>
                <p>
                  Mon - Fri: 7:00 AM - 6:00 PM<br/>
                  Saturday: 8:00 AM - 7:00 PM<br/>
                  Sunday: 8:00 AM - 5:00 PM
                </p>
              </div>
              
              <div className="info-block">
                <h3>📞 Connect</h3>
                <p>
                  Phone: (718) 555-0234<br/>
                  Email: hello@emberandbloom.co
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
              <a href="tel:+17185550234" className="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80" 
                alt="Cafe interior"
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


