import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import Home Component
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/Amit-Halbreich-Website" element={<Home />} /> {/* Default Home Route */}
            <Route path="/Amit-Halbreich-Website/projects" element={<Projects />} />
            <Route path="/Amit-Halbreich-Website/about" element={<About />} />
            <Route path="/Amit-Halbreich-Website/resume" element={<Resume />} />
            <Route path="/Amit-Halbreich-Website/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
