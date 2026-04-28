import { easeInOut, easeOut } from "motion";
import { motion } from "framer-motion";
import Container from "./Container";
import LeftSlideSec from "./LeftSlideSec";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export const AboutProfile = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Top Bio Section */}
      <Container className="pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-center justify-between"
        >
          {/* Left Column: Image & Quick Info */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12 flex flex-col items-center lg:items-start relative">
            <div className="relative group mt-4 sm:mt-8 lg:mt-0 w-[85%] max-w-[280px] sm:max-w-[350px] mx-auto lg:mx-0">
              {/* Decorative Offset Background */}
              <div className="absolute inset-0 bg-DarkRed/5 translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-5 sm:group-hover:translate-x-6 group-hover:translate-y-5 sm:group-hover:translate-y-6"></div>
              
              <img 
                src="image/f3.PNG" 
                alt="Fahad Iqbal" 
                className="w-full rounded-xl shadow-xl object-cover" 
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-10 bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-black/5 z-10 transition-transform duration-500 group-hover:-translate-y-2 max-w-[calc(100%+32px)]">
                <h1 className="font-Satoshi font-bold text-DarkRed text-base sm:text-lg md:text-xl truncate">Fahad Iqbal</h1>
                <div className="w-6 sm:w-8 h-[2px] bg-black/10 my-2"></div>
                <p className="font-SatoshiSec text-[11px] sm:text-xs md:text-sm text-gray-600 truncate">Full-Stack Developer</p>
                <p className="font-SatoshiSec text-[11px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1 truncate">UI/UX Designer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12 mt-12 sm:mt-16 lg:mt-0 text-center lg:text-left selection:bg-DarkRed selection:text-white px-2 sm:px-0">
             <h3 className="text-DarkRed font-Satoshi font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6">About Me</h3>
             
             <h2 className="font-Gambarino text-[30px] min-[400px]:text-[35px] sm:text-[45px] md:text-[60px] leading-[1.1] md:leading-[1.05] text-black mb-6 sm:mb-8 md:mb-12">
               Crafting Web, Design, and <br className="hidden md:block"/>
               <span className="font-aktura text-DarkRed text-[50px] min-[400px]:text-[60px] sm:text-[85px] md:text-[110px] leading-[0.5] relative top-1 sm:top-2 md:top-6 inline-block mt-2 md:mt-0">Visual Stories</span>
             </h2>
             
             <p className="font-SatoshiSec text-gray-600 text-sm sm:text-base md:text-xl leading-[1.7] md:leading-[1.8] max-w-[650px] mx-auto lg:mx-0">
               I build full-stack SaaS applications and high-converting landing pages. Helping startups turn ideas into fast, scalable products — with clean UI, real authentication, and production-ready code.
             </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Marquee Section */}
      <LeftSlideSec />

      {/* Education & Experience Section */}
      <Container className="py-10 sm:py-16 md:py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 selection:bg-DarkRed selection:text-white"
        >
          {/* Education Timeline */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-DarkRed"></div>
              <h1 className="font-Gambarino text-[32px] sm:text-[40px] md:text-[50px] text-black leading-none">
                Education
              </h1>
            </div>

            <div className="border-l border-black/10 ml-2 sm:ml-4 lg:ml-0">
              
              {/* Ed Item 1 */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 pb-8 sm:pb-12 group">
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white border-[3px] sm:border-4 border-DarkRed rounded-full top-1 sm:top-1.5 left-0 -translate-x-[50%] group-hover:scale-125 transition-transform duration-300"></div>
                <h1 className="font-Satoshi font-bold text-[16px] sm:text-[18px] md:text-[20px] text-black leading-tight sm:leading-normal">Diploma in Computer Engineering</h1>
                <h2 className="font-SatoshiSec text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">Barishal Polytechnic Institute <span className="text-DarkRed font-bold sm:ml-2 block sm:inline mt-1 sm:mt-0 text-[10px] sm:text-xs uppercase tracking-widest">(Currently studying)</span></h2>
              </div>
              
              {/* Ed Item 2 */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 pb-8 sm:pb-12 group">
                <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black/20 rounded-full top-1.5 left-0 -translate-x-[50%] group-hover:bg-black/40 transition-colors duration-300"></div>
                <h1 className="font-Satoshi font-bold text-[16px] sm:text-[18px] md:text-[20px] text-black leading-tight sm:leading-normal">Higher School Certificate (HSC)</h1>
                <h2 className="font-SatoshiSec text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">Govt. Syed Hatem Ali College</h2>
              </div>
              
              {/* Ed Item 3 */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 pb-2 group">
                <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black/20 rounded-full top-1.5 left-0 -translate-x-[50%] group-hover:bg-black/40 transition-colors duration-300"></div>
                <h1 className="font-Satoshi font-bold text-[16px] sm:text-[18px] md:text-[20px] text-black leading-tight sm:leading-normal">Secondary School Certificate (SSC)</h1>
                <h2 className="font-SatoshiSec text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">Udayan Secondary School</h2>
              </div>

            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-8 lg:mt-0">
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-DarkRed"></div>
              <h1 className="font-Gambarino text-[32px] sm:text-[40px] md:text-[50px] text-black leading-none">
                Experience
              </h1>
            </div>

            <div className="border-l border-black/10 ml-2 sm:ml-4 lg:ml-0">
              
              {/* Exp Item 1 */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 pb-10 sm:pb-12 group">
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white border-[3px] sm:border-4 border-DarkRed rounded-full top-1 sm:top-1.5 left-0 -translate-x-[50%] group-hover:scale-125 transition-transform duration-300"></div>
                <h2 className="font-SatoshiSec text-DarkRed text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1">2024 – Present</h2>
                <h1 className="font-Satoshi font-bold text-[16px] sm:text-[18px] md:text-[20px] text-black leading-tight sm:leading-normal">Freelance Web Developer</h1>
                <p className="font-SatoshiSec text-gray-600 mt-2 sm:mt-4 leading-relaxed text-xs sm:text-sm md:text-base">
                  Designed and developed websites and landing pages for local clients. Handled client briefs, revisions, and final delivery end to end.
                </p>
              </div>

              {/* Exp Item 2 */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 pb-2 group">
                <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black/20 rounded-full top-1.5 left-0 -translate-x-[50%] group-hover:bg-black/40 transition-colors duration-300"></div>
                <h2 className="font-SatoshiSec text-gray-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1">Sep 2024 – Mar 2025</h2>
                <h1 className="font-Satoshi font-bold text-[16px] sm:text-[18px] md:text-[20px] text-black leading-tight sm:leading-normal">EDGE Training Program</h1>
                <p className="font-SatoshiSec text-gray-600 mt-2 sm:mt-4 leading-relaxed text-xs sm:text-sm md:text-base">
                  Web Development Trainee. Gained practical experience in modern web technologies and deployment workflows.
                </p>
              </div>

            </div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
};
