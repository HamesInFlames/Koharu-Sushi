import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/logo.jpeg" alt="Koharu" className="footer-logo" />
            <p className="brand-tagline">
              Authentic Japanese cuisine in the heart of Schomberg, Ontario.
            </p>
            <div className="brand-contact">
              <a href="tel:9055902888" className="phone-link">(905) 590-2888</a>
              <p>50 Doctor Kay Dr, Schomberg</p>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigate</h4>
              <a href="#about">About Us</a>
              <a href="#menu">Our Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="link-group">
              <h4>Order</h4>
              <a 
                href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=DELIVERY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delivery
              </a>
              <a 
                href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=PICKUP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pickup
              </a>
              <a href="tel:9055902888">Call to Order</a>
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              <a 
                href="https://www.instagram.com/koharu.schomberg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <div className="footer-qr">
                <img src="/instagram-qr.jpeg" alt="Instagram QR" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Koharu Japanese Restaurant. All rights reserved.</p>
          <p className="allergen">
            ⚠️ Food may contain: sesame, fish eggs, dairy products, etc.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
