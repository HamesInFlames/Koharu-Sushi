import { useState, useEffect } from 'react'
import './App.css'

// Translations
const translations = {
  en: {
    // Nav
    package: 'Package',
    demos: 'Demos',
    contact: 'Contact',
    // Hero
    heroTitle1: 'Landing Essentials',
    heroTitle2: 'Single-Page Website',
    heroSubtitle: 'A simple, all-in-one 1-page website built to convert — ideal for service businesses, events, and personal brands that want a professional online presence without the complexity of a full multi-page site.',
    // Package section
    landingEssentials: 'Landing Essentials',
    upfront: 'upfront',
    requiredMaintenance: 'required maintenance',
    whatYouGet: 'What you get',
    packageItem1: '1-page responsive website (scroll-based layout)',
    packageItem2: 'Hero section with headline and primary call-to-action',
    packageItem3: 'About / intro section',
    packageItem4: 'Services or features block',
    packageItem5: 'Testimonials or social proof section',
    packageItem6: 'Contact form + Google Maps embed',
    packageItem7: 'Mobile-optimized design',
    packageItem8: 'Fast-loading layout with basic on-page SEO',
    packageItem9: 'Hosting, SSL, backups & updates (through maintenance)',
    maintenanceTitle: 'Maintenance (included in $100/mo)',
    maintItem1: 'Up to 1 content revision per month (text or images)',
    maintItem2: 'Security updates, uptime monitoring & backups',
    maintItem3: 'Bug fixes and basic performance checks',
    maintItem4: 'Email support with 48-hour response window',
    maintenanceNote: 'Note: structural layout or design changes after launch are not included. For bigger changes, you can apply the value of this package toward a full website upgrade.',
    sideKicker: 'Need something simple & fast?',
    sideTitle: 'Try our Landing Essentials Package',
    sideText: 'A professional, single-page website built to convert. Fixed price, fast turnaround, and fully managed for you.',
    sideItem1: 'Fixed price, fast turnaround',
    sideItem2: 'Mobile-friendly & SEO-ready',
    sideItem3: 'Hosting, updates & support included',
    sideItem4: '$100/mo maintenance is required',
    sideFootnote: 'Great for service professionals, local shops, launches, or portfolio-style pages.',
    getStarted: 'Get Started – Landing Essentials',
    // Demos section
    viewOurWork: 'View Our Work',
    demosSubtitle: 'Explore these fully functional restaurant website demos',
    viewDemo: 'View Demo',
    // Contact section
    getInTouch: 'Get In Touch',
    contactUs: 'Contact Us',
    contactSubtitle: 'Ready to get started? Fill out the form below and we\'ll get back to you within 48 hours.',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    message: 'Message',
    emailPlaceholder: 'your.email@example.com',
    phonePlaceholder: '(555) 123-4567',
    messagePlaceholder: 'Tell us about your project or ask any questions...',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    successMessage: '✓ Message sent! We\'ll get back to you within 48 hours.',
    // Footer
    footerText: 'Kim Consultant • Landing Essentials Package',
    // Demo data
    demo1Name: 'Sakura Sushi House',
    demo1Subtitle: 'Demo 1',
    demo1Description: 'A warm, cherry blossom-inspired design with traditional Japanese aesthetics. Features multi-page navigation with About, Menu, Gallery, and Location pages.',
    demo1Style: 'Traditional & Elegant',
    demo1Features: ['Multi-page Layout', 'Cherry Blossom Theme', 'Photo Gallery', 'Location Map'],
    demo2Name: 'ZEN Sushi',
    demo2Subtitle: 'Demo 2',
    demo2Description: 'A minimalist, zen-inspired single-page design with clean lines and peaceful aesthetics. Emphasizes simplicity and modern Japanese philosophy.',
    demo2Style: 'Modern & Zen',
    demo2Features: ['Single Page Design', 'Minimalist Style', 'Philosophy Section', 'Customer Reviews'],
    demo3Name: 'KOHARU Japanese Restaurant',
    demo3Subtitle: 'Demo 3 - Realistic',
    demo3Description: 'A fully realistic website based on actual restaurant data. Includes complete menu with prices, real contact information, Uber Eats integration, and Instagram.',
    demo3Style: 'Professional & Authentic',
    demo3Features: ['Complete Menu', 'Real Contact Info', 'Online Ordering', 'Instagram QR'],
  },
  ko: {
    // Nav
    package: '패키지',
    demos: '데모',
    contact: '문의',
    // Hero
    heroTitle1: '랜딩 에센셜',
    heroTitle2: '싱글 페이지 웹사이트',
    heroSubtitle: '전환을 위해 설계된 간단한 올인원 1페이지 웹사이트 — 복잡한 멀티 페이지 사이트 없이 전문적인 온라인 존재감을 원하는 서비스 비즈니스, 이벤트 및 개인 브랜드에 이상적입니다.',
    // Package section
    landingEssentials: '랜딩 에센셜',
    upfront: '선불',
    requiredMaintenance: '필수 유지보수',
    whatYouGet: '포함 내용',
    packageItem1: '1페이지 반응형 웹사이트 (스크롤 기반 레이아웃)',
    packageItem2: '헤드라인과 주요 콜투액션이 있는 히어로 섹션',
    packageItem3: '소개 / 인트로 섹션',
    packageItem4: '서비스 또는 기능 블록',
    packageItem5: '후기 또는 소셜 프루프 섹션',
    packageItem6: '문의 양식 + 구글 지도 임베드',
    packageItem7: '모바일 최적화 디자인',
    packageItem8: '기본 SEO가 적용된 빠른 로딩 레이아웃',
    packageItem9: '호스팅, SSL, 백업 및 업데이트 (유지보수 포함)',
    maintenanceTitle: '유지보수 ($100/월 포함)',
    maintItem1: '월 1회 콘텐츠 수정 (텍스트 또는 이미지)',
    maintItem2: '보안 업데이트, 가동 시간 모니터링 및 백업',
    maintItem3: '버그 수정 및 기본 성능 점검',
    maintItem4: '48시간 응답 이메일 지원',
    maintenanceNote: '참고: 런칭 후 구조적 레이아웃이나 디자인 변경은 포함되지 않습니다. 더 큰 변경의 경우, 이 패키지의 가치를 전체 웹사이트 업그레이드에 적용할 수 있습니다.',
    sideKicker: '간단하고 빠른 것이 필요하신가요?',
    sideTitle: '랜딩 에센셜 패키지를 시도해보세요',
    sideText: '전환을 위해 설계된 전문적인 싱글 페이지 웹사이트. 고정 가격, 빠른 턴어라운드, 완전 관리형.',
    sideItem1: '고정 가격, 빠른 턴어라운드',
    sideItem2: '모바일 친화적 & SEO 준비 완료',
    sideItem3: '호스팅, 업데이트 및 지원 포함',
    sideItem4: '$100/월 유지보수 필수',
    sideFootnote: '서비스 전문가, 지역 상점, 런칭 또는 포트폴리오 스타일 페이지에 적합합니다.',
    getStarted: '시작하기 – 랜딩 에센셜',
    // Demos section
    viewOurWork: '작업물 보기',
    demosSubtitle: '완전히 기능하는 레스토랑 웹사이트 데모를 살펴보세요',
    viewDemo: '데모 보기',
    // Contact section
    getInTouch: '연락하기',
    contactUs: '문의하기',
    contactSubtitle: '시작할 준비가 되셨나요? 아래 양식을 작성해 주시면 48시간 이내에 연락드리겠습니다.',
    emailAddress: '이메일 주소',
    phoneNumber: '전화번호',
    message: '메시지',
    emailPlaceholder: 'your.email@example.com',
    phonePlaceholder: '010-1234-5678',
    messagePlaceholder: '프로젝트에 대해 알려주시거나 질문을 남겨주세요...',
    sendMessage: '메시지 보내기',
    sending: '전송 중...',
    successMessage: '✓ 메시지가 전송되었습니다! 48시간 이내에 연락드리겠습니다.',
    // Footer
    footerText: 'Kim Consultant • 랜딩 에센셜 패키지',
    // Demo data
    demo1Name: '사쿠라 스시 하우스',
    demo1Subtitle: '데모 1',
    demo1Description: '전통적인 일본 미학을 담은 따뜻한 벚꽃 테마 디자인. 소개, 메뉴, 갤러리, 위치 페이지가 있는 멀티 페이지 네비게이션.',
    demo1Style: '전통적 & 우아한',
    demo1Features: ['멀티 페이지 레이아웃', '벚꽃 테마', '포토 갤러리', '위치 지도'],
    demo2Name: 'ZEN 스시',
    demo2Subtitle: '데모 2',
    demo2Description: '깔끔한 라인과 평화로운 미학을 가진 미니멀리스트 젠 스타일 싱글 페이지 디자인. 단순함과 현대 일본 철학을 강조합니다.',
    demo2Style: '모던 & 젠',
    demo2Features: ['싱글 페이지 디자인', '미니멀리스트 스타일', '철학 섹션', '고객 리뷰'],
    demo3Name: 'KOHARU 일식당',
    demo3Subtitle: '데모 3 - 리얼리스틱',
    demo3Description: '실제 레스토랑 데이터를 기반으로 한 완전히 현실적인 웹사이트. 가격이 포함된 전체 메뉴, 실제 연락처 정보, 우버이츠 통합 및 인스타그램.',
    demo3Style: '프로페셔널 & 정통',
    demo3Features: ['전체 메뉴', '실제 연락처', '온라인 주문', '인스타그램 QR'],
  }
}

