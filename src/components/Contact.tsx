"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, User } from "lucide-react";
import { SectionHeader } from "@/components/contents/SectionHeader";
import emailjs from "@emailjs/browser";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type TabType = "contact" | "message";

export const ContactContent = () => {
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
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA is not initialized");
      }

      const token = await executeRecaptcha("contact_form");

      if (!token) {
        throw new Error("reCAPTCHA verification failed");
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Bien Marlon Maranan",
        },
        publicKey,
      );

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader title="Contact" subtitle="Get in touch with me" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-4 dark:text-neutral-300 mb-12 sm:mb-16 md:mb-20 text-center sm:text-left"
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>

        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex gap-1 mb-0 ml-0 sm:ml-2 overflow-x-auto"
          >
            <button
              onClick={() => setActiveTab("message")}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 font-medium transition-all duration-300 rounded-t-xl text-sm sm:text-base whitespace-nowrap ${
                activeTab === "message"
                  ? "dark:bg-neutral-800 text-emerald-600 bg-neutral-300 z-10"
                  : "dark:bg-neutral-900 dark:text-neutral-400 hover:text-neutral-200"
              }`}
              style={{
                clipPath:
                  "path('M 20 0 L calc(100% - 20) 0 Q calc(100% - 10) 0 calc(100%) 10 L 100% 100% L 0 100% L 0 10 Q 0 0 10 0 Z')",
              }}
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Send Message</span>
              <span className="sm:hidden">Message</span>
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 font-medium transition-all duration-300 rounded-t-xl text-sm sm:text-base whitespace-nowrap ${
                activeTab === "contact"
                  ? "dark:bg-neutral-800 text-emerald-600 bg-neutral-300 z-10"
                  : "dark:bg-neutral-900 dark:text-neutral-400 hover:text-neutral-200"
              }`}
              style={{
                clipPath:
                  "path('M 20 0 L calc(100% - 20) 0 Q calc(100% - 10) 0 calc(100%) 10 L 100% 100% L 0 100% L 0 10 Q 0 0 10 0 Z')",
              }}
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Contact Info</span>
              <span className="sm:hidden">Info</span>
            </button>
          </motion.div>

          <div className="dark:bg-neutral-800 bg-neutral-300 text-neutral-700 rounded-lg p-4 sm:p-6 md:p-8">
            {activeTab === "message" && (
              <motion.form
                key="message"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg dark:text-neutral-200 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-600 transition-colors duration-300 resize-none text-sm sm:text-base"
                      placeholder="Enter your message here..."
                    />
                  </div>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 sm:mb-6 p-3 sm:p-4 bg-emerald-600/20 border border-emerald-600 rounded-lg text-emerald-600 text-center text-sm sm:text-base"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-600 text-center text-sm sm:text-base"
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
                    className="bg-emerald-600 px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-emerald-700 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
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
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              >
                <motion.div
                  variants={fadeUp}
                  className="dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg p-4 sm:p-6 text-center hover:border-emerald-600 transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-200 text-neutral-800 mb-2">
                    Email
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-600 text-xs sm:text-sm break-all">
                    bienmarlon.qm@gmail.com
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg p-4 sm:p-6 text-center hover:border-emerald-600 transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-200 text-neutral-800 mb-2">
                    Phone
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-600 text-xs sm:text-sm">
                    +63 947 311 3789
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="dark:bg-neutral-900 bg-white border-2 dark:border-neutral-700 border-neutral-500 rounded-lg p-4 sm:p-6 text-center hover:border-emerald-600 transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-200 text-neutral-800 mb-2">
                    Location
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-600 text-xs sm:text-sm">
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

export const Contact = () => {
  const recaptchaSiteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <ContactContent />
    </GoogleReCaptchaProvider>
  );
};