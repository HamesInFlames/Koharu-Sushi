import './Location.css'

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-content">
            <span className="section-label">Visit Us</span>
            <h2 className="section-title">
              Come Taste <span className="accent">Authentic</span> Italy
            </h2>
            
            <div className="location-info">
              <div className="info-block">
                <h3>📍 Address</h3>
                <p>789 Little Italy Lane<br/>New York, NY 10013</p>
              </div>
              
              <div className="info-block">
                <h3>🕐 Hours</h3>
                <p>
                  Mon - Thu: 11:00 AM - 10:00 PM<br/>
                  Fri - Sat: 11:00 AM - 11:00 PM<br/>
                  Sunday: 12:00 PM - 9:00 PM
                </p>
              </div>
              
              <div className="info-block">
                <h3>📞 Contact</h3>
                <p>
                  Phone: (212) 555-0147<br/>
                  Email: ciao@bellanapoli.com
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
              <a href="tel:+12125550147" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
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
