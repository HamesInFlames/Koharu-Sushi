import './Gallery.css'

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    alt: "Sushi platter",
    span: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80",
    alt: "Fresh sushi rolls",
    span: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
    alt: "Salmon nigiri",
    span: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80",
    alt: "Japanese cuisine",
    span: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
    alt: "Sushi bar",
    span: "normal"
  },
  {
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    alt: "Chef special",
    span: "large"
  }
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            A Feast for the <span className="accent">Eyes</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item ${image.span === 'large' ? 'span-2' : ''}`}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-icon">+</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Follow us on Instagram for more delicious updates</p>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <span className="instagram-icon">📸</span>
            @sakurasushihouse
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery

