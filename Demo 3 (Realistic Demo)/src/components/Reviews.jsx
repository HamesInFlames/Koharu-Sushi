import './Reviews.css'

const reviews = [
  {
    text: "An extraordinary dining experience. The omakase was nothing short of perfection—each piece more exquisite than the last.",
    author: "Toronto Life Magazine",
    rating: 5
  },
  {
    text: "Koharu brings Tokyo's finest traditions to Toronto. The chef's knife skills are truly mesmerizing.",
    author: "BlogTO",
    rating: 5
  },
  {
    text: "The attention to detail is unparalleled. From the moment you enter, you're transported to Japan.",
    author: "NOW Magazine",
    rating: 5
  }
]

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="section-label">Press & Reviews</span>
          <h2 className="reviews-title">What They're Saying</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <blockquote className="review-text">
                "{review.text}"
              </blockquote>
              <cite className="review-author">— {review.author}</cite>
            </div>
          ))}
        </div>

        <div className="reviews-logos">
          <span className="logo-text">As featured in</span>
          <div className="logos">
            <span>Toronto Life</span>
            <span>BlogTO</span>
            <span>NOW Magazine</span>
            <span>Toronto Star</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews

