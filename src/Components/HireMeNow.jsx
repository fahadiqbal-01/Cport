import React, { useEffect } from "react";
import { GiStarFormation } from "react-icons/gi";
import { getDatabase, push, ref, set } from "firebase/database";
import { easeOut, motion } from "framer-motion";

const HireMeNow = () => {
  const [form, setForm] = React.useState({
    number: "",
    mail: "",
    projectDetails: "",
    targetDate: "",
    budget: "",
  });
  const [showAlert, setShowAlert] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.mail &&
      !form.projectDetails &&
      !form.targetDate &&
      !form.budget
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!form.mail || !form.mail.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const db = getDatabase();
      const newRef = push(ref(db, "clients"));
      await set(newRef, {
        number: form.number,
        mailAddress: form.mail,
        projectDetails: form.projectDetails,
        targetDate: form.targetDate,
        budget: form.budget,
        createdAt: Date.now(),
      });

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);

      setForm({
        number: "",
        mail: "",
        projectDetails: "",
        targetDate: "",
        budget: "",
      });
      console.log("Client saved to Realtime DB");
    } catch (err) {
      console.error("Firebase write error:", err);
      alert("Failed to send. Check console for details.");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className=" xl:pt-[130px] lg:pt-[130px] md:pt-[130px] pt-[30px] ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 1.2, ease: easeOut }}
          className=" font-GeneralSans xl:text-[38px] lg:text-[34px] md:text-[30px] text-[28px] xl:mb-[70px] lg:mb-[70px] md:mb-[50px] mb-[40px] text-center selection:bg-black selection:text-white xl:px-0 px-2 "
        >
          Let’s Build Something Amazing Together 🤝
        </motion.h1>
        <form
          className=" flex xl:flex-row lg:flex-row md:flex-row flex-col justify-evenly xl:items-start lg:items-start md:items-start items-center
         px-4 xl:mb-[300px] lg:mb-[200px] z-50 "
        >
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              type: "spring",
              stiffness: 70,
            }}
            className=" xl:mb-0 lg:mb-0 md:mb-0 mb-6 "
          >
            <div className=" flex flex-col justify-start mb-6 ">
              <label className=" font-GeneralSans text-[20px] mb-2 select-none ">
                Project Details
              </label>
              <textarea
                value={form.projectDetails}
                onChange={(e) =>
                  setForm({ ...form, projectDetails: e.target.value })
                }
                className=" xl:w-[500px] lg:w-[300px] md:w-[300px] h-[150px] outline-4 outline-black focus:outline-[#91040c] rounded-md p-2 selection:bg-black selection:text-white  "
                required
              />
            </div>
            <div className=" flex flex-col justify-start mb-6 ">
              <label className=" font-GeneralSans text-[20px] mb-2 select-none ">
                Your Mail
              </label>
              <input
                type="email"
                value={form.mail}
                onChange={(e) => setForm({ ...form, mail: e.target.value })}
                className=" xl:w-[500px] lg:w-[300px] md:w-[300px] h-[50px] outline-4 outline-black focus:outline-[#91040c] rounded-md p-2 selection:bg-black selection:text-white  "
                required
              />
            </div>
            <div className=" flex flex-col justify-start ">
              <label className=" font-GeneralSans text-[20px] mb-2 select-none ">
                WhatsApp Number (optional)
              </label>
              <input
                value={form.number}
                onChange={(e) => setForm({ ...form, number: e.target.value })}
                type="tel"
                className=" xl:w-[500px] lg:w-[300px] md:w-[300px] h-[50px] outline-4 outline-black focus:outline-[#91040c] rounded-md p-2 selection:bg-black selection:text-white  "
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              type: "spring",
              stiffness: 70,
            }}
          >
            <div className=" flex flex-col justify-start mb-6 ">
              <label className=" font-GeneralSans text-[20px] mb-2 select-none ">
                Target Date
              </label>
              <input
                value={form.targetDate}
                onChange={(e) =>
                  setForm({ ...form, targetDate: e.target.value })
                }
                type="date"
                className=" xl:w-[500px] lg:w-[300px] md:w-[300px] h-[50px] outline-4 outline-black focus:outline-[#91040c] rounded-md p-2 selection:bg-black selection:text-white  "
                required
              />
            </div>
            <div className=" flex flex-col justify-start mb-11 ">
              <label className=" font-GeneralSans text-[20px] mb-2 select-none ">
                Project Budget
              </label>
              <input
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                type="number"
                className=" xl:w-[500px] lg:w-[300px] md:w-[300px] h-[50px] outline-4 outline-black focus:outline-[#91040c] rounded-md p-2 selection:bg-black selection:text-white  "
                required
                min="0"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="xl:w-[500px] lg:w-[300px] md:w-[300px] w-full font-GeneralSans text-[28px] text-white py-[6px] bg-[#91040c] outline-4 outline-[#91040c] rounded-lg mb-6
            hover:bg-[#000000] hover:text-white hover:outline-[#000000] duration-300 ease-out cursor-pointer select-none "
            >
              Hire
            </button>

            {showAlert && (
              <div className="text-green-600 font-bold">Submitted!</div>
            )}

            <div className="mb-[50px] flex justify-start items-center mt-4 gap-[10px] select-none ">
              <p className="inline-block drop-shadow-2xl text-[30px] text-black font-aktura select-none text-center leading-[25px] z-50">
                FAHAD <br /> IQBAL
              </p>
              <div>
                <p className="text-black font-GeneralSans font-extrabold text-[18px] items-start mt-[-5px]">
                  Work With Fahad
                </p>
                <p className="text-black text-[12px] items-start mt-[6px]">
                  Responds in about 2 hours
                </p>
              </div>
            </div>
          </motion.div>
        </form>
      </section>
    </>
  );
};

export default HireMeNow;
