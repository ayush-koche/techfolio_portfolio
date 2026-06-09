"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Clean Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              Connect
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              className="group flex items-center gap-6 p-6 bg-white dark:bg-[#111216] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 bg-primary/10 dark:bg-primary/5 rounded-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <FaEnvelope className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-1">
                  Email
                </h3>
                <a
                  href="mailto:ayushkoche6@gmail.com"
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                >
                  ayushkoche6@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              className="group flex items-center gap-6 p-6 bg-white dark:bg-[#111216] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 bg-blue-500/10 dark:bg-blue-500/5 rounded-xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <FaPhone className="h-7 w-7 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+919168389480"
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
                >
                  +91 9168389480
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              className="group flex items-center gap-6 p-6 bg-white dark:bg-[#111216] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 bg-pink-500/10 dark:bg-pink-500/5 rounded-xl group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
                <FaMapMarkerAlt className="h-7 w-7 text-pink-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-1">
                  Location
                </h3>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Nagpur, Maharashtra
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white dark:bg-[#111216] p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl shadow-primary/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1b23] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1b23] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1b23] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-500 text-center font-medium mt-4">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-medium mt-4">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
