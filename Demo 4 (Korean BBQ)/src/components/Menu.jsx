import { useState } from 'react'
import './Menu.css'

const menuData = {
  meats: [
    { name: "Chadol Baegi", description: "Thinly sliced beef brisket", price: "$26.99", tag: "Popular" },
    { name: "Samgyeopsal", description: "Thick-cut pork belly", price: "$22.99", tag: null },
    { name: "Bulgogi", description: "Marinated ribeye beef", price: "$28.99", tag: "Chef's Choice" },
    { name: "LA Galbi", description: "Marinated beef short ribs", price: "$34.99", tag: "Premium" },
    { name: "Dak Galbi", description: "Spicy marinated chicken", price: "$19.99", tag: null },
    { name: "Hanwoo Set", description: "Premium Korean beef platter", price: "$89.99", tag: "Special" },
  ],
  stews: [
    { name: "Kimchi Jjigae", description: "Spicy kimchi stew with pork", price: "$16.99", tag: "Popular" },
    { name: "Doenjang Jjigae", description: "Fermented soybean stew", price: "$15.99", tag: null },
    { name: "Sundubu Jjigae", description: "Soft tofu stew", price: "$16.99", tag: null },
    { name: "Budae Jjigae", description: "Army base stew (for 2)", price: "$32.99", tag: null },
  ],
  sides: [
    { name: "Banchan Set", description: "10+ varieties of side dishes", price: "Complimentary", tag: "Free" },
    { name: "Japchae", description: "Glass noodles with vegetables", price: "$14.99", tag: null },
    { name: "Seafood Pajeon", description: "Korean seafood pancake", price: "$18.99", tag: null },
    { name: "Steamed Egg", description: "Fluffy Korean steamed egg", price: "$8.99", tag: null },
  ]
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('meats')

  const categories = [
    { id: 'meats', name: 'BBQ Meats' },
    { id: 'stews', name: 'Stews & Soups' },
    { id: 'sides', name: 'Sides & More' }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">
            Premium <span className="accent">Korean BBQ</span>
          </h2>
          <p className="menu-subtitle">
            All BBQ orders include unlimited banchan and fresh lettuce wraps
          </p>
        </div>

        <div className="menu-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  {item.tag && <span className="menu-item-tag">{item.tag}</span>}
                </div>
                <p>{item.description}</p>
                <span className="menu-item-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <a 
            href="https://www.ubereats.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Order for Delivery
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
