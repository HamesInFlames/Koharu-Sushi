import './Location.css'

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-content">
            <span className="section-label">Visit Us</span>
            <h2 className="section-title">
              Come <span className="accent">Experience</span> Korean BBQ
            </h2>
            
            <div className="location-info">
              <div className="info-block">
                <h3>📍 Address</h3>
                <p>456 Koreatown Ave<br/>Los Angeles, CA 90010</p>
              </div>
              
              <div className="info-block">
                <h3>🕐 Hours</h3>
                <p>
                  Mon - Thu: 5:00 PM - 11:00 PM<br/>
                  Fri - Sat: 5:00 PM - 1:00 AM<br/>
                  Sunday: 4:00 PM - 10:00 PM
                </p>
              </div>
              
              <div className="info-block">
                <h3>📞 Contact</h3>
                <p>
                  Phone: (213) 555-0199<br/>
                  Email: hello@seoulfire.com
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
              <a href="tel:+12135550199" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" 
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


