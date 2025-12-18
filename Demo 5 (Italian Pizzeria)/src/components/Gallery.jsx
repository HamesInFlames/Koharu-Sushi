import './Gallery.css'

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", alt: "Pepperoni pizza", span: "large" },
  { src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80", alt: "Chef making pizza", span: "normal" },
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", alt: "Wood-fired oven", span: "normal" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", alt: "Fresh pizza", span: "normal" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", alt: "Restaurant interior", span: "normal" },
  { src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&q=80", alt: "Pasta dish", span: "large" },
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            Fresh From Our <span className="accent">Kitchen</span>
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
                <span className="gallery-icon">🍕</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Follow us for daily specials and behind-the-scenes</p>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <span>📸</span> @bellanapolipizza
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery

