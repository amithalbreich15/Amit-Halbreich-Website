import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';

export default function ProjectDetails({ date, role, impact }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {date && (
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-5 w-5" />
          <span>{date}</span>
        </div>
      )}
      {role && (
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="h-5 w-5" />
          <span>{role}</span>
        </div>
      )}
      {impact && (
        <div className="flex items-center space-x-2 text-gray-600">
          <Trophy className="h-5 w-5" />
          <span>{impact}</span>
        </div>
      )}
    </div>
  );
}