// href={`${import.meta.env.BASE_URL}public/PDFs/Amit_Halbreich_Resume.pdf`}
// src={`${import.meta.env.BASE_URL}images/Excellence_Certificate.jpg`}



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

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Resume</h1>
          <a
            href={`${import.meta.env.BASE_URL}public/PDFs/Amit_Halbreich_Resume.pdf`}
            download
            className="mt-4 md:mt-0 flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm sm:text-base rounded-full hover:bg-indigo-700 transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="space-y-8">
          {/** Profile Section **/}
          <Section title="Objective" icon={FileText}>
            <p className="text-gray-700 text-sm sm:text-base">
              I’m looking for a Software Engineer / Algorithm Developer position. A highly motivated individual with 
              excellent interpersonal skills, eager to work hard and contribute to the team’s success.
            </p>
          </Section>

          {/** Education Section **/}
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

          {/** Work Experience **/}
          <Section title="Work Experience" icon={Briefcase}>
            <WorkExperience
              title="Data Analyst & QA Engineer"
              company="IDF Intelligence Corps - Unit 8200"
              duration="2015–2018"
              description="Team Leader, with experience in testing new operational Naval & Aerial Electronic Java based Intelligence
                    system in advanced stages of development, as part of a co-operation of 'Ofek' Computing Unit and 8200
                    Unit. Responsible for software improvements and configuration of a complete work environment of the new
                    system version. As an expert system user - in charge of defining costumer’s needs working closely with
                    software developers, providing instruction and guidance to end-users. Worked under a strict schedule in
                    shifts as a Data Analyst providing crucial information that must be delivered flawlessly & accurately to
                    relevant forces."
            />
            <WorkExperience
              title="QA Engineer"
              company="Cyberbit"
              duration="2018–2020"
              description="A key-member leading a group of a QA Engineering team which is responsible for Cyberbit's most successful product – 'The Cyber Range trainer' – a virtual environment which demonstrates a vast organization's or company's network
                    creating a simulation of real-life cyber-attacks various scenarios, training both SOC Team members with defending
                    strategies and Penetration Testers. Responsible for the integration, system characterization and implementation.
                    Experience in GUI design, Web and Application Software Testing and working with large databases. Experienced with
                    working with PAN and Checkpoint Firewalls and Wireshark as part of my work and familiar with network protocols.
                    Experience in writing STD/STP/STR detailed documents including various tests: Unit, Component, E2E, Integration,
                    Regression, Performance Testing. I have worked closely to Software Developers and fixed major & critical bugs, wrote and maintained software documentation in English. Responsible for Automated Test Plans design, writing and execution."
            />
          </Section>

          {/** Technical Skills **/}
          <Section title="Technical Skills" icon={Code}>
            <SkillList
              skills={["Python, Java, C/C++, JavaScript, React, Node.js", "MySQL, PostgreSQL, Docker, Git", "Cyber-Security, Network Protocols, Software Testing"]}
            />
          </Section>

          {/** Personal Skills **/}
          <Section title="Personal Skills" icon={UserCheck}>
            <SkillList
              skills={["Auto-Didact", "Team Player", "Outside-the-box Thinking", "Detail-Oriented", "Design Patterns"]}
            />
          </Section>

          {/** Languages **/}
          <Section title="Languages" icon={Globe}>
            <SkillList skills={["Hebrew (Mother tongue)", "English (Fluent)"]} />
          </Section>

          {/** Hobbies **/}
          <Section title="Hobbies" icon={Heart}>
            <SkillList skills={["Basketball, Tennis, Hiking", "Robotics & Drones", "Guitar (Self-Taught), Music & Concerts"]} />
          </Section>

          {/** Excellence Certificate **/}
          <Section title="Excellence Certificate" icon={Image}>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={`${import.meta.env.BASE_URL}images/Excellence_Certificate.jpg`}
                alt="Excellence Certificate"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
              <a
                href={`${import.meta.env.BASE_URL}images/Excellence_Certificate.jpg`}
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

/** Helper Components **/
function Section({ title, icon: Icon, children }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center mb-4">
        <Icon className="h-6 w-6 mr-2 text-indigo-600" /> {title}
      </h2>
      {children}
    </section>
  );
}

function EducationItem({ institution, duration, details }) {
  return (
    <div className="mb-3">
      <p className="font-bold text-gray-900">{institution} | {duration}</p>
      <p className="text-gray-700 text-sm sm:text-base">{details}</p>
    </div>
  );
}

function WorkExperience({ title, company, duration, description }) {
  return (
    <div className="mb-3">
      <p className="font-bold text-gray-900">{title} | {company} | {duration}</p>
      <p className="text-gray-700 text-sm sm:text-base">{description}</p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
