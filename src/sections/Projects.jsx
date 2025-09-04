"use client"; // only if in Next.js App Router

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "⚙️ Product Development System",
      description:
        "Developed an automation system for manufacturing processes, streamlining mould creation and production tracking. Enhanced data accuracy and efficiency through integrated reporting, PDF generation, and backend optimization.",
      link: "#",
    },
    {
      title: "⚙️ Phosphating Control",
      description:
        "Designed and managed backend databases for real-time monitoring of the phosphating process in manufacturing. Ensured accurate, consistent data collection to optimize production workflows.",
      link: "#",
    },
    {
      title: "💻 Personal Portfolio",
      description:
        "A responsive single-page portfolio built using React and Tailwind CSS to showcase my projects and skills.",
      link: "#",
    },
    {
      title: "🧘 Yoga Pose Detection",
      description:
        "Built a real-time yoga pose recognition web app using Google Teachable Machine, enabling live pose classification via webcam. Integrated interactive feedback to guide users toward correct posture.",
      link: "https://github.com/github1901/Yoga-Pose-Detection",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-12 flex flex-col items-start px-10  transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 px-10 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.4 }}  // heading animates only first time in view
      >
        Projects
      </motion.h2>

      {/* Animate container only when in view */}
      <motion.div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start px-10"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      // once: false => will animate again if you scroll away & back
      // amount: 0.2 => triggers when 20% of container is visible
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col justify-between min-h-[300px] h-full p-6 rounded-lg border border-transparent dark:hover:bg-purple-700 
                      hover:bg-purple-500 hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300"
          >
            <h3 className="text-2xl font-semibold  mb-2">{p.title}</h3>
            <p className="mb-4 ">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:hover:text-blue-500 hover:text-white"
            >
              View Project
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
