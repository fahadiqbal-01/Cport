import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const testimonials = [
  {
    quote:
      "Built our complete e-commerce platform — product catalog, cart, checkout, and admin dashboard. The site handles daily transactions smoothly, customers love the navigation, and it was delivered on time and within budget.",
    author: "MD. Saikat Sikder",
    role: "Founder, Gachpala",
    initials: "MS",
  },
  {
    quote:
      "The visual content created for our brand was stunning. He perfectly captured our vision and translated it into a clear, engaging experience.",
    author: "MD. Khan Bahadur",
    role: "Marketing Director, CreativeCo",
    initials: "MK",
  },
  {
    quote:
      "Working with Fahad was a breeze. He took our complex dashboard requirements and turned them into a seamless, high-performance React application.",
    author: "James Wilson",
    role: "Product Manager, SaaSify",
    initials: "JW",
  },
  {
    quote:
      "His ability to blend technical development with high-end visual design is rare. Our brand identity feels much more cohesive now.",
    author: "Elena Rodriguez",
    role: "Creative Lead, Studio Nine",
    initials: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32 border-t border-black/5 selection:bg-DarkRed selection:text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <p className="text-DarkRed font-Satoshi font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4">
            Testimonials
          </p>
          <h2 className="font-Gambarino text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-8 sm:p-10 border border-black/10 hover:border-DarkRed/40 transition-all duration-500 bg-white"
            >
              {/* Quote Mark Decoration */}
              <span className="absolute top-6 right-8 font-Gambarino text-6xl text-black/5 group-hover:text-DarkRed/10 transition-colors">
                &ldquo;
              </span>

              <p className="font-SatoshiSec text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 relative z-10 italic">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/5 group-hover:bg-DarkRed group-hover:border-DarkRed transition-all duration-500">
                  <span className="font-Satoshi font-bold text-xs text-black/60 group-hover:text-white transition-colors">
                    {item.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-Satoshi font-bold text-sm text-black group-hover:text-DarkRed transition-colors">
                    {item.author}
                  </h4>
                  <p className="font-SatoshiSec text-[11px] text-black/40 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-DarkRed group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
