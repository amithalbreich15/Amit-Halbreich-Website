import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, User, Mail, FileText, FolderKanban, Home } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
             {/* Profile Picture */}
             <img
              src="/images/Amit Profile Picture.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full border border-gray-300 shadow-sm"
            />
            <span className="font-bold text-xl">Amit Halbreich</span>
          </Link>
          
          <div className="flex space-x-4 items-center">
            <NavLink to="/Amit-Halbreich-Website" active={isActive('/Amit-Halbreich-Website')}>
              <Home className="h-5 w-5" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/Amit-Halbreich-Website/projects" active={isActive('/Amit-Halbreich-Website/projects')}>
              <FolderKanban className="h-5 w-5" />
              <span>Projects</span>
            </NavLink>
            
            <NavLink to="/about" active={isActive('/about')}>
              <User className="h-5 w-5" />
              <span>About</span>
            </NavLink>
            
            <NavLink to="/resume" active={isActive('/resume')}>
              <FileText className="h-5 w-5" />
              <span>Resume</span>
            </NavLink>
            
            <NavLink to="/contact" active={isActive('/contact')}>
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
