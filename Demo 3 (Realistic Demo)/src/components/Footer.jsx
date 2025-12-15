import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-kanji">小春</span>
              <span className="logo-text">KOHARU</span>
            </div>
            <p className="footer-tagline">
              Artisanal Japanese cuisine crafted with devotion
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-links">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Order Online</h4>
              <ul>
                <li><a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">UberEats</a></li>
                <li><a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer">DoorDash</a></li>
                <li><a href="https://www.skipthedishes.com" target="_blank" rel="noopener noreferrer">SkipTheDishes</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Koharu Japanese Restaurant. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

