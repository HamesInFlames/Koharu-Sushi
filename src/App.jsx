import { useState, useEffect } from 'react'
import './App.css'

// Configuration for demo URLs
const isProduction = import.meta.env.PROD

const getDemoUrl = (demoId) => {
  // In production, demos are served from subfolders
  const productionUrls = {
    1: '/demo1/',
    2: '/demo2/', 
    3: '/demo3/',
  }
  
  // In development, each demo runs on its own port
  const localUrls = {
    1: 'http://localhost:5174',
    2: 'http://localhost:5175',
    3: 'http://localhost:5176',
  }
  
  return isProduction ? productionUrls[demoId] : localUrls[demoId]
}

const demos = [
  {
    id: 1,
    name: 'Sakura Sushi House',
    subtitle: 'Demo 1',
    description: 'A warm, cherry blossom-inspired design with traditional Japanese aesthetics. Features multi-page navigation with About, Menu, Gallery, and Location pages.',
    color: '#ffb7c5',
    accent: '#c41e3a',
    features: ['Multi-page Layout', 'Cherry Blossom Theme', 'Photo Gallery', 'Location Map'],
    style: 'Traditional & Elegant'
  },
  {
    id: 2,
    name: 'ZEN Sushi',
    subtitle: 'Demo 2',
    description: 'A minimalist, zen-inspired single-page design with clean lines and peaceful aesthetics. Emphasizes simplicity and modern Japanese philosophy.',
    color: '#a8d5ba',
    accent: '#2d5a3d',
    features: ['Single Page Design', 'Minimalist Style', 'Philosophy Section', 'Customer Reviews'],
    style: 'Modern & Zen'
  },
  {
    id: 3,
    name: 'KOHARU Japanese Restaurant',
    subtitle: 'Demo 3 - Realistic',
    description: 'A fully realistic website based on actual restaurant data. Includes complete menu with prices, real contact information, Uber Eats integration, and Instagram.',
    color: '#d4a853',
    accent: '#c41e3a',
    features: ['Complete Menu', 'Real Contact Info', 'Online Ordering', 'Instagram QR'],
    style: 'Professional & Authentic'
  }
]

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="bg-gradient"></div>
      <div className="bg-pattern"></div>
      
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-en">Kim Consultant</span>
          </div>
          <p className="tagline">Landing Essentials • Single-Page Website Package</p>
        </div>
      </header>

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

        <section className="landing-section">
          <div className="landing-header">
            <h2 className="landing-title">Landing Essentials Package</h2>
            <p className="landing-subtitle">
              A simple, all-in-one single-page website — perfect for service businesses, events, or personal brands.
            </p>
          </div>

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
                    window.location.href = 'mailto:info@yourstudio.com?subject=Landing Essentials Website'
                  }
                }}
              >
                Get Started – Landing Essentials
              </button>
            </aside>
          </div>
        </section>

        <section className="demos">
          {demos.map((demo, index) => (
            <a
              key={demo.id}
              href={getDemoUrl(demo.id)}
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
                  <span className="view-demo">
                    View Full Restaurant Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Kim Consultant • Landing Essentials Package</p>
      </footer>
    </div>
  )
}

export default App
