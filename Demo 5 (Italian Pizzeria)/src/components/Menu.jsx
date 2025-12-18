import { useState } from 'react'
import './Menu.css'

const menuData = {
  pizzas: [
    { name: "Margherita", description: "San Marzano tomatoes, fresh mozzarella, basil, olive oil", price: "$16", tag: "Classic" },
    { name: "Pepperoni", description: "Tomato sauce, mozzarella, spicy pepperoni", price: "$18", tag: "Popular" },
    { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, parmesan", price: "$20", tag: null },
    { name: "Diavola", description: "Spicy salami, calabrian chilies, tomato, mozzarella", price: "$19", tag: "Spicy" },
    { name: "Prosciutto e Rucola", description: "Prosciutto di Parma, arugula, shaved parmesan", price: "$22", tag: "Chef's Choice" },
    { name: "Truffle Mushroom", description: "Wild mushrooms, truffle oil, fontina, thyme", price: "$24", tag: "Premium" },
  ],
  pasta: [
    { name: "Spaghetti Carbonara", description: "Guanciale, egg yolk, pecorino, black pepper", price: "$18", tag: "Classic" },
    { name: "Penne Arrabbiata", description: "Spicy tomato sauce, garlic, fresh parsley", price: "$15", tag: null },
    { name: "Fettuccine Alfredo", description: "Creamy parmesan sauce, butter, fresh pasta", price: "$17", tag: "Popular" },
    { name: "Lasagna Bolognese", description: "Layers of pasta, meat ragu, béchamel", price: "$19", tag: null },
  ],
  appetizers: [
    { name: "Bruschetta", description: "Toasted bread, tomatoes, garlic, basil, olive oil", price: "$10", tag: null },
    { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, balsamic", price: "$12", tag: null },
    { name: "Garlic Knots", description: "Fresh baked, garlic butter, parmesan (6 pcs)", price: "$8", tag: "Popular" },
    { name: "Calamari Fritti", description: "Crispy fried calamari with marinara", price: "$14", tag: null },
  ]
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas')

  const categories = [
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'appetizers', name: 'Appetizers' }
  ]

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">
            Authentic <span className="accent">Italian</span> Flavors
          </h2>
          <p className="menu-subtitle">
            Each dish is crafted with imported Italian ingredients and time-honored recipes
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

