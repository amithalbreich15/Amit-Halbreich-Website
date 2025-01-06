import React, { useState } from 'react';
import ProjectCard from '../components/Projects/ProjectCard';
import { projectsData } from '../data/projects';
import { Github } from 'lucide-react';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  // Get current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="text-center mb-16">
        <h1 className="text-7xl font-bold text-indigo-800 mb-4 flex items-center justify-center">
          <span role="img" aria-label="workbook">📚</span> My Projects <span role="img" aria-label="workbook">📚</span>
        </h1>
        <p className="text-xl font-medium mb-2 text-indigo-800">
          Explore my latest work and personal projects. Each project represents my passion for creating
          beautiful, functional, and user-friendly applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center items-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          &larr; Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-indigo-800'} hover:bg-indigo-600 hover:text-white transition-colors`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next &rarr;
        </button>
      </div>

      {/* Want to See More Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Want to see more?</p>
        <a
          href="https://github.com/amithalbreich15?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        >
          View All Projects on GitHub 
          <Github className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
