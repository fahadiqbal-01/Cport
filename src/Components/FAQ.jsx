import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContainerSec from "./ContainerSec";

const faqs = [
  {
    question: "Can you build a full SaaS product?",
    answer:
      "Yes — I build complete SaaS applications including authentication, dashboards, API integration, and responsive UI using Next.js and Firebase.",
  },
  {
    question: "Do you work with startups and early-stage teams?",
    answer:
      "Yes, I specialise in working with startups and building MVPs quickly. I understand that speed and clean code both matter.",
  },
  {
    question: "Can you redesign or improve an existing UI?",
    answer:
      "Yes — I can redesign and optimise existing interfaces for better performance, responsiveness, and user experience.",
  },
  {
    question: "Are you available for remote work?",
    answer:
      "Yes, fully open to remote roles and freelance projects. I'm based in Bangladesh and work async-friendly hours.",
  },
  {
    question: "What's your typical turnaround for a landing page?",
    answer:
      "A standard landing page with animations and responsive design takes 3–5 days. A full SaaS dashboard with auth is typically 7–14 days depending on scope.",
  },
  {
    question: "Do you handle both frontend and backend?",
    answer:
      "Yes — I handle the full product layer: Next.js & React.js frontend, Firebase & Supabase auth and database, API integration, and deployment.",
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/20 py-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group"
      >
        <h3
          className={`text-xl md:text-2xl font-Gambarino transition-colors duration-300 pr-8 ${
            isOpen ? "text-DarkRed" : "text-black group-hover:text-DarkRed"
          }`}
        >
          {faq.question}
        </h3>
        <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
          {/* Vertical line */}
          <motion.div
            animate={{
              rotate: isOpen ? 90 : 0,
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`absolute w-[2px] h-full transition-colors duration-300 ${
              isOpen ? "bg-DarkRed" : "bg-black group-hover:bg-DarkRed"
            }`}
          />
          {/* Horizontal line */}
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`absolute h-[2px] w-full transition-colors duration-300 ${
              isOpen ? "bg-DarkRed" : "bg-black group-hover:bg-DarkRed"
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="pt-4 pb-2 text-gray-600 font-SatoshiSec text-base md:text-lg leading-relaxed max-w-[95%]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-white text-black selection:bg-black selection:text-white">
      <ContainerSec>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Gambarino text-center mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-500 font-SatoshiSec max-w-lg mx-auto text-base md:text-lg">
            Got a project in mind? Here are some common questions about my
            workflow, services, and availability.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>
      </ContainerSec>
    </section>
  );
};

export default FAQ;
