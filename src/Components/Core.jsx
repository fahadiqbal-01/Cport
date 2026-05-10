import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const SKILLS = [
  "Next.js",
  "React.js",
  "Supabase",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "Firebase",
  "JavaScript",
  "GSAP",
  "Adobe Suite",
  "Git",
  "Flowbite",
  "Mui",
  "Github",
  "Node.js",
  "Redux Toolkit",
  "API Integration",
  "Built AI-powered features in apps",
  "Used Claude/ChatGPT/Gemini APIs to integrate LLM into products",
  "Prompt engineering for specific workflow",
  "Built artifcats powered by LLM APIs",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Core = () => {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32 selection:bg-DarkRed selection:text-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-24 items-start">
          {/* Header Content */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-DarkRed font-Satoshi font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6">
                Core Stack
              </p>
              <h2 className="font-Gambarino text-[30px] min-[400px]:text-[35px] sm:text-[45px] md:text-[60px] text-black leading-tight mb-6 sm:mb-8">
                My Creative <br />
                <span className="font-aktura text-DarkRed lowercase text-[1.1em] sm:text-[1.2em]">
                  arsenal
                </span>
              </h2>
              <p className="font-SatoshiSec text-gray-600 text-sm sm:text-base md:text-xl leading-[1.7] md:leading-[1.8] max-w-sm">
                A curated selection of modern tools and frameworks I leverage to
                build high-performance digital products and immersive visual
                experiences.
              </p>
            </motion.div>
          </div>

          {/* Skills Interaction Grid */}
          <div className="w-full lg:w-2/3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
            >
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#91040c",
                    borderColor: "#91040c",
                    color: "#fff",
                  }}
                  className="px-4 py-3 sm:px-6 sm:py-4 border border-black/10 bg-black text-white rounded-xl font-Satoshi text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest cursor-default transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Core;
