import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialLink = ({ icon, href, label }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-indigo-600 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300"
      aria-label={label}
      title={label}
    >
      {getIcon(icon)}
    </a>
  );
};

export default SocialLink;