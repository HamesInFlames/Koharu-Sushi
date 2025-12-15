import './Gallery.css'

// Photos representing Koharu's Instagram @koharu.schomberg
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80", alt: "Chef preparing sushi" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", alt: "Dragon roll special" },
  { src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80", alt: "Salmon nigiri platter" },
  { src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80", alt: "Sashimi boat" },
  { src: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80", alt: "Rainbow roll" },
  { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&q=80", alt: "Teriyaki bowl" },
  { src: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=600&q=80", alt: "Fresh maki rolls" },
  { src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80", alt: "Special roll closeup" }
]

// Reviews from Google Maps - Add your real reviews here!
const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best sushi in Schomberg! The fish is always fresh and the service is excellent. The Schomberg Roll is a must-try!",
    date: "2 weeks ago"
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Amazing food and great atmosphere. We order from here regularly and it never disappoints. Highly recommend the salmon sashimi.",
    date: "1 month ago"
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Our go-to spot for Japanese food! The lunch specials are an incredible value. Fast delivery too!",
    date: "3 weeks ago"
  },
  {
    name: "David K.",
    rating: 5,
    text: "Authentic Japanese cuisine right here in Schomberg. The teriyaki is perfectly seasoned and the portions are generous.",
    date: "1 month ago"
  }
]

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      {/* Gallery Section */}
      <div className="gallery-header">
        <span className="section-label">Gallery</span>
        <h2 className="gallery-title">
          Fresh From <span className="gold-text">Our Kitchen</span>
        </h2>
        <p className="gallery-subtitle">Follow us on Instagram for daily updates</p>
      </div>

      <div className="gallery-marquee">
        <div className="marquee-track">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div key={idx} className="gallery-card">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="card-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-cta">
        <a 
          href="https://www.instagram.com/koharu.schomberg/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          @koharu.schomberg
        </a>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <div className="reviews-rating-summary">
              <span className="big-rating">5.0</span>
              <div className="rating-details">
                <StarRating rating={5} />
                <span className="review-count">Based on Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="reviews-cta">
            <a 
              href="https://www.google.com/maps/place/KOHARU+Japanese+Restaurant/@44.0061368,-79.6788803,17z/data=!4m8!3m7!1s0x882adf2292ed9539:0x7d70b4a55e7e7f9!8m2!3d44.0061368!4d-79.6788803!9m1!1b1!16s%2Fg%2F11h6r3gxry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
