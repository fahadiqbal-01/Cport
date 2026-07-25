import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebaseConfig";
import { ref, push } from "firebase/database";
import { Bounce, toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

export const HireMeNow = () => {
  const [status, setStatus] = useState("submit");
  const [showMSG, setShowMSG] = useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    targetDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (setShowMSG === true) {
      window.scrollTo(0, 0);
    }
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, budget, targetDate, description } = formData;

    if (!name || !email || !budget || !targetDate || !description) {
      return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
      toast("Please enter a valid email address", {
        position: "bottom-right",
        autoClose: 4000,
        theme: "colored",
      });
      return;
    }

    setStatus("submitting...");

    try {
      await push(ref(db, "clientOrder"), {
        name,
        email,
        phone,
        budget,
        targetDate,
        description,
        createdAt: Date.now(),
      });
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, phone, budget, description, targetDate },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (err) {
      console.log(err);

      toast("Something went wrong!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setTimeout(() => {
        setStatus("submit");
      }, 3000);
      setShowMSG(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        targetDate: "",
        description: "",
      });

      setTimeout(() => {
        setShowMSG(false);
      }, 7000);
    }
  };

  return (
    <section>
      <AnimatePresence mode="wait">
        {!showMSG ? (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 overflow-hidden font-GeneralSans"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h1 className=" w-fit text-[18vw] sm:text-[15vw] md:text-[12vw] font-Gambarino font-bold leading-[0.85] tracking-tighter mb-12 sm:mb-16 md:mb-32 relative ">
                Contact me
                <span className=" absolute -right-8 top-0 text-5xl text-DarkRed ">
                  *
                </span>
              </h1>
            </motion.div>

            {/* --- MIDDLE: INFO & FORM GRID --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 mb-20 sm:mb-24 md:mb-40 w-full">
              {/* Left Column: Contact Information */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-4 font-mono text-sm tracking-wide flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-12 lg:gap-10 text-[#111111]/80"
              >
                <div className="flex-1">
                  <p className=" text-DarkRed ">fahadddd.im@gmail.com</p>
                </div>
                <div className="flex-1">
                  <p>+880 1748 996699</p>
                </div>
                <div className="flex-1">
                  <p>Barishal,</p>
                  <p>Bangladesh</p>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:col-span-8 flex flex-col gap-10 md:gap-14"
                onSubmit={handleOnSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-Gambarino font-bold text-xs uppercase tracking-widest text-[#111111]/60"
                  >
                    Name <span className=" text-DarkRed ">(required)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    placeholder="Tony Montana"
                    required
                    className="w-full bg-transparent border-b border-[#111111]/30 focus:border-DarkRed outline-none py-4 md:py-3 text-lg transition-colors appearance-none rounded-none text-[#111111] placeholder:text-[#111111]/30"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-Gambarino font-bold text-xs uppercase tracking-widest text-[#111111]/60"
                    >
                      Email <span className="text-DarkRed">(required)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      type="email"
                      placeholder="tonymontana@world.com"
                      required
                      className="w-full bg-transparent border-b border-[#111111]/30 focus:border-DarkRed outline-none py-4 md:py-3 text-lg transition-colors appearance-none rounded-none text-[#111111] placeholder:text-[#111111]/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-Gambarino font-bold text-xs uppercase tracking-widest text-[#111111]/60"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      type="tel"
                      placeholder="+1 234 567 890"
                      className="w-full bg-transparent border-b border-[#111111]/30 focus:border-DarkRed outline-none py-4 md:py-3 text-lg transition-colors appearance-none rounded-none text-[#111111] placeholder:text-[#111111]/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="budget"
                      className="font-Gambarino font-bold text-xs uppercase tracking-widest text-[#111111]/60"
                    >
                      Project Budget (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-lg text-[#111111]/50">
                        $
                      </span>
                      <input
                        id="budget"
                        name="budget"
                        onChange={handleChange}
                        value={formData.budget}
                        type="number"
                        placeholder="4864"
                        className="w-full bg-transparent border-b border-[#111111]/30 focus:border-DarkRed outline-none py-4 md:py-3 pl-6 text-lg transition-colors appearance-none rounded-none text-[#111111] placeholder:text-[#111111]/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="targetDate"
                      className="font-Gambarino font-bold text-xs uppercase tracking-widest text-[#111111]/60"
                    >
                      Target Date
                    </label>
                    <input
                      id="targetDate"
                      name="targetDate"
                      onChange={handleChange}
                      value={formData.targetDate}
                      type="date"
                      style={{ colorScheme: "light" }}
                      className="w-full bg-transparent border-b border-[#111111]/30 focus:border-DarkRed outline-none py-4 md:py-3 text-lg transition-colors appearance-none rounded-none text-[#111111]/80 placeholder:text-[#111111]/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="font-Gambarino font-bold text-xs uppercase tracking-widest text-[#111111]/60"
                  >
                    Project Description{" "}
                    <span className=" text-DarkRed ">(required)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                    placeholder="What are you building, what features do you need, and do you have designs ready?"
                    required
                    className="w-full bg-transparent border-b border-[#111111]/30 focus:border-DarkRed outline-none py-4 md:py-3 text-lg transition-colors appearance-none rounded-none resize-none h-[120px] md:h-[160px] text-[#111111] placeholder:text-[#111111]/30"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting..."}
                    className="w-full md:w-auto bg-[#111111] text-[#f4f4f0] font-bold text-sm tracking-widest uppercase px-16 py-5 hover:bg-black hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out"
                  >
                    {status}
                  </button>
                </div>
              </motion.form>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full mt-auto"
            >
              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#111111]/60 mb-6 sm:mb-8">
                <p>
                  Web & UX/UI
                  <br />
                  Developer
                </p>
                <p>
                  Visual
                  <br />
                  Creator
                </p>
                <p>
                  Barishal,
                  <br />
                  Bangladesh
                </p>
                <p className="md:text-right">2026</p>
              </div>

              <h1 className="text-[18vw] sm:text-[17vw] md:text-[14vw] font-Gambarino font-bold leading-[0.75] tracking-tighter w-full text-left mb-8 md:mb-16">
                fahad iqbal
              </h1>
            </motion.div>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-screen flex items-center justify-center bg-white px-6 text-center"
          >
            <div className="max-w-5xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                className="font-Gambarino text-3xl md:text-5xl lg:text-6xl text-black leading-[1.1] tracking-tight"
              >
                Thanks for reaching out! I'll review your project and follow up
                within 24 hours. If it's urgent, ping me directly at{" "}
                <span className="text-DarkRed underline decoration-1 underline-offset-[12px]">
                  fahadddd.im@gmail.com
                </span>
                . Let's see what we can build together.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HireMeNow;
