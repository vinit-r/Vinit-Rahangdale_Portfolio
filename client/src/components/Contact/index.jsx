import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { showToast } from "../Shared/Toaster";
import Heading from "../Heading";
import emailjs from "@emailjs/browser";
import Animation from "../../assets/pdfFile/Animation.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const serviceId = `${import.meta.env.VITE_SERVICE_ID}`;
    const templateId = `${import.meta.env.VITE_TEMPLATE_ID}`;
    try {
      if (!formData?.name && !formData?.email && !formData?.message) {
        return showToast(`All fields are required`, "warning");
      }
      setShowLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: "Vinit",
          from_email: formData?.email,
          from_name: formData?.name,
          message: formData?.message,
          reply_to: formData?.email,
        },
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setShowLoading(false);
      return showToast(`Email sent Successfully`, "success");
    } catch (error) {
      setShowLoading(false);
      return showToast(`Something went wrong`, "error");
    }
  };

  return (
    <>
      <div className=" w-full text-white px-2 lg:px-28 py-5" id="contact">
        <Heading text={"Contact Me"} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:flex items-center">
            <div className="w-full">
              <Player
                src={Animation}
                background="transparent"
                speed={1}
                style={{ width: "100%"}}
                loop
                autoplay
              />
            </div>
            <div className="w-full p-2 sm:p-10 lg:max-w-xl rounded-md border-[1px] border-blue-600/30">
              <h1 className="text-2xl font-medium text-white">
                What do you want to ask
              </h1>
              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-white">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData?.name}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="John Doe"
                    className="block bg-[#111111] w-full lg:px-5 px-3 py-2 lg:py-3 mt-2 text-white rounded-md outline-none"
                  />
                </div>

                <div className="flex-1 mt-3 lg:mt-6">
                  <label className="block mb-2 text-sm text-white">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    value={formData?.email}
                    placeholder="johndoe@example.com"
                    className="block bg-[#111111] w-full lg:px-5 px-3 py-2 lg:py-3 mt-2 text-white rounded-md outline-none"
                  />
                </div>

                <div className="w-full mt-3 lg:mt-6">
                  <label className="block mb-2 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    onChange={handleOnChange}
                    value={formData?.message}
                    className="block bg-[#111111] w-full lg:px-5 px-3 py-2 lg:py-3 mt-2 text-white rounded-md outline-none"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  onClick={handleOnSubmit}
                  className={` w-full px-6 py-2 lg:py-3 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400`}
                >
                  {!showLoading ? (
                    "get in touch"
                  ) : (
                    <div
                      className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                      role="status"
                      aria-label="loading"
                    />
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
