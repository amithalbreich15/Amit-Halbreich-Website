import React from 'react';
import { Github, Linkedin, Award, Briefcase, GraduationCap, List, User } from 'lucide-react';
import SkillCategory from '../components/About/SkillCategory';
import SocialLink from '../components/About/SocialLink';
import { skills, socialLinks, experiences, education } from '../data/about';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-12 sm:pt-16 pb-4 sm:pb-8 md:pb-12 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-8 flex items-center justify-center sm:justify-start">
            <User className="h-5 w-5 mr-2 text-indigo-600" />
            About Me
          </h1>
          <div className="bg-indigo-50 shadow-lg rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200 text-center">
            <img
              src={`${import.meta.env.BASE_URL}images/Amit_Profile_Picture.jpg`}
              alt="Amit Halbreich"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto mb-3 border-4 border-white shadow-lg"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4">Amit Halbreich</h1>
            <p className="text-gray-700 mt-1 sm:mt-2">Software Developer</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-3 mb-4 sm:mb-6 px-2">
              Hi there! I'm Amit Halbreich - A highly motivated Computer Science & Electrical Engineering graduate with experience in software testing, 
              data analysis, and development. Seeking a Software Engineer / Algorithm Developer position to contribute 
              technical skills and innovative problem-solving abilities to a dynamic team.
            </p>
          </div>

          {/* Work Experience Section */}
          <section className="bg-indigo-50 shadow-lg rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200 mt-4 sm:mt-6 mb-3 sm:mb-4 mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-indigo-600" />
              Work Experience
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-indigo-200 pl-2 sm:pl-3 md:pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{exp.role}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 shadow-lg rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200 sm:px-4 mb-3 sm:mb-4 mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-indigo-600" />
              Education
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-indigo-200 pl-2 sm:pl-3 md:pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Social Links - Visible only on mobile */}
          <section className="lg:hidden mt-4 sm:mt-6 bg-indigo-50 shadow-lg rounded-lg p-3 sm:p-4 border border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center justify-center">
              <List className="h-5 w-5 mr-2 text-indigo-600" />
              Connect With Me
            </h2>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink 
                  key={index} 
                  icon={link.icon} 
                  href={link.href} 
                  label={link.label} 
                />
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <section>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-8 flex items-center justify-center sm:justify-start">
              <Award className="h-5 w-5 mr-2 text-indigo-600" />
              Skills & Expertise
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <SkillCategory key={category} title={category} skills={skillList} />
              ))}
            </div>
          </section>
          
          {/* Social Links - Visible only on desktop */}
          <section className="hidden lg:block bg-indigo-50 shadow-lg rounded-lg p-4 md:p-6 border border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <List className="h-5 w-5 md:h-6 md:w-6 mr-2 text-indigo-600" />
              Connect With Me
            </h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <SocialLink 
                  key={index} 
                  icon={link.icon} 
                  href={link.href} 
                  label={link.label} 
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}