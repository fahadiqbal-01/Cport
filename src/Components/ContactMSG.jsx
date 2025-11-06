import React, { useEffect } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import ContainerSec from "./ContainerSec";
import { easeOut, motion } from "motion/react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // <- required for animations & styles

export const ContactMSG = () => {
  const [form, setForm] = React.useState({
    name: "",
    mail: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mail || !form.message) {
      Toastify({
        text: "Please fill in all required fields.",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#91040c", //  background
          color: "#ffffff", //  text
          fontFamily: "Gsans, sans-serif", // Custom font
          fontSize: "18px", // Font size// Orange border
          borderRadius: "8px", // Rounded corners
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      return;
    } else if (!form.mail.includes("@") || !form.mail.includes(".com")) {
      Toastify({
        text: "Please enter a valid email address.",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#f53022", //  background
          color: "#ffffff", //  text
          fontFamily: "Gsans, sans-serif", // Custom font
          fontSize: "18px", // Font size// Orange border
          borderRadius: "8px", // Rounded corners
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      return;
    } else {
      const db = getDatabase();
      set(push(ref(db, "messages")), {
        name: form.name,
        mailAddress: form.mail,
        message: form.message,
      }).then(() => {
        Toastify({
          text: "Message sent successfully!",
          duration: 2000,
          newWindow: true,
          close: false,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#205736", //  background
            color: "#ffffff", //  text
            fontFamily: "Gsans, sans-serif", // Custom font
            fontSize: "18px", // Font size// Orange border
            borderRadius: "8px", // Rounded corners
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        setForm({
          name: "",
          mail: "",
          message: "",
        });
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className=" w-full xl:h-screen lg:h-screen md:h-auto h-auto xl:pt-[60px] lg:pt-[60px] md:pt-[60px] pt-[-40px] ">
      <motion.div
        key="loader"
        className=" inset-0 flex items-center justify-center mt-[60px] "
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContainerSec>
          <motion.h2
            initial={{ opacitya: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className=" xl:text-[40px] lg:text-[35px] text-[30px] font-cabinet text-center text-black xl:leading-[75px] lg:leading-[60px] md:leading-[60px] sm:leading-[50px] leading-[50px]
         selection:text-white selection:bg-black mb-[38px] "
          >
            Got a Question? I’m Just a Message Away.
          </motion.h2>
          <form className=" flex flex-wrap justify-center items-center gap-[26px] ">
            <motion.input
              initial={{ opacitya: 0, y: 100 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              viewport={{ once: true }}
              value={form.name}
              placeholder="Your Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className=" outline-4 outline-black rounded-xl mx-[20px] w-full h-[50px] p-[16px] focus:outline-[#d50201]
            font-GeneralSans placeholder:font-GeneralSans text-[16px] placeholder:text-[16px] text-gray-500
            selection:text-white selection:bg-black "
            />
            <motion.input
              initial={{ opacitya: 0, y: 100 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              viewport={{ once: true }}
              value={form.mail}
              placeholder="Your Email"
              onChange={(e) => setForm({ ...form, mail: e.target.value })}
              type="text"
              className=" outline-4 outline-black rounded-xl mx-[20px] w-full h-[50px] p-[16px] focus:outline-[#d50201]
            font-GeneralSans placeholder:font-GeneralSans text-[16px] placeholder:text-[16px] text-gray-500
             selection:text-white selection:bg-black"
            />
            <motion.textarea
              initial={{ opacitya: 0, y: 100 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              viewport={{ once: true }}
              value={form.message}
              placeholder="Your Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              type="text"
              className=" outline-4 outline-black rounded-xl mx-[20px] w-full h-[150px] p-[16px] focus:outline-[#d50201]
            font-GeneralSans placeholder:font-GeneralSans text-[16px] placeholder:text-[16px] text-gray-500
             selection:text-white selection:bg-black"
            />
          </form>
          <div className=" flex justify-center items-center ">
            <motion.button
              initial={{ opacitya: 0, scale: 0 }}
              whileInView={{ opacity: 100, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: easeOut,
                type: "spring",
                stiffness: 150,
              }}
              viewport={{ once: true }}
              onClick={handleSubmit}
              className=" mt-[30px] cursor-pointer overflow-hidden z-50 xl:text-[20px] lg:text-20px md:text-[20px] sm:text-[20px] text-[16px] text-[#d50201] font-GeneralSans bg-black xl:px-[100px] lg:px-[100px] md:px-[100px] sm:px-[80px] px-[60px] py-[10px] border-4 border-black 
         rounded-2xl hover:shadow-2xl hover:drop-shadow-2xl hover:text-[#ffffff] hover:scale-[1.2] hover:border-black hover:bg-transparent after:content-[''] after:h-[80px] after:w-[200px] after:bg-[#000000] after:border-0 after:rounded-[500px]
         after:absolute after:bottom-[-100px] after:left-[50%] after:translate-x-[-50%] after:-z-50 after:duration-500 after:ease-out hover:after:bottom-[-40px] duration-300 ease-out relative "
            >
              Submit
            </motion.button>
          </div>
        </ContainerSec>
      </motion.div>
    </section>
  );
};
