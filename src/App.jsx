import { useState, useEffect } from 'react'
import './App.css'

// Configuration for demo URLs
const isProduction = import.meta.env.PROD

const getDemoUrl = (demoId) => {
  // Use simple relative paths - server.js handles routing
  const demoUrls = {
    1: '/demo1/',
    2: '/demo2/', 
    3: '/demo3/',
  }
  
  return demoUrls[demoId] || '/'
}

const demos = [
  {
    id: 1,
    name: 'Sakura Sushi House',
    subtitle: 'Demo 1',
    description: 'A warm, cherry blossom-inspired design with traditional Japanese aesthetics. Features multi-page navigation with About, Menu, Gallery, and Location pages.',
    color: '#c9a961',
    accent: '#b8944d',
    features: ['Multi-page Layout', 'Cherry Blossom Theme', 'Photo Gallery', 'Location Map'],
    style: 'Traditional & Elegant'
  },
  {
    id: 2,
    name: 'ZEN Sushi',
    subtitle: 'Demo 2',
    description: 'A minimalist, zen-inspired single-page design with clean lines and peaceful aesthetics. Emphasizes simplicity and modern Japanese philosophy.',
    color: '#c9a961',
    accent: '#b8944d',
    features: ['Single Page Design', 'Minimalist Style', 'Philosophy Section', 'Customer Reviews'],
    style: 'Modern & Zen'
  },
  {
    id: 3,
    name: 'KOHARU Japanese Restaurant',
    subtitle: 'Demo 3 - Realistic',
    description: 'A fully realistic website based on actual restaurant data. Includes complete menu with prices, real contact information, Uber Eats integration, and Instagram.',
    color: '#c9a961',
    accent: '#b8944d',
    features: ['Complete Menu', 'Real Contact Info', 'Online Ordering', 'Instagram QR'],
    style: 'Professional & Authentic'
  }
]

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null })
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setLoaded(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 150 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="bg-gradient"></div>
      <div className="bg-pattern"></div>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Kim Consultant" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="#package" onClick={(e) => { e.preventDefault(); scrollToSection('package') }}>Package</a>
            <a href="#demos" onClick={(e) => { e.preventDefault(); scrollToSection('demos') }}>Demos</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
          </div>
        </div>
      </nav>

      <main className="main">
        <section className="intro">
          <h1 className="title">
            <span className="title-line">Landing Essentials</span>
            <span className="title-line accent">Single-Page Website</span>
          </h1>
          <p className="subtitle">
            A simple, all-in-one 1-page website built to convert — ideal for service businesses, events, and personal brands that
            want a professional online presence without the complexity of a full multi-page site.
          </p>
        </section>

        <section id="package" className="landing-section">
          <div className="landing-grid">
            <div className="landing-main-card">
              <div className="landing-price-row">
                <div>
                  <p className="landing-label">Landing Essentials</p>
                  <p className="landing-price">
                    $1,000 <span className="price-note">upfront</span>
                  </p>
                </div>
                <div className="landing-maintenance">
                  <span className="maint-amount">$100/mo</span>
                  <span className="maint-note">required maintenance</span>
                </div>
              </div>

              <div className="landing-columns">
                <div className="landing-column">
                  <h3>What you get</h3>
                  <ul>
                    <li>1-page responsive website (scroll-based layout)</li>
                    <li>Hero section with headline and primary call-to-action</li>
                    <li>About / intro section</li>
                    <li>Services or features block</li>
                    <li>Testimonials or social proof section</li>
                    <li>Contact form + Google Maps embed</li>
                    <li>Mobile-optimized design</li>
                    <li>Fast-loading layout with basic on-page SEO</li>
                    <li>Hosting, SSL, backups &amp; updates (through maintenance)</li>
                  </ul>
                </div>

                <div className="landing-column">
                  <h3>Maintenance (included in $100/mo)</h3>
                  <ul>
                    <li>Up to 1 content revision per month (text or images)</li>
                    <li>Security updates, uptime monitoring &amp; backups</li>
                    <li>Bug fixes and basic performance checks</li>
                    <li>Email support with 48-hour response window</li>
                  </ul>
                  <p className="landing-note">
                    Note: structural layout or design changes after launch are not included. 
                    For bigger changes, you can apply the value of this package toward a full website upgrade.
                  </p>
                </div>
              </div>
            </div>

            <aside className="landing-side-card">
              <p className="side-kicker">Need something simple &amp; fast?</p>
              <h3 className="side-title">Try our Landing Essentials Package</h3>
              <p className="side-text">
                A professional, single-page website built to convert. Fixed price, fast turnaround, and fully managed for you.
              </p>
              <ul className="side-list">
                <li>Fixed price, fast turnaround</li>
                <li>Mobile-friendly &amp; SEO-ready</li>
                <li>Hosting, updates &amp; support included</li>
                <li>
                  <strong>$100/mo maintenance is required</strong>
                </li>
              </ul>
              <p className="side-footnote">
                Great for service professionals, local shops, launches, or portfolio-style pages.
              </p>
              <button
                type="button"
                className="side-cta"
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.href = 'mailto:xoxoksh05@gmail.com?subject=Landing Essentials Website'
                  }
                }}
              >
                Get Started – Landing Essentials
              </button>
            </aside>
          </div>
        </section>

        <section id="demos" className="demos">
          <div className="demos-header">
            <h2 className="demos-title">View Our Work</h2>
            <p className="demos-subtitle">Explore these fully functional restaurant website demos</p>
          </div>
          <div className="demos-grid">
            {demos.map((demo, index) => {
              const demoUrl = getDemoUrl(demo.id)
              return (
              <a
                key={demo.id}
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`demo-card ${hoveredCard === demo.id ? 'hovered' : ''}`}
                style={{ 
                  '--card-color': demo.color,
                  '--card-accent': demo.accent,
                  animationDelay: `${index * 0.15}s`
                }}
                onMouseEnter={() => setHoveredCard(demo.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="demo-number">{demo.subtitle}</span>
                    <h2 className="demo-name">{demo.name}</h2>
                    <span className="demo-style">{demo.style}</span>
                  </div>
                  
                  <p className="demo-description">
                    {demo.description}
                  </p>
                  
                  <div className="demo-features">
                    {demo.features.map((feature, i) => (
                      <span key={i} className="feature-tag">{feature}</span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="demo-cta-btn" onClick={(e) => e.stopPropagation()}>
                      View Demo
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              )
            })}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-container">
            <div className="contact-header">
              <span className="section-label">Get In Touch</span>
              <h2 className="contact-title">Contact Us</h2>
              <p className="contact-subtitle">
                Ready to get started? Fill out the form below and we'll get back to you within 48 hours.
              </p>
            </div>

            <form className="contact-form" onSubmit={async (e) => {
              e.preventDefault()
              setFormStatus({ submitting: true, success: false, error: null })
              
              const formData = new FormData(e.target)
              const email = formData.get('email')
              const phone = formData.get('phone')
              const message = formData.get('message')

              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email, phone, message })
                })

                const data = await response.json()

                if (!response.ok) {
                  throw new Error(data.error || 'Failed to send message')
                }
                
                setFormStatus({ submitting: false, success: true, error: null })
                e.target.reset()
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                  setFormStatus({ submitting: false, success: false, error: null })
                }, 5000)
              } catch (error) {
                console.error('Email send failed:', error)
                setFormStatus({ 
                  submitting: false, 
                  success: false, 
                  error: error.message || 'Failed to send message. Please try again or email us directly at xoxoksh05@gmail.com'
                })
              }
            }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your project or ask any questions..."
                ></textarea>
              </div>

              {formStatus.error && (
                <div className="form-message form-error">
                  {formStatus.error}
                </div>
              )}

              {formStatus.success && (
                <div className="form-message form-success">
                  ✓ Message sent successfully! We'll get back to you within 48 hours.
                </div>
              )}

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Kim Consultant • Landing Essentials Package</p>
      </footer>
    </div>
  )
}

export default App
