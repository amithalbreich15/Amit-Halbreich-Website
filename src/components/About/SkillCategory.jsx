import React from 'react';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
      <h3 className="font-bold text-xl text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}