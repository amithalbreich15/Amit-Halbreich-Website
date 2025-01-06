import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-2 fixed bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/amithalbreich15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/amit-halbreich-780a66173"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="font-medium">Linkedin</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-900 font-medium text-sm text-center flex-grow">
          &copy; {new Date().getFullYear()} Amit Halbreich. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
