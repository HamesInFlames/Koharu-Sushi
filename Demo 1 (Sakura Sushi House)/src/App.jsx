import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Location from './pages/Location'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <BrowserRouter>
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
