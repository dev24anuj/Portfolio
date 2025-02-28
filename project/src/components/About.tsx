import React from "react";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 mb-6">
              Fullstack Web Developer with over 1 years of experience
              specializing in React and NextJS. From crafting multi-page
              HTML-CSS layouts to building robust single-page applications, I'm
              here to bring your digital ideas to life. With expertise in API
              integration and OpenAI technologies, I can elevate your projects
              to new heights.
            </p>
            <p className="text-gray-700 mb-6">
              In my work, I do my best to meet clients' expectation and
              deadlines. I look forward to discussing your project together.
            </p>
            <p className="text-gray-700">
              Highlighted skills:<br></br> React.js, NextJS, Angular, API
              Integration, Spring Boot, HealessUI, ShadeCN, Tailwind CSS, OpenAI
              Integration, Express JS, Node JS, Mongo DB, Strapi, aws s3, HTML,
              CSS, Javascript, Typescript, jQuery, Microfrontend, web3,
              solidity, smart contract developer, frontend development, frontend
              developer, responsive design, backend developer, customize
              existing page, psd to react, psd to html, figma to react, jquery,
              Web development, HTML/CSS Expert, Full Stack Web Developer, CRM.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-indigo-600 mb-2">1+</div>
            <div className="text-gray-700">Years of Experience</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-700">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
