import React from 'react';
import { Github, Linkedin, Twitter, Award, Briefcase, GraduationCap, UserCheck, List, User } from 'lucide-react';
import SkillCategory from '../components/About/SkillCategory';
import SocialLink from '../components/About/SocialLink';
import { skills, socialLinks, experiences, education } from '../data/about';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
        <h1 className="justify-center text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="h-6 w-6 mr-2 text-indigo-600" />
              About Me
            </h1>
          <div className="bg-indigo-50 shadow-lg rounded-lg p-6 border border-gray-200 text-center">
            <img
              src={`${import.meta.env.BASE_URL}images/Amit_Profile_Picture.jpg`}
              alt="Amit Halbreich"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl font-bold mt-4">Amit Halbreich</h1>
            <p className="text-gray-700 mt-2">Software Developer</p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Hi there! I'm Amit Halbreich - A highly motivated Computer Science & Electrical Engineering graduate with experience in software testing, 
              data analysis, and development. Seeking a Software Engineer / Algorithm Developer position to contribute 
              technical skills and innovative problem-solving abilities to a dynamic team.
            </p>
          </div>

          {/* Work Experience Section */}
          <section className="bg-indigo-50 shadow-lg rounded-lg p-6 border border-gray-200 mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-indigo-600" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="justify-center text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-indigo-600" />
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <SkillCategory key={category} title={category} skills={skillList} />
              ))}
            </div>
            {/* <div className="bg-indigo-50 p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="h-5 w-5 mr-2 text-indigo-600" />
                Personal Skills
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Auto-didact and quick learner</li>
                <li>Team player with strong collaboration skills</li>
                <li>Outside-the-box thinking and problem-solving</li>
                <li>Detail-oriented approach to tasks</li>
                <li>Strong interpersonal and communication skills</li>
                <li>Proficient in applying design patterns</li>
              </ul>
            </div> */}
          </section>
          <section className="bg-indigo-50 shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-indigo-600" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
