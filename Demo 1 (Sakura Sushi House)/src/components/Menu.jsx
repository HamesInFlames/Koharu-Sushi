import { useState } from 'react'
import './Menu.css'

const menuData = {
  signature: [
    {
      name: "Dragon Roll",
      description: "Eel, cucumber, avocado topped with fresh avocado and unagi sauce",
      price: "$18.95",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80",
      tag: "Chef's Choice"
    },
    {
      name: "Rainbow Roll",
      description: "California roll topped with assorted sashimi and tobiko",
      price: "$19.95",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
      tag: "Popular"
    },
    {
      name: "Sakura Special",
      description: "Tuna, salmon, yellowtail with spicy mayo and truffle oil",
      price: "$24.95",
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80",
      tag: "House Special"
    },
    {
      name: "Spider Roll",
      description: "Soft shell crab, cucumber, avocado with spicy mayo",
      price: "$17.95",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80",
      tag: null
    }
  ],
  nigiri: [
    {
      name: "Salmon Nigiri",
      description: "Premium Atlantic salmon over pressed rice (2 pcs)",
      price: "$8.95",
      image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
      tag: null
    },
    {
      name: "Tuna Nigiri",
      description: "Bluefin tuna over seasoned sushi rice (2 pcs)",
      price: "$10.95",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80",
      tag: "Premium"
    },
    {
      name: "Unagi Nigiri",
      description: "Grilled freshwater eel with sweet sauce (2 pcs)",
      price: "$9.95",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80",
      tag: null
    },
    {
      name: "Ebi Nigiri",
      description: "Cooked shrimp over sushi rice (2 pcs)",
      price: "$7.95",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80",
      tag: null
    }
  ],
  sashimi: [
    {
      name: "Salmon Sashimi",
      description: "6 pieces of fresh Atlantic salmon",
      price: "$16.95",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
      tag: null
    },
    {
      name: "Tuna Sashimi",
      description: "6 pieces of premium bluefin tuna",
      price: "$19.95",
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80",
      tag: "Premium"
    },
    {
      name: "Chef's Sashimi Platter",
      description: "15 pieces of assorted seasonal fish",
      price: "$38.95",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80",
      tag: "Best Value"
    },
    {
      name: "Yellowtail Sashimi",
      description: "6 pieces of fresh hamachi",
      price: "$17.95",
      image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
      tag: null
    }
  ]
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature')

  const categories = [
    { id: 'signature', name: 'Signature Rolls' },
    { id: 'nigiri', name: 'Nigiri' },
    { id: 'sashimi', name: 'Sashimi' }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">
            Crafted with <span className="accent">Passion</span>
          </h2>
          <p className="menu-subtitle">
            Each dish is a masterpiece, prepared with the freshest ingredients and traditional techniques
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
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                {item.tag && <span className="menu-item-tag">{item.tag}</span>}
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
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
            Order on UberEats
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu

