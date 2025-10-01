import React from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import ContainerSec from "./ContainerSec";
import { motion } from "motion/react";

export const ContactMSG = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [showAlertSec, setShowAlertSec] = React.useState(false);
  const [showAlertThi, setShowAlertThi] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    mail: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mail || !form.message) {
      setShowAlertSec(true);
      setTimeout(() => {
        setShowAlertSec(false);
      }, 3000);
      return;
    } else if (!form.mail.includes("@") || !form.mail.includes(".com")) {
      setShowAlertThi(true);
      setTimeout(() => {
        setShowAlertThi(false);
      }, 3000);
      return;
    } else {
      const db = getDatabase();
      set(push(ref(db, "messages")), {
        name: form.name,
        mailAddress: form.mail,
        message: form.message,
      }).then(() => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        setForm({
          name: "",
          mail: "",
          message: "",
        });
      });
    }
  };

  return (
    <section className=" w-full h-screen pt-[60px] " >
      <motion.div
        key="loader"
        className=" inset-0 flex items-center justify-center mt-[60px] "
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContainerSec>
          <h2
            className=" xl:text-[40px] lg:text-[35px] text-[30px] font-cabinet text-center text-black xl:leading-[75px] lg:leading-[60px] md:leading-[60px] sm:leading-[50px] leading-[50px]
         selection:text-white selection:bg-black mb-[38px] "
          >
            Got a Question? I’m Just a Message Away.
          </h2>
          <form className=" flex flex-wrap justify-center items-center gap-[26px] ">
            <input
              value={form.name}
              placeholder="Your Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className=" outline-4 outline-black rounded-xl mx-[20px] w-full h-[50px] p-[16px] focus:outline-[#d50201]
            font-GeneralSans placeholder:font-GeneralSans text-[16px] placeholder:text-[16px] text-gray-500
            selection:text-white selection:bg-black "
            />
            <input
              value={form.mail}
              placeholder="Your Email"
              onChange={(e) => setForm({ ...form, mail: e.target.value })}
              type="text"
              className=" outline-4 outline-black rounded-xl mx-[20px] w-full h-[50px] p-[16px] focus:outline-[#d50201]
            font-GeneralSans placeholder:font-GeneralSans text-[16px] placeholder:text-[16px] text-gray-500
             selection:text-white selection:bg-black"
            />
            <textarea
              value={form.message}
              placeholder="Your Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              type="text"
              className=" outline-4 outline-black rounded-xl mx-[20px] w-full h-[150px] p-[16px] focus:outline-[#d50201]
            font-GeneralSans placeholder:font-GeneralSans text-[16px] placeholder:text-[16px] text-gray-500
             selection:text-white selection:bg-black"
            />

            {showAlert && (
              <div className="text-green-500 text-center mt-4">
                Message sent successfully!
              </div>
            )}
            {showAlertSec && (
              <div className="text-red-500 text-center mt-4">
                Please fill all fields.
              </div>
            )}
            {showAlertThi && (
              <div className="text-red-500 text-center mt-4">
                Please enter a valid email address.
              </div>
            )}
          </form>
          <div className=" flex justify-center items-center ">
            <button
              onClick={handleSubmit}
              className=" mt-[30px] cursor-pointer overflow-hidden z-50 xl:text-[20px] lg:text-20px md:text-[20px] sm:text-[20px] text-[16px] text-[#d50201] font-GeneralSans bg-black xl:px-[100px] lg:px-[100px] md:px-[100px] sm:px-[80px] px-[60px] py-[10px] border-4 border-black 
         rounded-2xl hover:shadow-2xl hover:drop-shadow-2xl hover:text-black hover:scale-[1.2] hover:border-black hover:bg-transparent after:content-[''] after:h-[80px] after:w-[200px] after:bg-[#d50201] after:border-0 after:rounded-[500px]
         after:absolute after:bottom-[-100px] after:left-[50%] after:translate-x-[-50%] after:-z-50 after:duration-500 after:ease-out hover:after:bottom-[-40px] duration-300 ease-out relative "
            >
              Submit
            </button>
          </div>
        </ContainerSec>
      </motion.div>
    </section>
  );
};
