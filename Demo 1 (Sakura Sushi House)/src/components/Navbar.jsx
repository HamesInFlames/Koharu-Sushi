import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-icon">桜</span>
          <span className="logo-text">Sakura<span className="logo-accent">Sushi</span></span>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link></li>
          <li><Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/location" onClick={() => setIsMobileMenuOpen(false)}>Location</Link></li>
        </ul>

        <div className="nav-actions">
          <a 
            href="https://www.ubereats.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="order-btn"
          >
            Order Online
          </a>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
