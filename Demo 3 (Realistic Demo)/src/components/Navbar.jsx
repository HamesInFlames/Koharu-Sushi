import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [isMobileMenuOpen])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <ul className="nav-links nav-left">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
        </ul>

        <a href="#" className="logo">
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Koharu" className="logo-img" />
        </a>

        <ul className="nav-links nav-right">
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a 
          href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=DELIVERY" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-order-btn"
        >
          Order
        </a>

        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-nav-footer">
            <a href="tel:9055902888" className="mobile-phone">(905) 590-2888</a>
            <a 
              href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=DELIVERY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
