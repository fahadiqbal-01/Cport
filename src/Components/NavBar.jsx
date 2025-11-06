import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
import { easeOut } from "motion";

const NavBar = () => {
  return (
    <>
      <nav className=" pt-[20px] pb-[10px] w-full ">
        <ul className=" flex gap-[20px] items-center justify-center p-0 m-0 mx-auto ">
          <Link to="/explore">
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 100, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: easeOut,
                type: "spring",
                stiffness: 70,
              }}
              viewport={{ once: true }}
              className="drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50 
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-[#91040c] after:absolute after:left-0 after:bottom-[-3px] after:duration-300
               after:ease-out after:-z-50 hover:text-white hover:after:w-[100%] duration-300 ease-out  relative"
            >
              Explore
            </motion.li>
          </Link>

          <Link to="/" className=" z-50 ">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ delay: 0.5, duration: 1.4, ease: easeOut }}
              viewport={{ once: true }}
              className=" inline-block drop-shadow-2xl ml-[10px] text-[30px] font-aktura cursor-pointer select-none text-center leading-[30px] z-50 "
            >
              FAHAD <br /> IQBAL
            </motion.li>
          </Link>

          <Link to="/about">
            <motion.li
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 100, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: easeOut,
                type: "spring",
                stiffness: 70,
              }}
              viewport={{ once: true }}
              className=" drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-[#91040c] after:absolute after:right-0 after:bottom-[-3px] after:duration-300
               after:ease-out after:-z-50 hover:text-white hover:after:w-[100%] duration-300 ease-out relative"
            >
              About Me
            </motion.li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
