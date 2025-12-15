import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Visit Us</span>
            <h2 className="contact-title">Reservations</h2>
            <p className="contact-description">
              Join us for an unforgettable dining experience. 
              For parties of 6 or more, please call directly.
            </p>

            <div className="contact-details">
              <div className="detail-block">
                <h4>Downtown Location</h4>
                <p>123 Queen Street West<br/>Toronto, ON M5H 2M9</p>
                <p className="detail-phone">(416) 555-0123</p>
              </div>

              <div className="detail-block">
                <h4>Midtown Location</h4>
                <p>456 Yonge Street<br/>Toronto, ON M4Y 1X8</p>
                <p className="detail-phone">(416) 555-0456</p>
              </div>

              <div className="detail-block">
                <h4>Hours</h4>
                <p>
                  Tue - Thu: 5:00 PM - 10:00 PM<br/>
                  Fri - Sat: 5:00 PM - 11:00 PM<br/>
                  Sun: 5:00 PM - 9:00 PM<br/>
                  <span className="closed">Monday: Closed</span>
                </p>
              </div>
            </div>

            <div className="order-online">
              <h4>Order Online</h4>
              <div className="order-buttons">
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <h3>Make a Reservation</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Phone number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <select>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Party Size</label>
                <select>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests (Please Call)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Special Requests</label>
                <textarea placeholder="Allergies, celebrations, etc." rows="3"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Request Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

