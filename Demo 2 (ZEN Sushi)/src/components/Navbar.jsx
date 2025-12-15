import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
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
      <div className="navbar-container">
        <div className="nav-section left">
          <ul className="nav-links">
            <li><a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)}>Philosophy</a></li>
            <li><a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
          </ul>
        </div>

        <a href="#" className="logo">
          <span className="logo-kanji">禅</span>
          <span className="logo-text">ZEN SUSHI</span>
        </a>

        <div className="nav-section right">
          <ul className="nav-links">
            <li><a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <a 
          href="https://www.ubereats.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="order-btn"
        >
          Order
        </a>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)}>Philosophy</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <div className="mobile-menu-actions">
              <a href="tel:+11234567890" className="mobile-action-btn">
                Reserve Table
              </a>
              <a 
                href="https://www.ubereats.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-action-btn primary"
              >
                Order Takeout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
