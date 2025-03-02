import React from 'react';
import { FileText, GraduationCap, Briefcase, Code, Globe, Star, Heart, UserCheck, Image, Download } from 'lucide-react';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
            <a
              href="/public/PDFs/Amit-Halbreich Resume.pdf"
              download
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span>Download Resume PDF</span>
            </a>
          </div>

          <div className="prose max-w-none space-y-8">
            {/* Profile Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <FileText className="h-6 w-6 mr-2 text-indigo-600" />
                Objective
              </h2>
              <p className="text-gray-700">
                I’m currently looking for a Software Engineer / Algorithm Developer position. A highly motivated individual with 
                excellent interpersonal skills, eager to work hard and contribute to the team’s effort for the product’s success.
              </p>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <GraduationCap className="h-6 w-6 mr-2 text-indigo-600" />
                Education
              </h2>
              <p className="text-gray-700">
                <strong>The Hebrew University of Jerusalem | 2020-2024</strong><br />
                Electrical Engineering & Computer Science graduate.
              </p>
              <p>
                Outstanding Final Project: Non-invasive Blood Pressure Measurement using IR Light & Image Processing.
              </p>
              <p className="text-gray-700">
                <strong>Har'el High School | 2011-2014</strong><br />
                Graduated as an outstanding student, completed high school with a Certificate of Excellence.
              </p>
            </section>

            {/* Work Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <Briefcase className="h-6 w-6 mr-2 text-indigo-600" />
                Work Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">Data Analyst & QA Engineer | IDF Intelligence Corps - Unit 8200 | 2015–2018</p>
                  <p className="text-gray-700">
                    Team Leader, with experience in testing new operational Naval & Aerial Electronic Java based Intelligence
                    system in advanced stages of development, as part of a co-operation of "Ofek" Computing Unit and 8200
                    Unit. Responsible for software improvements and configuration of a complete work environment of the new
                    system version. As an expert system user - in charge of defining costumer’s needs working closely with
                    software developers, providing instruction and guidance to end-users. Worked under a strict schedule in
                    shifts as a Data Analyst providing crucial information that must be delivered flawlessly & accurately to
                    relevant forces.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">QA Engineer | Cyberbit | 2018–2020</p>
                  <p className="text-gray-700">
                    A key-member leading a group of a QA Engineering team which is responsible for Cyberbit's most successful product – "The Cyber Range trainer" – a virtual environment which demonstrates a vast organization's or company's network
                    creating a simulation of real-life cyber-attacks various scenarios, training both SOC Team members with defending
                    strategies and Penetration Testers. Responsible for the integration, system characterization and implementation.
                    Experience in GUI design, Web and Application Software Testing and working with large databases. Experienced with
                    working with PAN and Checkpoint Firewalls and Wireshark as part of my work and familiar with network protocols.
                    Experience in writing STD/STP/STR detailed documents including various tests: Unit, Component, E2E, Integration,
                    Regression, Performance Testing. I have worked closely to Software Developers and fixed major & critical bugs, wrote and maintained software documentation in English. Responsible for Automated Test Plans design, writing and execution.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <Code className="h-6 w-6 mr-2 text-indigo-600" />
                Technical Skills
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Programming: Python, Java, C/C++/C#, JavaScript, React Native / React.js, Node.js / Express.js, HTML5 / CSS3</li>
                <li>Tools: MySQL, PostgreSQL, Linux & Bash Scripting, Matlab, Git / Github Docker</li>
                <li>Expertise: Cyber-Security, Network Protocols, Software Testing</li>
              </ul>
            </section>

            {/* Personal Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <UserCheck className="h-6 w-6 mr-2 text-indigo-600" />
                Personal Skills
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Auto-Didact</li>
                <li>Team Player</li>
                <li>Outside-the-box Thinking</li>
                <li>Detail-Oriented</li>
                <li>Design Patterns</li>
                <li>Interpersonal Communication</li>
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <Globe className="h-6 w-6 mr-2 text-indigo-600" />
                Languages
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Hebrew (Mother tongue)</li>
                <li>English (Fluent)</li>
              </ul>
            </section>

            {/* Hobbies Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <Heart className="h-6 w-6 mr-2 text-indigo-600" />
                Hobbies
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Basketball, Tennis, Hiking</li>
                <li>Robotics & Drones</li>
                <li>Guitar (Self Taught), Music & Concerts</li>
              </ul>
            </section>

            {/* Excellence Certificate Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
                <Image className="h-6 w-6 mr-2 text-indigo-600" />
                Excellence Certificate
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src="/images/Excellence Certificate.jpg" 
                  alt="Excellence Certificate" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
                <a
                  href="/images/Excellence Certificate.jpg"
                  download
                  className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Certificate</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
