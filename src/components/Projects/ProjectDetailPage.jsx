import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, Github, FileText, Code, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Markdown viewer component
const MarkdownViewer = ({ url }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    if (url && url.endsWith('.md')) {
      fetchMarkdown();
    } else {
      setError('No markdown file available');
      setLoading(false);
    }
  }, [url]);

  if (loading) return <div className="flex justify-center p-10">Loading markdown content...</div>;
  if (error) return <div className="text-red-500 p-4">Error loading markdown: {error}</div>;

  return (
    <div className="markdown-body bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-auto">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
};

// PDF Viewer component
const PDFViewer = ({ url }) => {
  if (!url || !url.endsWith('.pdf')) {
    return <div className="text-center p-6">No PDF documentation available</div>;
  }

  return (
    <div className="w-full h-screen max-h-[800px]">
      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`}
        className="w-full h-full border-0 rounded-lg"
        title="PDF Viewer"
      />
    </div>
  );
};

// Code Viewer component
const CodeViewer = ({ githubUrl }) => {
  const [codeContent, setCodeContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');

  useEffect(() => {
    // Extract the username and repo from the GitHub URL
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) {
      setError('Invalid GitHub URL format');
      setLoading(false);
      return;
    }

    const [, username, repo] = match;
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents`;

    async function fetchRepoContents() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch repository contents: ${response.status}`);
        }
        
        const data = await response.json();
        const codeFiles = data.filter(file => 
          file.type === 'file' && 
          !file.name.endsWith('.md') && 
          !file.name.endsWith('.pdf') &&
          !file.name.endsWith('.jpg') &&
          !file.name.endsWith('.png') &&
          !file.name.endsWith('.gif')
        );
        
        setFiles(codeFiles);
        if (codeFiles.length > 0) {
          setSelectedFile(codeFiles[0].name);
          fetchFileContent(codeFiles[0].download_url);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchRepoContents();
  }, [githubUrl]);

  const fetchFileContent = async (fileUrl) => {
    setLoading(true);
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch file content: ${response.status}`);
      }
      const text = await response.text();
      setCodeContent(text);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleFileChange = (file) => {
    setSelectedFile(file.name);
    fetchFileContent(file.download_url);
  };

  if (loading && !files.length) return <div className="flex justify-center p-10">Loading repository contents...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!files.length) return <div className="text-center p-6">No code files found in this repository</div>;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="flex items-center bg-gray-200 dark:bg-gray-700 p-2 overflow-x-auto">
        {files.map((file) => (
          <button
            key={file.name}
            onClick={() => handleFileChange(file)}
            className={`px-3 py-1 mr-2 rounded-md text-sm ${
              selectedFile === file.name 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          >
            {file.name}
          </button>
        ))}
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-900 overflow-x-auto">
        {loading ? (
          <div className="text-center p-6">Loading file content...</div>
        ) : (
          <pre className="text-sm whitespace-pre-wrap">{codeContent}</pre>
        )}
      </div>
    </div>
  );
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState('documentation');

  useEffect(() => {
    // Find the project by converting the URL parameter back to the title
    // (assuming projectId is a slugified version of the title)
    const decodedProjectId = decodeURIComponent(projectId);
    const foundProject = projectsData.find(p => {
      const projectSlug = p.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return projectSlug === decodedProjectId;
    });
    
    setProject(foundProject);
    
    // Set default active tab based on available resources
    if (foundProject) {
      if (foundProject.documentationUrl) {
        setActiveTab('documentation');
      } else if (foundProject.githubUrl) {
        setActiveTab('code');
      }
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects">
          <Button variant="default">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Link to="/projects" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 p-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{project.date}</p>
            <p className="mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Role:</h3>
              <p>{project.role}</p>
            </div>
            
            {project.impact && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Impact:</h3>
                <p>{project.impact}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 mt-6">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </a>
              )}
              
              {project.documentationUrl && (
                <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" /> View Documentation
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="documentation" disabled={!project.documentationUrl}>
                <FileText className="mr-2 h-4 w-4" /> Documentation
              </TabsTrigger>
              <TabsTrigger value="code" disabled={!project.githubUrl}>
                <Code className="mr-2 h-4 w-4" /> Code
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="documentation" className="p-6">
              {project.documentationUrl ? (
                project.documentationUrl.endsWith('.md') ? (
                  <MarkdownViewer url={project.documentationUrl} />
                ) : project.documentationUrl.endsWith('.pdf') ? (
                  <PDFViewer url={project.documentationUrl} />
                ) : (
                  <div className="text-center p-6">
                    <p className="mb-4">Documentation is available externally</p>
                    <a 
                      href={project.documentationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Open Documentation
                    </a>
                  </div>
                )
              ) : (
                <div className="text-center p-6">No documentation available</div>
              )}
            </TabsContent>
            
            <TabsContent value="code" className="p-0">
              {project.githubUrl ? (
                <CodeViewer githubUrl={project.githubUrl} />
              ) : (
                <div className="text-center p-6">No code repository available</div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}