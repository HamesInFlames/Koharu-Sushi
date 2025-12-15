import './Contact.css'

const hours = [
  { day: 'Monday', time: '11:30 AM – 9:00 PM' },
  { day: 'Tuesday', time: 'Closed', closed: true },
  { day: 'Wednesday', time: '11:30 AM – 9:00 PM' },
  { day: 'Thursday', time: '11:30 AM – 9:00 PM' },
  { day: 'Friday', time: '11:30 AM – 9:30 PM' },
  { day: 'Saturday', time: '11:30 AM – 9:30 PM' },
  { day: 'Sunday', time: '11:30 AM – 9:00 PM' },
]

const Contact = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Visit Us</span>
          <h2 className="contact-title">
            Find <span className="gold-text">Koharu</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left Column - Info */}
          <div className="contact-info">
            <div className="info-block">
              <div className="block-icon">📍</div>
              <div className="block-content">
                <h4>Address</h4>
                <p>50 Doctor Kay Dr</p>
                <p>Schomberg, Ontario</p>
                <a 
                  href="https://www.google.com/maps/search/50+Doctor+Kay+Dr+Schomberg+Ontario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="info-block">
              <div className="block-icon">📞</div>
              <div className="block-content">
                <h4>Phone</h4>
                <a href="tel:9055902888" className="phone-number">(905) 590-2888</a>
              </div>
            </div>

            <div className="info-block">
              <div className="block-icon">📱</div>
              <div className="block-content">
                <h4>Follow Us</h4>
                <a 
                  href="https://www.instagram.com/koharu.schomberg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  @koharu.schomberg
                </a>
                <div className="qr-code">
                  <img src={`${import.meta.env.BASE_URL}instagram-qr.jpeg`} alt="Instagram QR" />
                </div>
              </div>
            </div>

            <div className="order-block">
              <h4>Order Online</h4>
              <a 
                href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=DELIVERY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Order on UberEats
              </a>
            </div>
          </div>

          {/* Middle Column - Hours */}
          <div className="contact-hours">
            <h3>Hours of Operation</h3>
            <div className="hours-list">
              {hours.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`hours-row ${item.closed ? 'closed' : ''} ${item.day === today ? 'today' : ''}`}
                >
                  <span className="day">{item.day}</span>
                  <span className="time">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="allergen-notice">
              <p>
                ⚠️ <strong>Please be advised:</strong> Food prepared here may contain 
                sesame, fish eggs, dairy products, etc.
              </p>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="contact-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.5!2d-79.6814552!3d44.0061368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882adf2292ed9539%3A0x7d70b4a55e7e7f9!2sKOHARU%20Japanese%20Restaurant!5e0!3m2!1sen!2sca!4v1702684800000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Koharu Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
