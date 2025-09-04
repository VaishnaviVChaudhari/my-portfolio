import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center transition-colors duration-500">

      <div className="text-center">
        <h1 className="text-4xl font-bold ">
          Hi, I’m Vaishnavi  <span className="wave inline-block">👋</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Aspiring Software Developer | React & ASP.NET Enthusiast
        </p>
        <div className="flex space-x-6 text-2xl mb-4 justify-center">
          <a
            href="https://github.com/VaishnaviVChaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-700  text-white dark:hover:bg-black dark:hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-chaudhari-70bb11256"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 dark:text-white-500 dark:hover:bg-black dark:hover:text-blue-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:cvaishnavi300@gmail.com"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-red-500 dark:text-white-500 dark:hover:bg-black hover:text-red-300 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/Vaishnavi_Chaudhari_18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-500 dark:text-white-500 dark:hover:bg-black hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="flex space-x-60 mt-15">
          <a href="#contact">
            <button className="px-6 py-2 dark:bg-blue-800 dark:text-white rounded dark:hover:bg-blue-600 transition">CONTACT ME</button>
          </a>
          <a
            href="/Resume/Vaishnavi Chaudhari Resume.pdf"
            download="Vaishnavi_Chaudhari_Resume.pdf"
            className="px-6 py-2 dark:bg-blue-800 dark:text-white rounded dark:hover:bg-blue-900 transition inline-block"
          >
            DOWNLOAD MY RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
