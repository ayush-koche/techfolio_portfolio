"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload, FaSalesforce } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden bg-white dark:bg-[#0d0e12] transition-colors duration-300 flex items-center min-h-[90vh]">
      {/* Background Soft Glows - Scaled for better mobile view */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-8"
        >
          {/* ================= LEFT SIDE: Content ================= */}
          <div className="flex-1 text-center md:text-left max-w-2xl mt-8 md:mt-0">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-3 md:mb-2 leading-tight"
            >
              Hey! I am <br className="hidden sm:block md:hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500 inline-block mt-1 md:mt-2">
                Ayush Koche
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4 md:mb-6"
            >
              Salesforce & Frontend Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed px-2 sm:px-0"
            >
              Building responsive, modern web experiences and scalable CRM
              solutions. Turning complex problems into clean, automated digital
              workflows.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-10"
            >
              <a
                href="https://github.com/ayush-koche"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/ayushkoche"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/hyd2s1hdpz3jdov9bt"
                target="_blank"
                rel="noopener noreferrer"
                title="Salesforce Trailhead Profile"
                className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <FaSalesforce className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="flex justify-center items-center bg-primary text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                View Projects
              </Link>

              <a
                href="/Ayush_Koche_Resume.pdf"
                download
                className="flex justify-center items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE: Circular Image Graphic ================= */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* Outer Dashed Ring */}
            <div className="absolute inset-0 rounded-full border-[2px] md:border-[3px] border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"></div>

            {/* Middle Solid Ring */}
            <div className="absolute inset-3 sm:inset-4 md:inset-6 rounded-full border-[4px] sm:border-[6px] md:border-[10px] border-primary/10 dark:border-white/5"></div>

            {/* Inner Background Circle (Glow) */}
            <div className="absolute inset-6 sm:inset-8 md:inset-12 bg-gradient-to-tr from-primary/80 to-teal-400 rounded-full shadow-2xl shadow-primary/40"></div>

            {/* Profile Image */}
            <div className="absolute inset-6 sm:inset-8 md:inset-12 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 z-10">
              <Image
                src="/profile.jpg"
                alt="Ayush Koche"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Floating Dots */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-teal-400 rounded-full blur-[1px] sm:blur-[2px]"></div>
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full blur-[1px] sm:blur-[2px]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
