import React from "react";
import {
  FileText,
  GraduationCap,
  Briefcase,
  Code,
  Globe,
  Star,
  Heart,
  UserCheck,
  Image,
  Download,
} from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

import { ReactElement } from "react";

export default function Resume(): ReactElement {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Resume</h1>
          <a
            href={`${BASE_URL}public/PDFs/Amit_Halbreich_Resume.pdf`}
            download
            className="mt-4 md:mt-0 flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm sm:text-base rounded-full hover:bg-indigo-700 transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="space-y-8">
          <Section title="Objective" icon={FileText}>
            <p className="text-gray-700 text-sm sm:text-base">
              I’m looking for a Software Engineer / Algorithm Developer position. A highly motivated individual with
              excellent interpersonal skills, eager to work hard and contribute to the team’s success.
            </p>
          </Section>

          <Section title="Education" icon={GraduationCap}>
            <EducationItem
              institution="The Hebrew University of Jerusalem"
              duration="2020-2024"
              details="Electrical Engineering & Computer Science graduate. Outstanding Final Project: Non-invasive Blood Pressure Measurement using IR Light & Image Processing."
            />
            <EducationItem
              institution="Har'el High School"
              duration="2011-2014"
              details="Graduated as an outstanding student with a Certificate of Excellence."
            />
          </Section>

          <Section title="Work Experience" icon={Briefcase}>
            <WorkExperience
              title="Data Analyst & QA Engineer"
              company="IDF Intelligence Corps - Unit 8200"
              duration="2015–2018"
              description="Tested new operational Naval & Aerial Electronic Java-based Intelligence systems, worked with developers, and provided critical data analysis."
            />
            <WorkExperience
              title="QA Engineer"
              company="Cyberbit"
              duration="2018–2020"
              description="Led QA team for Cyberbit's Cyber Range Trainer, conducted software testing, network security analysis, and automation test planning."
            />
          </Section>

          <Section title="Technical Skills" icon={Code}>
            <SkillList skills={["Python, Java, C/C++, JavaScript, React, Node.js", "MySQL, PostgreSQL, Docker, Git", "Cyber-Security, Network Protocols, Software Testing"]} />
          </Section>

          <Section title="Personal Skills" icon={UserCheck}>
            <SkillList skills={["Auto-Didact", "Team Player", "Outside-the-box Thinking", "Detail-Oriented", "Design Patterns"]} />
          </Section>

          <Section title="Languages" icon={Globe}>
            <SkillList skills={["Hebrew (Mother tongue)", "English (Fluent)"]} />
          </Section>

          <Section title="Hobbies" icon={Heart}>
            <SkillList skills={["Basketball, Tennis, Hiking", "Robotics & Drones", "Guitar (Self-Taught), Music & Concerts"]} />
          </Section>

          <Section title="Excellence Certificate" icon={Image}>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={`${BASE_URL}images/Excellence_Certificate.jpg`}
                alt="Excellence Certificate"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
              <a
                href={`${BASE_URL}images/Excellence_Certificate.jpg`}
                download
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-100 text-indigo-700 text-sm sm:text-base rounded-full hover:bg-indigo-200 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download Certificate</span>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}
function Section({ title, icon: Icon, children }: SectionProps): JSX.Element {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center mb-4">
        <Icon className="h-6 w-6 mr-2 text-indigo-600" /> {title}
      </h2>
      {children}
    </section>
  );
}

interface EducationItemProps {
  institution: string;
  duration: string;
  details: string;
}
function EducationItem({ institution, duration, details }: EducationItemProps): JSX.Element {
  return (
    <div className="mb-3">
      <p className="font-bold text-gray-900">{institution} | {duration}</p>
      <p className="text-gray-700 text-sm sm:text-base">{details}</p>
    </div>
  );
}

interface WorkExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}
function WorkExperience({ title, company, duration, description }: WorkExperienceProps): JSX.Element {
  return (
    <div className="mb-3">
      <p className="font-bold text-gray-900">{title} | {company} | {duration}</p>
      <p className="text-gray-700 text-sm sm:text-base">{description}</p>
    </div>
  );
}

interface SkillListProps {
  skills: string[];
}
function SkillList({ skills }: SkillListProps): JSX.Element {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
