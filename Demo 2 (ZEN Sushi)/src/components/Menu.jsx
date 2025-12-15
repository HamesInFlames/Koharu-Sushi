import './Menu.css'

const menuItems = [
  {
    category: "Signature Rolls",
    items: [
      { name: "Zen Dragon Roll", description: "Eel, avocado, cucumber, unagi sauce, gold flakes", price: "$26" },
      { name: "Black Pearl", description: "Spicy tuna, black rice, truffle oil, tobiko", price: "$28" },
      { name: "Sakura Blossom", description: "Salmon, cream cheese, pink soy paper, cherry blossom", price: "$24" },
      { name: "Emperor's Choice", description: "Wagyu beef, foie gras, gold leaf, ponzu", price: "$45" }
    ]
  },
  {
    category: "Omakase Selection",
    items: [
      { name: "Chef's Nigiri (7pc)", description: "Daily selection of premium fish", price: "$65" },
      { name: "Omakase Experience", description: "12-course tasting menu", price: "$150" },
      { name: "Grand Omakase", description: "18-course ultimate experience", price: "$250" }
    ]
  },
  {
    category: "Sashimi",
    items: [
      { name: "Bluefin Tuna", description: "Premium otoro, chutoro, akami selection", price: "$48" },
      { name: "Scottish Salmon", description: "Wild-caught, 6 pieces", price: "$24" },
      { name: "Yellowtail Hamachi", description: "Japanese import, 6 pieces", price: "$28" }
    ]
  }
]

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-label">The Menu</span>
          <h2 className="menu-title">Curated Selections</h2>
          <p className="menu-subtitle">
            A carefully crafted menu celebrating the finest ingredients and 
            time-honored techniques
          </p>
        </div>

        <div className="menu-content">
          <div className="menu-image">
            <img 
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80" 
              alt="Sushi platter"
            />
          </div>

          <div className="menu-categories">
            {menuItems.map((category, idx) => (
              <div key={idx} className="menu-category">
                <h3>{category.category}</h3>
                <div className="menu-items">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="menu-item">
                      <div className="item-header">
                        <span className="item-name">{item.name}</span>
                        <span className="item-line"></span>
                        <span className="item-price">{item.price}</span>
                      </div>
                      <p className="item-description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-cta">
          <a href="#" className="btn btn-outline">View Full Menu</a>
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

