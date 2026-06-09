"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react"; // useEffect import kiya

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Hydration state add ki
  const pathname = usePathname();

  // Component mount hone ke baad hi theme icon render karega (Hydration Fix)
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-[#0d0e12]/70 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 z-50 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-white transition-colors hover:text-primary"
          >
            Ayush<span className="text-primary">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-4"></div>

            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center w-9 h-9"
              aria-label="Toggle Theme"
            >
              {/* Hydration Check: Jab tak mount na ho, khali space dikhao */}
              {mounted ? (
                theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-slate-700" />
                )
              ) : (
                <span className="h-5 w-5"></span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 transition-all duration-300 active:scale-95"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-200 dark:border-white/10"
            >
              <div className="py-4 flex flex-col space-y-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Theme Toggle Mobile */}
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center px-4 py-3 mt-2 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  {/* Hydration Check Mobile */}
                  {mounted ? (
                    theme === "dark" ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-3 text-yellow-400" />
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-3 text-slate-700" />
                        Switch to Dark Mode
                      </>
                    )
                  ) : (
                    <span className="h-5 w-5 mr-3"></span>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
