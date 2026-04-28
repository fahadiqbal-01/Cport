import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const services = [
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive digital experiences with a focus on user behavior and visual storytelling.",
    stack: "Figma, Adobe Suite, Spline 3D",
  },
  {
    title: "Full-Stack Dev",
    desc: "Building robust applications with modern frameworks, ensuring speed and scalability.",
    stack: "React, Next.js, Firebase, Supabase",
  },
  {
    title: "Visual Content",
    desc: "Creating high-impact visuals, from 3D assets to digital posters and photo manipulation.",
    stack: "Photoshop, After Effects, AI Tools",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-24 border-t border-black/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-DarkRed text-sm">
                  0{index + 1}
                </span>
                <div className="h-[1px] w-10 bg-black/10 transition-all group-hover:w-20 group-hover:bg-DarkRed"></div>
              </div>
              <h3 className="font-Gambarino text-3xl mb-4 group-hover:text-DarkRed transition-colors">
                {service.title}
              </h3>
              <p className="font-SatoshiSec text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="pt-4 border-t border-black/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-black/40">
                  Tech Stack
                </span>
                <p className="font-Satoshi font-bold text-xs mt-1 text-black/80 uppercase">
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
