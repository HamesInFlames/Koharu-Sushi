import { useState } from 'react'
import './Menu.css'

const menuData = {
  coffee: [
    { name: "Espresso", description: "Rich, bold, single or double shot", price: "$3.50", tag: "Classic" },
    { name: "Americano", description: "Espresso with hot water, smooth finish", price: "$4.00", tag: null },
    { name: "Cappuccino", description: "Espresso, steamed milk, velvety foam", price: "$5.00", tag: "Popular" },
    { name: "Flat White", description: "Double shot, microfoam, Australian style", price: "$5.50", tag: null },
    { name: "Lavender Oat Latte", description: "House-made lavender syrup, oat milk", price: "$6.50", tag: "Seasonal" },
    { name: "Cold Brew", description: "24-hour steeped, smooth and refreshing", price: "$5.00", tag: null },
  ],
  specialty: [
    { name: "Honey Cardamom Latte", description: "Local honey, cardamom, choice of milk", price: "$6.00", tag: "House Favorite" },
    { name: "Matcha Latte", description: "Ceremonial grade matcha, choice of milk", price: "$6.00", tag: null },
    { name: "Golden Turmeric Latte", description: "Turmeric, ginger, cinnamon, oat milk", price: "$5.50", tag: "Wellness" },
    { name: "Mocha", description: "Belgian chocolate, espresso, steamed milk", price: "$5.50", tag: null },
  ],
  pastries: [
    { name: "Croissant", description: "Butter croissant, flaky and golden", price: "$4.50", tag: "Fresh Daily" },
    { name: "Almond Croissant", description: "Filled with almond cream, toasted", price: "$5.50", tag: "Popular" },
    { name: "Banana Bread", description: "House-made, walnuts, perfectly moist", price: "$4.00", tag: "Vegan Option" },
    { name: "Avocado Toast", description: "Sourdough, smashed avo, everything spice", price: "$9.00", tag: null },
    { name: "Açaí Bowl", description: "Organic açaí, granola, fresh berries", price: "$12.00", tag: null },
  ]
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'specialty', name: 'Specialty', icon: '✨' },
    { id: 'pastries', name: 'Food', icon: '🥐' }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">
            Crafted with <span className="accent">Care</span>
          </h2>
          <p className="menu-subtitle">
            Every drink is made-to-order with love and the finest ingredients
          </p>
        </div>

        <div className="menu-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
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
            Order for Pickup
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu

