"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, User } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type TabType = "contact" | "message";

export const Contact = () => {
  const [activeTab, setActiveTab] = useState<TabType>("message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader title="Contact" subtitle="Get in touch with me" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-4 dark:text-neutral-300 mb-12"
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>

        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex gap-1 mb-0 ml-2"
          >
            <button
              onClick={() => setActiveTab("message")}
              className={`relative flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-t-xl ${
                activeTab === "message"
                  ? "dark:bg-neutral-800 text-emerald-600 bg-neutral-300 z-10"
                  : "dark:bg-neutral-900 dark:text-neutral-400 hover:text-neutral-200"
              }`}
              style={{
                clipPath:
                  "path('M 20 0 L calc(100% - 20) 0 Q calc(100% - 10) 0 calc(100%) 10 L 100% 100% L 0 100% L 0 10 Q 0 0 10 0 Z')",
              }}
            >
              <MessageSquare className="w-5 h-5" />
              Send Message
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`relative flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-t-xl ${
                activeTab === "contact"
                  ? "dark:bg-neutral-800 text-emerald-600 bg-neutral-300 z-10"
                  : "dark:bg-neutral-900 dark:text-neutral-400 hover:text-neutral-200"
              }`}
              style={{
                clipPath:
                  "path('M 20 0 L calc(100% - 20) 0 Q calc(100% - 10) 0 calc(100%) 10 L 100% 100% L 0 100% L 0 10 Q 0 0 10 0 Z')",
              }}
            >
              <User className="w-5 h-5" />
              Contact Info
            </button>
          </motion.div>

          <div className="dark:bg-neutral-800 bg-neutral-300 text-neutral-700 rounded-lg p-8">
            {activeTab === "message" && (
              <motion.form
                key="message"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium dark:text-neutral-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark:bg-neutral-900 border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium dark:text-neutral-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark:bg-neutral-900 border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium dark:text-neutral-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark:bg-neutral-900 border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300"
                      placeholder="Enter the subject"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium dark:text-neutral-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 dark:bg-neutral-900 border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300 resize-none"
                      placeholder="Enter your message here..."
                    />
                  </div>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-emerald-600/20 border border-emerald-600 rounded-lg text-emerald-600 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-600 text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-emerald-600 px-8 py-3 hover:bg-emerald-700 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}

            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeUp}
                  className="bg-neutral-900 border-2 border-neutral-700 rounded-lg p-6 text-center hover:border-emerald-600 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-200 mb-2">
                    Email
                  </h3>
                  <p className="text-neutral-400 text-sm break-all">
                    bienmarlon.qm@gmail.com
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-neutral-900 border-2 border-neutral-700 rounded-lg p-6 text-center hover:border-emerald-600 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-200 mb-2">
                    Phone
                  </h3>
                  <p className="text-neutral-400 text-sm">+63 947 311 3789</p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-neutral-900 border-2 border-neutral-700 rounded-lg p-6 text-center hover:border-emerald-600 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-200 mb-2">
                    Location
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Batangas, Philippines
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
