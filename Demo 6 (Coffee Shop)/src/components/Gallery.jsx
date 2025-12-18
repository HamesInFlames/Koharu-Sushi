import './Gallery.css'

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", alt: "Coffee shop interior", span: "large" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", alt: "Latte art", span: "normal" },
  { src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80", alt: "Pour over coffee", span: "normal" },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80", alt: "Cafe seating", span: "normal" },
  { src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80", alt: "Fresh pastries", span: "normal" },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80", alt: "Coffee beans", span: "large" },
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            Moments at <span className="accent">Ember & Bloom</span>
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
                <span className="gallery-icon">☕</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Share your moments with us</p>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <span>📸</span> @emberandbloom
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
