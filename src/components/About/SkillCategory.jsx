import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-indigo-50 p-3 md:p-5 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-white text-indigo-700 text-xs md:text-sm rounded-full border border-indigo-200 shadow-sm mb-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;