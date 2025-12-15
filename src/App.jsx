import { useState, useEffect } from 'react'
import './App.css'

// Configuration for demo URLs
// Update these with your Railway URLs after deployment
const isProduction = import.meta.env.PROD

const getDemoUrl = (demoId) => {
  const productionUrls = {
    1: import.meta.env.VITE_DEMO1_URL || '#',
    2: import.meta.env.VITE_DEMO2_URL || '#', 
    3: import.meta.env.VITE_DEMO3_URL || '#',
  }
  
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
            <span className="logo-jp">小春</span>
            <span className="logo-en">KOHARU</span>
          </div>
          <p className="tagline">Website Demo Showcase</p>
        </div>
      </header>

      <main className="main">
        <section className="intro">
          <h1 className="title">
            <span className="title-line">Choose Your</span>
            <span className="title-line accent">Demo Experience</span>
          </h1>
          <p className="subtitle">
            Explore three unique website designs for a Japanese sushi restaurant. 
            Each demo showcases different aesthetics and functionality.
          </p>
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
                
                <p className="demo-description">{demo.description}</p>
                
                <div className="demo-features">
                  {demo.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="card-footer">
                  <span className="view-demo">
                    View Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </section>

        {!isProduction && (
          <section className="instructions">
            <h3>Local Development</h3>
            <div className="instruction-cards">
              <div className="instruction-card">
                <span className="step-number">1</span>
                <p>Make sure all demo servers are running</p>
              </div>
              <div className="instruction-card">
                <span className="step-number">2</span>
                <p>Click any card to open that demo</p>
              </div>
              <div className="instruction-card">
                <span className="step-number">3</span>
                <p>Explore and compare designs</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>KOHARU Sushi Demo Showcase • Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
