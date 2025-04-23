import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Home from './pages/Home.tsx'; // Import Home Component

function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/Amit-Halbreich-Website/" element={<Home />} /> {/* Default Home route */}
            <Route path="/Amit-Halbreich-Website/projects/" element={<Projects />} />
            <Route path="/Amit-Halbreich-Website/about/" element={<About />} />
            <Route path="/Amit-Halbreich-Website/resume/" element={<Resume />} />
            <Route path="/Amit-Halbreich-Website/contact/" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
