import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const services = [
  {
    title: "Full-Stack Dev",
    desc: "Building robust, high-conversion applications with modern frameworks, ensuring speed, scalability, and seamless real-time database integration.",
    stack: "React.js, Next.js, Tailwind CSS, Firebase, Supabase, PostgreSQL",
  },
  {
    title: "Brand & Visual Identity",
    desc: "Crafting sophisticated editorial brand identities, sharp vector logos, and clean social media assets.",
    stack: "Illustrator, Photoshop, Vector Graphics",
  },
  {
    title: "Website Development",
    desc: "Translating brand identities into fully optimized, high-conversion landing pages with fluid animations and responsive layouts.",
    stack: "React.js, Next.js, Tailwind CSS, Framer Motion",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32 border-t border-black/5 selection:bg-DarkRed selection:text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-black/60 text-xs sm:text-sm group-hover:text-DarkRed transition-colors">
                  0{index + 1}
                </span>
                <div className="h-[1px] w-10 bg-black/10 transition-all group-hover:w-20 group-hover:bg-DarkRed"></div>
              </div>
              <h3 className="font-Gambarino text-[22px] sm:text-2xl md:text-3xl text-black mb-4 group-hover:text-DarkRed transition-colors">
                {service.title}
              </h3>
              <p className="font-SatoshiSec text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="pt-4 border-t border-black/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-black/40">
                  Tech Stack
                </span>
                <p className="font-Satoshi font-bold text-[10px] sm:text-xs mt-1 text-black/80 uppercase">
                  {service.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
