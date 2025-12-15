import { useState } from 'react'
import './Menu.css'

const menuData = {
  appetizers: {
    title: "Appetizers",
    items: [
      { name: "Edamame", price: "7", desc: "Boiled soybean lightly salted" },
      { name: "Gyoza (5pcs)", price: "8", desc: "Deep fried dumplings - Beef or Vegetable" },
      { name: "Agedashi Tofu", price: "8", desc: "Deep fried tofu with dipping sauce" },
      { name: "Takoyaki (5pcs)", price: "11", desc: "Fried octopus balls with mayo & bonito" },
      { name: "Chicken Karaage", price: "11", desc: "Japanese fried chicken" },
      { name: "Shrimp Tempura (5pcs)", price: "13", desc: "Deep fried shrimp" },
      { name: "BBQ Kalbi Appetizer", price: "19", desc: "Grilled beef short ribs" },
      { name: "Sashimi Appetizer", price: "16", desc: "7pcs of assorted raw fish" },
      { name: "Vegetable Tempura", price: "10", desc: "Deep fried 7pcs vegetables" },
      { name: "Assorted Tempura", price: "12", desc: "5pcs vegetables with 2pcs shrimp" },
    ]
  },
  sushi: {
    title: "Sushi & Sashimi",
    subtitle: "2pcs Sushi / 3pcs Sashimi",
    items: [
      { name: "Salmon (Sake)", price: "9" },
      { name: "Tuna (Maguro)", price: "10" },
      { name: "Yellowtail (Hamachi)", price: "11" },
      { name: "Grilled Eel (Unagi)", price: "11" },
      { name: "Shrimp (Ebi)", price: "7" },
      { name: "Squid (Ika)", price: "8" },
      { name: "Salmon Roe (Ikura)", price: "14" },
      { name: "Flying Fish Roe (Tobiko)", price: "9" },
      { name: "Albacore Tuna", price: "8" },
      { name: "White Tuna", price: "8" },
      { name: "Crabmeat (Kani)", price: "7" },
      { name: "Mackerel (Saba)", price: "11" },
    ]
  },
  maki: {
    title: "Maki Rolls",
    subtitle: "6 pieces each",
    items: [
      { name: "Cucumber Roll", price: "7" },
      { name: "Avocado Roll", price: "7" },
      { name: "Avocado & Cucumber Roll", price: "7" },
      { name: "Yam Tempura Roll", price: "7" },
      { name: "California Roll", price: "8/9", desc: "Avocado, cucumber, crab, tobiko" },
      { name: "Salmon Roll", price: "10" },
      { name: "Spicy Salmon Roll", price: "9" },
      { name: "Spicy Tuna Roll", price: "10" },
      { name: "Shrimp Tempura Roll", price: "8" },
      { name: "Unagi Roll", price: "11", desc: "BBQ eel, avocado, cucumber" },
      { name: "Salmon Skin Roll", price: "11" },
    ]
  },
  special: {
    title: "Special Rolls",
    subtitle: "Full 9pcs / Half 5pcs",
    items: [
      { name: "Dynamite Roll", price: "15/8", desc: "Salmon, shrimp, avocado, cucumber, tobiko" },
      { name: "Rainbow Roll", price: "15/8", desc: "Assorted fish on California roll" },
      { name: "Spider Roll", price: "16/9", desc: "Soft shell crab, lettuce, cucumber" },
      { name: "Lobster Roll", price: "21/11", desc: "Lobster, avocado, cucumber, tobiko" },
      { name: "Philadelphia Roll", price: "16/9", desc: "Salmon, cream cheese, avocado" },
      { name: "Alaska Roll", price: "15/8", desc: "Avocado, cucumber, scallops & salmon" },
      { name: "Kamikaze Roll", price: "15/8", desc: "Spicy tuna, tempura bits, lettuce" },
      { name: "Boston Roll", price: "16/9", desc: "Spicy salmon, crabmeat, tempura bits" },
      { name: "Orangeville Roll", price: "18/10", desc: "Spicy scallop & salmon on top" },
      { name: "Salmon Lover Roll", price: "18/10", desc: "Spicy salmon & salmon on top" },
      { name: "Schomberg Roll", price: "22/12", desc: "Deep fried with spicy salmon & cream cheese" },
    ]
  },
  mains: {
    title: "Main Dishes",
    items: [
      { name: "Chicken Teriyaki", price: "23", desc: "Grilled with teriyaki sauce & vegetables" },
      { name: "Salmon Teriyaki", price: "23", desc: "Grilled salmon with teriyaki sauce" },
      { name: "Beef Teriyaki", price: "25", desc: "Grilled beef with teriyaki sauce" },
      { name: "Tofu Teriyaki", price: "19", desc: "Grilled tofu with teriyaki sauce" },
      { name: "Bulgogi", price: "24", desc: "Korean style marinated beef" },
      { name: "Chicken Katsu", price: "24", desc: "Deep fried chicken cutlet" },
      { name: "BBQ Kalbi", price: "40", desc: "Korean beef short ribs on hot plate" },
      { name: "Tempura Moriwase", price: "26", desc: "2pcs lobster tails, 2pcs shrimp, assorted seafood" },
      { name: "Premium Sashimi", price: "52", desc: "30pcs assorted raw fish" },
    ]
  },
  noodles: {
    title: "Noodles",
    subtitle: "Udon or Yaki Udon",
    items: [
      { name: "Vegetable Udon", price: "13" },
      { name: "Chicken Udon", price: "17" },
      { name: "Beef Udon", price: "19" },
      { name: "Tofu Udon", price: "14" },
      { name: "Tempura Udon", price: "20" },
      { name: "Seafood Udon", price: "20" },
      { name: "Bulgogi Udon", price: "19" },
    ]
  },
  donburi: {
    title: "Donburi",
    subtitle: "Rice Bowls - Served with Miso",
    items: [
      { name: "Chirashi", price: "28", desc: "Assorted sashimi on sushi rice" },
      { name: "Unagi Donburi", price: "27", desc: "Grilled eel on rice" },
      { name: "Spicy Sashimi Donburi", price: "25", desc: "Raw fish & vegetables with spicy sauce" },
      { name: "Salmon Poke", price: "19", desc: "Salmon, avocado, tobiko, wakame, corn, mayo" },
      { name: "Tuna Poke", price: "20", desc: "Tuna, avocado, tobiko, wakame, sweet soy sauce" },
    ]
  },
  lunch: {
    title: "Lunch Sets",
    subtitle: "Until 3PM - Includes gyoza, spring roll, miso & salad",
    items: [
      { name: "Teriyaki Lunch", price: "17-21", desc: "Chicken, Beef, Salmon, Tofu, Bulgogi or Katsu" },
      { name: "Sushi Lunch", price: "20", desc: "8pcs assorted sushi" },
      { name: "Sashimi Lunch", price: "20", desc: "10pcs assorted sashimi with rice" },
      { name: "Tempura Lunch", price: "18", desc: "5pcs tempura, 6pcs California roll" },
      { name: "Maki Set", price: "17", desc: "6pcs California roll and salmon roll" },
      { name: "Spicy Maki Set", price: "18", desc: "6pcs spicy salmon and spicy tuna" },
      { name: "Vege Maki Set", price: "14", desc: "Avocado cucumber & yam tempura roll" },
    ]
  },
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = Object.keys(menuData)

  // Get items to display
  const getDisplayItems = () => {
    if (activeCategory === 'all') {
      return categories.map(cat => ({
        category: menuData[cat].title,
        subtitle: menuData[cat].subtitle,
        items: menuData[cat].items
      }))
    }
    return [{
      category: menuData[activeCategory].title,
      subtitle: menuData[activeCategory].subtitle,
      items: menuData[activeCategory].items
    }]
  }

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-label">Our Menu</span>
          <h2 className="menu-title">
            Explore Our <span className="gold-text">Dishes</span>
          </h2>
        </div>

        <div className="menu-tabs">
          <button
            className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Menu
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {menuData[cat].title}
            </button>
          ))}
        </div>

        <div className="menu-panels">
          {getDisplayItems().map((section, sectionIdx) => (
            <div key={sectionIdx} className="menu-panel">
              <div className="panel-header">
                <h3>{section.category}</h3>
                {section.subtitle && <p>{section.subtitle}</p>}
              </div>
              <div className="menu-grid">
                {section.items.map((item, idx) => (
                  <div key={idx} className="menu-card">
                    <div className="card-content">
                      <h4>{item.name}</h4>
                      {item.desc && <p>{item.desc}</p>}
                    </div>
                    <span className="card-price">${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-footer">
          <p className="menu-note">* Brown rice available for extra charge</p>
          <a 
            href="https://www.ubereats.com/ca/store/koharu-japanese-restaurant-50-doctor-kay-drive-schomberg-on-l0g-1t0-canada/Ys_q91RfV_6WJyk9Cy5V9A?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
