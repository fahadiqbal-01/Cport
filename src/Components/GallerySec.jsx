import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Lazy Studio - DIgital Agency (under development)",
    image: "/image/lazystudio.png",
    link: "",
    description:
      "A sleek, minimalist landing page for a creative digital agency. Built to showcase visual storytelling, premium design aesthetics, and development expertise. Featuring interactive elements and a professional layout, it represents the digital identity of a forward-thinking creative studio.",
  },
  {
    title: "Business Website Templet",
    image: "/image/coffeea.png",
    link: "https://coffeabeta.vercel.app/",
    description:
      "An elegant and minimalist landing page designed for premium coffee brands. It prioritizes visual storytelling with high-fidelity imagery and a sophisticated layout, creating an immersive experience that perfectly captures the essence of a modern café.",
  },
  {
    title: "Cafe Business Online Presence",
    image: "/image/beluna.png",
    link: "https://beluna-cafe.vercel.app/",
    description:
      "A premium web presence for a local café, designed to showcase menus, reservations, and brand identity. It features a warm, inviting color palette, responsive layout, and smooth user interactions to translate the cozy physical café experience into a digital medium.",
  },
  {
    title: "A E-commerce Shopping Platform",
    image: "/image/exclusive.png",
    link: "exclusive-omega-puce.vercel.app",
    description:
      "A feature-rich online store built from the ground up, covering the full shopping experience — product browsing across categories like Fashion, Electronics, and Beauty, flash sales with live countdown timers, wishlist, cart, and user authentication. Clean UI with a focus on conversion-friendly design patterns.",
  },
  {
    title: "Recipe Sharing Platforms (Responsive on-going) ",
    image: "/image/harirkhobor.png",
    link: "https://harirkhobor.vercel.app/",
    description:
      "A responsive and interactive recipe sharing platform where food enthusiasts can discover, submit, and organize culinary ideas. Features a clean, content-focused layout with categorizations, search features, and a visually appealing representation of ingredients and cooking guides.",
  },
  {
    title: "Portfolio",
    image: "/image/prince.png",
    link: "https://shahmohammadrummanprince.vercel.app/",
    description:
      "A fully dynamic personal portfolio with a built-in admin panel for managing content without touching the code. The client can log in securely via Firebase Auth and update projects, skills, and info on the fly through a custom dashboard. Framer Motion brings smooth animations and page transitions throughout the site.",
  },

  {
    title: "Digital Space",
    image: "/image/tanvir.png",
    link: "https://tanvirrahman.vercel.app/",
    description:
      "A dynamic personal portfolio with a full admin dashboard for live content editing. Firebase handles authentication and database, while Cloudinary manages media uploads with optimized delivery. The client has full control over their portfolio content through a secure, easy-to-use panel — no code required.",
  },
  {
    title: "Portfolio",
    image: "/image/farhan.png",
    link: "https://farhanirtiza.vercel.app/",
    description:
      "A fully dynamic personal portfolio with a built-in admin panel for managing content without touching the code. The client can log in securely via Firebase Auth and update projects, skills, and info on the fly through a custom dashboard. Framer Motion brings smooth animations and page transitions throughout the site.",
  },
];

const GallerySec = () => {
  return (
    <section className="py-16 md:py-24 xl:px-[50px] lg:px-[50px] md:px-[50px] px-6 select-none bg-white">
      <Container>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between gap-10 lg:gap-20 mb-24 last:mb-0`}
          >
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-md group">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="font-Gambarino text-3xl md:text-5xl lg:text-6xl text-black mb-4">
                {project.title}
              </h3>
              <p className="font-SatoshiSec text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-black border-2 border-black text-white text-lg md:text-xl font-Gambarino cursor-pointer hover:bg-transparent hover:border-DarkRed hover:text-DarkRed transition-all duration-300 ease-out"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default GallerySec;
