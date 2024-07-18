import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';

import { FaHome, FaInfoCircle, FaBlog, FaEnvelope } from 'react-icons/fa';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
            <li><Link to="/about"><FaInfoCircle className="icon" /> About</Link></li>
            <li><Link to="/blog"><FaBlog className="icon" /> Blog</Link></li>
            <li><Link to="/contact"><FaEnvelope className="icon" /> Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;