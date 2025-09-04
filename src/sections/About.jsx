import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaGitAlt, FaPython,
} from 'react-icons/fa';
import { SiDotnet, SiJquery } from 'react-icons/si';
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { icon: <TbBrandCSharp />, name: 'C#' },
    { icon: <SiDotnet />, name: '.NET' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <DiMsqlServer />, name: 'SQL Server' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiJquery />, name: 'jQuery' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <DiVisualstudio />, name: 'Visual Studio' },
    { icon: <VscVscode />, name: 'VS Code' },
  ];

  return (
    <section id="about" className="min-h-screen  justify-center  transition-colors duration-500 px-12">
      <div className="max-w-5xl w-full px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-4 px-4 mb-8 -12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        <motion.p
          className="text-xl px-4 mb-10 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK 💻
        </motion.p>

        {/* Skill Icons */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 px-4 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05 } }
          }}
        >
          {skills.map(({ icon, name }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center hover:text-blue-400 transition"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="text-4xl mb-1">{icon}</div>
              <span className="text-sm">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="ml-10 mr-4 rounded-lg p-8 text-lg space-y-4 border border-white/20 bg-white/5 backdrop-blur-sm max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p>⚡ Create dynamic and interactive UI components with a focus on usability and performance</p>
          <p>⚡ Automate real-time data monitoring and process control in industrial systems</p>
          <p>⚡ Collaborate on full-stack development projects with integration of backend logic and frontend UI</p>
          <p>⚡ Apply debugging, testing, and deployment practices to ensure high-quality software solutions</p>
        </motion.div>
      </div>
    </section>
  );
}
