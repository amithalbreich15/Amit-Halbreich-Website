import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-2 fixed bottom-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative flex justify-center items-center">
        {/* Social Links - Left Side */}
        <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm absolute left-3 sm:left-4">
          <a
            href="https://github.com/amithalbreich15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium hidden sm:inline">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/amit-halbreich-780a66173"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium hidden sm:inline">Linkedin</span>
          </a>
        </div>

        {/* Copyright - Center */}
        <div className="text-gray-900 font-medium text-xs sm:text-sm text-center py-1">
          &copy; {new Date().getFullYear()} Amit Halbreich. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}