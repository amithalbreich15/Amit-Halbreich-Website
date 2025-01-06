import React from 'react';
import ProjectDetails from './ProjectDetails';
import ProjectLinks from './ProjectLinks';

export default function ProjectCard({ 
  title, 
  date,
  description, 
  image, 
  technologies, 
  role,
  impact,
  githubUrl, 
  liveUrl,
  documentationUrl
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-2xl hover:scale-105 transform duration-300">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300 mb-2">
          {title}
        </h3>

        {/* Project Details */}
        <ProjectDetails date={date} role={role} impact={impact} />

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mt-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 my-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium tracking-wide hover:bg-indigo-200 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <ProjectLinks 
          githubUrl={githubUrl}
          liveUrl={liveUrl}
          documentationUrl={documentationUrl}
        />
      </div>

      {/* Footer Animation */}
      <div className="absolute inset-0 border-2 border-indigo-400 opacity-0 hover:opacity-100 rounded-2xl pointer-events-none transition duration-300"></div>
    </div>
  );
}