// Configuration for demo URLs
const isProduction = import.meta.env.PROD

const getDemoUrl = (demoId) => {
  if (isProduction) {
    // In production, demos are served from subfolders by server.js
    const demoUrls = {
      1: '/demo1/',
      2: '/demo2/', 
      3: '/demo3/',
    }
    return demoUrls[demoId] || '/'
  } else {
    // In development, open each demo on its own dev server port
    // You need to run each demo separately: cd "Demo 1..." && npm run dev
    const devPorts = {
      1: 5174,
      2: 5175, 
      3: 5176,
    }
    return `http://localhost:${devPorts[demoId]}/`
  }
}

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null })
  const [isScrolled, setIsScrolled] = useState(false)
  const [lang, setLang] = useState('en')

  const t = translations[lang]

  const demos = [
    {
      id: 1,
      name: t.demo1Name,
      subtitle: t.demo1Subtitle,
      description: t.demo1Description,
      color: '#c9a961',
      accent: '#b8944d',
      features: t.demo1Features,
      style: t.demo1Style
    },
    {
      id: 2,
      name: t.demo2Name,
      subtitle: t.demo2Subtitle,
      description: t.demo2Description,
      color: '#c9a961',
      accent: '#b8944d',
      features: t.demo2Features,
      style: t.demo2Style
    },
    {
      id: 3,
      name: t.demo3Name,
      subtitle: t.demo3Subtitle,
      description: t.demo3Description,
      color: '#c9a961',
      accent: '#b8944d',
      features: t.demo3Features,
      style: t.demo3Style
    }
  ]

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
            <a href="#package" onClick={(e) => { e.preventDefault(); scrollToSection('package') }}>{t.package}</a>
            <a href="#demos" onClick={(e) => { e.preventDefault(); scrollToSection('demos') }}>{t.demos}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>{t.contact}</a>
          </div>
          <button 
            className="lang-toggle" 
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
          >
            {lang === 'en' ? '한국어' : 'EN'}
          </button>
        </div>
      </nav>

      <main className="main">
        <section className="intro">
          <h1 className="title">
            <span className="title-line">{t.heroTitle1}</span>
            <span className="title-line accent">{t.heroTitle2}</span>
          </h1>
          <p className="subtitle">
            {t.heroSubtitle}
          </p>
        </section>

        <section id="package" className="landing-section">
          <div className="landing-grid">
            <div className="landing-main-card">
              <div className="landing-price-row">
                <div>
                  <p className="landing-label">{t.landingEssentials}</p>
                  <p className="landing-price">
                    $1,000 <span className="price-note">{t.upfront}</span>
                  </p>
                </div>
                <div className="landing-maintenance">
                  <span className="maint-amount">$100/mo</span>
                  <span className="maint-note">{t.requiredMaintenance}</span>
                </div>
              </div>

              <div className="landing-columns">
                <div className="landing-column">
                  <h3>{t.whatYouGet}</h3>
                  <ul>
                    <li>{t.packageItem1}</li>
                    <li>{t.packageItem2}</li>
                    <li>{t.packageItem3}</li>
                    <li>{t.packageItem4}</li>
                    <li>{t.packageItem5}</li>
                    <li>{t.packageItem6}</li>
                    <li>{t.packageItem7}</li>
                    <li>{t.packageItem8}</li>
                    <li>{t.packageItem9}</li>
                  </ul>
                </div>

                <div className="landing-column">
                  <h3>{t.maintenanceTitle}</h3>
                  <ul>
                    <li>{t.maintItem1}</li>
                    <li>{t.maintItem2}</li>
                    <li>{t.maintItem3}</li>
                    <li>{t.maintItem4}</li>
                  </ul>
                  <p className="landing-note">
                    {t.maintenanceNote}
                  </p>
                </div>
              </div>
            </div>

            <aside className="landing-side-card">
              <p className="side-kicker">{t.sideKicker}</p>
              <h3 className="side-title">{t.sideTitle}</h3>
              <p className="side-text">
                {t.sideText}
              </p>
              <ul className="side-list">
                <li>{t.sideItem1}</li>
                <li>{t.sideItem2}</li>
                <li>{t.sideItem3}</li>
                <li>
                  <strong>{t.sideItem4}</strong>
                </li>
              </ul>
              <p className="side-footnote">
                {t.sideFootnote}
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
                {t.getStarted}
              </button>
            </aside>
          </div>
        </section>

        <section id="demos" className="demos">
          <div className="demos-header">
            <h2 className="demos-title">{t.viewOurWork}</h2>
            <p className="demos-subtitle">{t.demosSubtitle}</p>
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
                    <div className="demo-cta-btn">
                      {t.viewDemo}
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
              <span className="section-label">{t.getInTouch}</span>
              <h2 className="contact-title">{t.contactUs}</h2>
              <p className="contact-subtitle">
                {t.contactSubtitle}
              </p>
            </div>

            <form className="contact-form" onSubmit={async (e) => {
              e.preventDefault()
              setFormStatus({ submitting: true, success: false, error: null })
              
              const formData = new FormData(e.target)

              try {
                const response = await fetch("https://formspree.io/f/xdanoaze", {
                  method: "POST",
                  body: formData,
                  headers: { 'Accept': 'application/json' }
                })

                if (response.ok) {
                  setFormStatus({ submitting: false, success: true, error: null })
                  e.target.reset()
                  
                  setTimeout(() => {
                    setFormStatus({ submitting: false, success: false, error: null })
                  }, 5000)
                } else {
                  const data = await response.json()
                  throw new Error(data.error || 'Failed to send')
                }
              } catch (error) {
                setFormStatus({ submitting: false, success: false, error: error.message })
              }
            }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t.emailAddress}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t.phoneNumber}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={t.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              {formStatus.error && (
                <div className="form-message form-error">
                  {formStatus.error}
                </div>
              )}

              {formStatus.success && (
                <div className="form-message form-success">
                  {t.successMessage}
                </div>
              )}

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? t.sending : t.sendMessage}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footerText}</p>
      </footer>
    </div>
  )
}

export default App
