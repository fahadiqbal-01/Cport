import React from "react";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "A LOST SOUL OF AN OLD WARRIOR",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    mainImage: "image/cyberpunk_warrior_1777292086830.png",
    subImage1: "image/cyberpunk_mech_1777292117962.png",
    subImage2: "image/brokensoul.png",
    reverse: false,
  },
  {
    id: 2,
    title: "THE FREEDOM WE STRIVE FOR",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    mainImage: "image/cyberpunk_girl_1777292101571.png",
    subImage1: "image/catwomen.png",
    subImage2: "image/cyberpunk_mech_1777292117962.png",
    reverse: true,
  },
  {
    id: 3,
    title: "STEP IN EVOLUTION TOTAL SUPREMACY",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    mainImage: "image/cyberpunk_mech_1777292117962.png",
    subImage1: "image/griffith.png",
    subImage2: "image/cyberpunk_warrior_1777292086830.png",
    reverse: false,
  }
];

const ProjectsSection = () => {
  return (
    <section className="w-full mt-10 md:mt-20 bg-[#000000] text-white pt-16 md:pt-24 pb-24 md:pb-40 relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="xl:text-[42px] lg:text-[38px] md:text-[36px] text-[30px]
               font-Gambarino text-center xl:mb-[120px] lg:mb-[100px] md:mb-[80px] mb-[60px] selection:text-black selection:bg-white"
        >
          Tiny fraction of my work...
        </motion.h2>

        <div className="flex flex-col gap-28 md:gap-32 lg:gap-40">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 md:gap-16 lg:gap-24`}
            >
              <div className="w-full lg:w-1/2 relative flex justify-center px-4 md:px-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easeOut }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative z-10 w-full max-w-[350px] md:max-w-[450px]"
                >
                   <div className="relative inline-block w-full">
                     <div className="absolute inset-0 bg-DarkRed translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10"></div>
                     <img 
                       src={project.mainImage} 
                       alt={project.title} 
                       className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     />
                   </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                  viewport={{ once: true }}
                  className={`absolute z-20 ${project.reverse ? '-right-2 md:-right-10 top-[5%] md:top-[10%]' : '-left-2 md:-left-10 top-[5%] md:top-[10%]'} w-24 md:w-32 lg:w-48 border-[4px] md:border-[6px] border-[#111111] bg-black/50`}
                >
                  <img src={project.subImage1} alt="" className="w-full aspect-square object-cover opacity-80 mix-blend-multiply" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
                  viewport={{ once: true }}
                  className={`absolute z-20 ${project.reverse ? 'left-0 md:-left-10 -bottom-6 md:-bottom-10 lg:-bottom-16' : 'right-0 md:-right-10 -bottom-6 md:-bottom-10 lg:-bottom-16'} w-28 md:w-36 lg:w-52 border-[4px] md:border-[6px] border-[#111111] bg-white`}
                >
                  <img src={project.subImage2} alt="" className="w-full aspect-square object-cover grayscale" />
                </motion.div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 md:mt-12 lg:mt-0 items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: project.reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: easeOut }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase mb-4 md:mb-6 font-Gambarino tracking-wide leading-[1.2] lg:leading-[1.1] selection:text-black selection:bg-DarkRed">
                    {project.title}
                  </h3>
                  <div className="w-12 md:w-16 h-1 bg-DarkRed mb-6 md:mb-8"></div>
                  <p className="text-gray-400 text-sm md:text-[15px] mb-8 md:mb-10 leading-[1.8] font-SatoshiSec max-w-lg selection:text-black selection:bg-white">
                    {project.description}
                  </p>
                  <Link to="/Explore">
                    <button className="border border-white/30 px-6 md:px-8 py-3 md:py-4 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-DarkRed hover:border-DarkRed hover:text-white transition-all duration-300 w-fit cursor-pointer">
                      View Project
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
