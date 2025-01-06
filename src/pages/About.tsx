import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-48 bg-indigo-600">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
            alt="Cover"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold">About Me</h1>
          </div>
        </div>
        
        <div className="p-6">
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi there! I'm a passionate full-stack developer with expertise in modern web technologies.
              I love building beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCategory title="Frontend" skills={["React", "TypeScript", "Tailwind CSS"]} />
              <SkillCategory title="Backend" skills={["Node.js", "Express", "PostgreSQL"]} />
              <SkillCategory title="Tools" skills={["Git", "Docker", "AWS"]} />
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Connect With Me</h2>
            <div className="flex space-x-4">
              <SocialLink icon={<Github />} href="https://github.com/yourusername" label="GitHub" />
              <SocialLink icon={<Linkedin />} href="https://linkedin.com/in/yourusername" label="LinkedIn" />
              <SocialLink icon={<Twitter />} href="https://twitter.com/yourusername" label="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-600">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
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