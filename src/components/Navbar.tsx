import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Code2,
  User,
  Mail,
  FileText,
  FolderKanban,
  Home,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Profile */}
          <Link to="/Amit-Halbreich-Website/projects" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <img
              src={`${import.meta.env.BASE_URL}images/Amit_Profile_Picture.jpg`}
              alt="Amit Halbreich"
              className="h-10 w-10 rounded-full border border-gray-300 shadow-sm"
            />
            <span className="font-bold text-xl">Amit Halbreich</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <NavLink to="/Amit-Halbreich-Website" active={isActive("/Amit-Halbreich-Website")}>
              <Home className="h-5 w-5" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/Amit-Halbreich-Website/projects" active={isActive("/Amit-Halbreich-Website/projects")}>
              <FolderKanban className="h-5 w-5" />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/about" active={isActive("/about")}>
              <User className="h-5 w-5" />
              <span>About</span>
            </NavLink>
            <NavLink to="/resume" active={isActive("/resume")}>
              <FileText className="h-5 w-5" />
              <span>Resume</span>
            </NavLink>
            <NavLink to="/contact" active={isActive("/contact")}>
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3">
          <NavLink to="/" active={isActive("/")} onClick={() => setIsOpen(false)}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/projects" active={isActive("/projects")} onClick={() => setIsOpen(false)}>
            <FolderKanban className="h-5 w-5" />
            <span>Projects</span>
          </NavLink>
          <NavLink to="/about" active={isActive("/about")} onClick={() => setIsOpen(false)}>
            <User className="h-5 w-5" />
            <span>About</span>
          </NavLink>
          <NavLink to="/resume" active={isActive("/resume")} onClick={() => setIsOpen(false)}>
            <FileText className="h-5 w-5" />
            <span>Resume</span>
          </NavLink>
          <NavLink to="/contact" active={isActive("/contact")} onClick={() => setIsOpen(false)}>
            <Mail className="h-5 w-5" />
            <span>Contact</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

// Define Props for NavLink Component
interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${active ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100"}
      `}
    >
      {children}
    </Link>
  );
};
