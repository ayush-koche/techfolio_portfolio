"use client";

import {
  FaCode,
  FaCloud,
  FaReact,
  FaTrophy,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  // Clean scroll animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
            Me
          </span>
        </h1>
      </motion.div>

      {/* Bio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="mb-20"
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          I'm a recent IT graduate passionate about building scalable cloud
          solutions and modern web applications. With a strong foundation in{" "}
          <strong className="text-primary font-semibold">
            Frontend Development
          </strong>{" "}
          and deep expertise in the{" "}
          <strong className="text-blue-500 font-semibold">
            Salesforce Ecosystem
          </strong>
          , I love turning complex business logic into automated, user-friendly
          digital experiences.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Frontend Card */}
          <motion.div
            variants={itemVariants}
            className="group bg-white dark:bg-[#111216] p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
          >
            <FaReact className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Frontend Dev
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 font-medium">
              <li>React.js & JavaScript (ES6+)</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive UI Design</li>
            </ul>
          </motion.div>

          {/* Salesforce Card */}
          <motion.div
            variants={itemVariants}
            className="group bg-white dark:bg-[#111216] p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <FaCloud className="h-10 w-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Salesforce
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 font-medium">
              <li>Apex & LWC</li>
              <li>REST/SOAP API Integrations</li>
              <li>Record-Triggered Flows</li>
              <li>SOQL, SOSL & Data Modeling</li>
            </ul>
          </motion.div>

          {/* Tools & Backend Card */}
          <motion.div
            variants={itemVariants}
            className="group bg-white dark:bg-[#111216] p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <FaCode className="h-10 w-10 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Backend & Tools
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-3 font-medium">
              <li>PHP & MySQL</li>
              <li>Git, GitHub & VS Code</li>
              <li>Postman (API Testing)</li>
              <li>Salesforce CLI (SFDX)</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Achievements Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Achievements & Milestones
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#111216] p-8 rounded-2xl border border-gray-200 dark:border-white/10 relative overflow-hidden h-full"
          >
            {/* Left Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent"></div>

            <div className="flex items-center mb-2">
              <FaTrophy className="text-primary mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Salesforce Trailblazer
              </h3>
            </div>

            <p className="text-primary font-semibold text-sm mb-4">
              Journey to Salesforce (J2S) Graduate
            </p>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-2 leading-relaxed">
              <li>
                Successfully completed the official **Journey to Salesforce**
                developer program.
              </li>
              <li>
                Achieved **Expeditioner Rank** on Trailhead with **62 Badges**
                and **5 Superbadges**.
              </li>
              <li>
                Demonstrated hands-on expertise in building custom components,
                Apex callouts, and complex automated flows.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#111216] p-8 rounded-2xl border border-gray-200 dark:border-white/10 relative overflow-hidden h-full"
          >
            {/* Left Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-transparent"></div>

            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-pink-500 mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                B.Tech in Information Technology
              </h3>
            </div>

            <p className="text-pink-500 font-semibold text-sm mb-4">
              Samrat Ashok Technological Institute (SATI) • May 2026
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Graduated with a comprehensive understanding of software
              engineering principles, Object-Oriented Programming (OOP), and
              database architecture.
              <br />
              <br />
              Developed functional academic projects including the "Employee
              Task Allotment System" using robust backend technologies.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
