import React from 'react';

export default function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  );
}