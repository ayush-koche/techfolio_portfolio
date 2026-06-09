import Link from "next/link";
import { FaGithub, FaLinkedin, FaSalesforce } from "react-icons/fa"; // Salesforce icon import kiya

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#0d0e12] overflow-hidden mt-20">
      {/* Subtle Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="container max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white mb-2 transition-colors hover:text-primary"
            >
              Ayush<span className="text-primary">.dev</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              © {new Date().getFullYear()} Ayush Koche. All rights reserved.
            </p>
          </div>

          {/* Social Links with Premium Hover Effects */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/ayush-koche"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/ayushkoche"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            {/* Salesforce Link Added Here */}
            <a
              href="https://www.salesforce.com/trailblazer/hyd2s1hdpz3jdov9bt" // <--- Yaha apna Trailhead link daal dena
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Salesforce Trailhead"
              className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
            >
              <FaSalesforce className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
