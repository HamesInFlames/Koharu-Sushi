import './Gallery.css'

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80", alt: "Korean BBQ grilling", span: "large" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", alt: "Grilled meats", span: "normal" },
  { src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80", alt: "Korean dining", span: "normal" },
  { src: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600&q=80", alt: "BBQ spread", span: "normal" },
  { src: "https://images.unsplash.com/photo-1567533708067-888ca72660e7?w=600&q=80", alt: "Banchan sides", span: "normal" },
  { src: "https://images.unsplash.com/photo-1583224994076-7ff1004f1780?w=800&q=80", alt: "Cooking meats", span: "large" },
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            Sizzling <span className="accent">Moments</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔥</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Follow us on Instagram for daily specials</p>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <span>📸</span> @seoulfire_bbq
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery


