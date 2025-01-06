import React from 'react';
import { Github, ExternalLink, FileText } from 'lucide-react';

export default function ProjectLinks({ githubUrl, liveUrl, documentationUrl }) {
  return (
    <div className="flex flex-wrap gap-4">
      {githubUrl && (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Github className="h-5 w-5" />
          <span>View Code</span>
        </a>
      )}
      {liveUrl && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
          <span>Live Demo</span>
        </a>
      )}
      {documentationUrl && (
        <a 
          href={documentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <FileText className="h-5 w-5" />
          <span>Documentation</span>
        </a>
      )}
    </div>
  );
}