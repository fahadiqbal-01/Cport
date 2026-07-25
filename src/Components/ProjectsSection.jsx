import React from "react";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Invoicing & Billing for Freelancers",
    description:
      "A full-featured invoicing web app built for Bangladeshi freelancers and small businesses — in their own language. Hisab lets users create, send, and track invoices in BDT with native support for bKash and Nagad payments. Designed with a familiar Bengali-first UI, it removes the friction of using English-only tools that don’t reflect local payment realities.",
    mainImage: "hisab/3.png",
    subImage1: "hisab/2.png",
    subImage2: "hisab/1.png",
    src: "https://hisab.lazystudio.co/sign-up",
    reverse: false,
  },
  {
    id: 2,
    title: "Craft Job-Winning Resumes With AI",
    description:
      "An AI-powered resume builder that turns your work history into a polished, ATS-friendly resume in minutes. Users input their experience, skills, and target role — the AI generates tailored content, suggests stronger phrasing, and formats everything into a clean, downloadable resume. Built for job seekers who want professional results without the blank-page struggle.",
    mainImage: "resume/1.png",
    subImage1: "resume/2.png",
    subImage2: "resume/3.png",
    src: "https://resumebuilderairefinement.vercel.app/",
    reverse: true,
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-[#000000] text-white pt-24 md:pt-32 pb-24 md:pb-40 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="xl:text-[60px] lg:text-[50px] md:text-[40px] text-[32px]
               font-Gambarino text-center xl:mb-[100px] lg:mb-[80px] md:mb-[60px] mb-[40px] selection:text-black selection:bg-white uppercase tracking-tighter"
        >
          Selected{" "}
          <span className="font-aktura text-DarkRed lowercase text-[1.2em]">
            Projects
          </span>
        </motion.h2>

        <div className="flex flex-col gap-28 md:gap-32 lg:gap-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 md:gap-16 lg:gap-24`}
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
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full aspect-square object-cover transition-all duration-500"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                  viewport={{ once: true }}
                  className={`absolute z-20 ${project.reverse ? "-right-2 md:-right-10 top-[5%] md:top-[10%]" : "-left-2 md:-left-10 top-[5%] md:top-[10%]"} w-24 md:w-32 lg:w-48 border-[4px] md:border-[6px] border-[#111111] bg-black/50`}
                >
                  <img
                    src={project.subImage1}
                    alt="..."
                    loading="lazy"
                    className="w-full aspect-square object-cover mix-blend-multiply"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
                  viewport={{ once: true }}
                  className={`absolute z-20 ${project.reverse ? "left-0 md:-left-10 -bottom-6 md:-bottom-10 lg:-bottom-16" : "right-0 md:-right-10 -bottom-6 md:-bottom-10 lg:-bottom-16"} w-28 md:w-36 lg:w-52 border-[4px] md:border-[6px] border-[#111111] bg-white`}
                >
                  <img
                    src={project.subImage2}
                    alt="..."
                    loading="lazy"
                    className="w-full aspect-square object-cover grayscale"
                  />
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
                  <a
                    href={project.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border border-white/30 px-6 md:px-8 py-3 md:py-4 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-DarkRed hover:border-DarkRed hover:text-white transition-all duration-300 w-fit cursor-pointer">
                      View Project
                    </button>
                  </a>
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
