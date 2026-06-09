"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
// Yahan FaSalesforce add hona zaroori hai
import { FaGithub, FaExternalLinkAlt, FaSalesforce } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function Projects() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-6">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-lg text-secondary mb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects. Click on the links to view the
        verification, code or live demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            {/* Image Section (Image nahi hogi toh error nahi ayega) */}
            <motion.div
              className="aspect-video bg-gray-200 dark:bg-gray-800 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.image && project.image !== "" && (
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  width={500}
                  height={500}
                />
              )}
            </motion.div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <motion.h3
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-secondary mb-4 flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* ========= MAIN MAGIC YAHAN HAI (Conditional Links) ========= */}
              <motion.div
                className="flex flex-wrap gap-4 mt-auto pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* 1. Agar Trailhead link hai toh sirf ye dikhega */}
                {project.trailheadLink && project.trailheadLink.length > 0 && (
                  <motion.a
                    href={project.trailheadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaSalesforce className="h-5 w-5" />
                    <span>Trailhead</span>
                  </motion.a>
                )}

                {/* 2. Agar GitHub link hai toh ye dikhega */}
                {project.githubLink && project.githubLink.length > 0 && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                )}

                {/* 3. Agar Live Demo link hai toh ye dikhega */}
                {project.demoLink && project.demoLink.length > 0 && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </motion.div>
              {/* ============================================================== */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
