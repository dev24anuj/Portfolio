import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Anuj kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the
              web.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="./WhatsApp Image 2024-12-19 at 22.30.51_7837da54.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/dev24anuj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anuj2221/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="anujbhardwaj1020@gmail.com"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
