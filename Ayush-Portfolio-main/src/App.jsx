import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'  

export default function App() {
  const location = useLocation(); // Needed for AnimatePresence to track route changes

  return (
    <div className="app">
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* AnimatePresence handles the unmounting animation of pages */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/skills" element={<SkillNetwork />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Ayush Gupta — Built with React
      </footer>
    </div>
  )
}