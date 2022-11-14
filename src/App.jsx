import Homepage from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Portofolio from './Pages/Portofolio'
import Blog from './Pages/blog'
import React from 'react'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
