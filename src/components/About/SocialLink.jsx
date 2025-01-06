import React from 'react';

export default function SocialLink({ icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}