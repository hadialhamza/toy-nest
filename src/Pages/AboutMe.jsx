import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaHeart,
} from "react-icons/fa";

const AboutMe = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Firebase Auth", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git/GitHub", level: 70 },
  ];

  const projects = [
    {
      name: "E-commerce Applications",
      description:
        "Full-featured online app website with install and uninstall functions",
      tech: ["React", "Daisy UI", "Tailwind"],
    },
    {
      name: "Ticket Management App",
      description: "Ticket application for personal task organization",
      tech: ["React", "Local Storage"],
    },
    {
      name: "Plant Shop",
      description: "Online plant shop with cart and checkout functionality",
      tech: ["React", "API Integration"],
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <title>About Me</title>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="title font-baloo">About My Self</h1>
          <p className="text-gray-600 text-lg">
            Junior React Developer passionate about creating beautiful web
            experiences
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src="https://i.ibb.co.com/PvGmyNs9/17606389035482.jpg"
                alt=""
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-700 mb-2 font-baloo">
                Md Hadi Al Hamza
              </h2>
              <p className="text-gray-600 mb-4">
                React Learner • Firebase Learner • Junior Frontend Developer
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/hadialhamza"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  <FaEnvelope className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaHeart className="text-red-400" />
              My Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate junior developer currently specializing in React
              and Firebase authentication. I love building interactive web
              applications that provide great user experiences. This toy store
              project represents my journey in mastering modern web development
              technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaCode className="text-blue-500" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaCloud className="text-green-500" />
              Currently Learning
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <FaDatabase className="text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Firebase Authentication
                  </h4>
                  <p className="text-sm text-gray-600">
                    User management & security
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <FaMobile className="text-purple-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Responsive Design
                  </h4>
                  <p className="text-sm text-gray-600">
                    Mobile-first development
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <FaCode className="text-green-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Advanced React
                  </h4>
                  <p className="text-sm text-gray-600">Hooks & Context API</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaCode className="text-orange-500" />
            Recent Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-gray-800 mb-2">{project.name}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
