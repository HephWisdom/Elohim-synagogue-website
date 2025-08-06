import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SchoolOverview from './pages/SchoolOverview'
import Programs from './pages/Programs'
import Apply from './pages/Apply'
import Events from './pages/Events'
import Sermons from './pages/Sermons'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/school" element={<SchoolOverview />} />
            <Route path="/school/programs" element={<Programs />} />
            <Route path="/school/apply" element={<Apply />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App