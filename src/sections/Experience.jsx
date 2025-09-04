import React from "react";
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-12 flex flex-col items-start px-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.4 }}  // animates only when 40% of heading is in view
      >
        Experience
      </motion.h2>


      {/* Grid with equally stretched items */}

      <div className="ml-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch px-6">

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.4 }}
        >
           
          <div className="flex flex-col justify-between w-full min-h-[300px] shadow-md p-6 rounded-lg border border-white/20 backdrop-blur-sm hover:shadow-lg hover:border-black   dark:hover:shadow-[0_0_10px_white] dark:hover:border-white transition duration-300">
            <div>
              <h3 className="text-2xl font-semibold ">Software Developer</h3>
              <p >Fores Elastimech Pvt Ltd India</p>
              <p >Oct 2024 – Present</p>
              <p >
                Contributed to the development and enhancement of industrial process control software using technologies.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Built high-level and low-level components for .NET functionalities.</li>
                <li>Managed full development cycle from design to deployment and documentation.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.4 }}
        >
          <div className="flex flex-col justify-between w-full min-h-[300px] shadow-md p-6 rounded-lg border border-white/20 backdrop-blur-sm hover:shadow-lg hover:border-black   dark:hover:shadow-[0_0_10px_white] dark:hover:border-white transition duration-300">
            <div>
              <h3 className="text-2xl font-semibold ">Software Developer Intern</h3>
              <p >Fores Elastimech Pvt Ltd India</p>
              <p >March 2024 – Aug 2024</p>
              <p>
                Developed an Automated Mould Tracking System to streamline mould creation and tracking for production lines.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Implemented dynamic form generation for mould codes.</li>
                <li>Designed and developed the Phosphating Control System for real-time backend monitoring.</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>


    </section>
  );
}
