import './Gallery.css'

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    alt: "Sushi arrangement"
  },
  {
    src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80",
    alt: "Chef's special roll"
  },
  {
    src: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&q=80",
    alt: "Omakase platter"
  },
  {
    src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=80",
    alt: "Salmon nigiri"
  },
  {
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    alt: "Rainbow roll"
  },
  {
    src: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=800&q=80",
    alt: "Sashimi selection"
  }
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <div className="container">
          <span className="section-label">Gallery</span>
          <h2 className="gallery-title">Visual Journey</h2>
        </div>
      </div>

      <div className="gallery-scroll">
        <div className="gallery-track">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {galleryImages.map((image, index) => (
            <div key={`dup-${index}`} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-footer">
        <div className="container">
          <p>Follow our journey on social media</p>
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span className="divider">•</span>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <span className="divider">•</span>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

