import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ children, to, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${active 
          ? 'bg-indigo-100 text-indigo-700' 
          : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
      {children}
    </Link>
  );
}