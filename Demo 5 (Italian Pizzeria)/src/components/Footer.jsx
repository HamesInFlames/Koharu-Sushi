import './Footer.css'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="logo">
              <span className="logo-text">Bella <span className="logo-accent">Napoli</span></span>
            </a>
            <p className="footer-tagline">
              Authentic Italian cuisine since 1985. Wood-fired perfection.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" aria-label="Yelp">YP</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>Our Story</a></li>
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu') }}>Menu</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}>Gallery</a></li>
              <li><a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location') }}>Visit Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Order Online</h4>
            <ul>
              <li><a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">UberEats</a></li>
              <li><a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer">DoorDash</a></li>
              <li><a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer">Grubhub</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>789 Little Italy Lane<br/>New York, NY 10013</p>
            <p>(212) 555-0147</p>
            <p>ciao@bellanapoli.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Bella Napoli Pizzeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
