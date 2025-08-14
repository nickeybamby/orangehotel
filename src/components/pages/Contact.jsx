import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import { Link } from "react-router-dom";
import Map from "../map/Map";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_12upr71",
        "template_gg3oslj", 
        formRef.current,
        "611w4BpD0gt_glodu" 
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setIsSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatusMessage("❌ Failed to send message. Try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <>
      {/* Banner Section */}
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center flex-col text-center z-[55]">
        {" "}
        <img
          src={sectionElement}
          alt=""
          className="w-full h-full section-banner-element-1 absolute"
        />{" "}
        <img
          src={sectionElement}
          alt=""
          className="w-full h-full section-banner-element-2 absolute"
        />{" "}
        <img
          src={Element1}
          alt=""
          className="w-full h-full section-banner-element-3 absolute"
        />{" "}
        <img
          src={Element2}
          alt=""
          className="w-full h-full section-banner-element-4 absolute"
        />{" "}
        <img
          src={Element3}
          alt=""
          className="w-full h-full section-banner-element-5 absolute"
        />{" "}
        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          {" "}
          <h1 className="text-7xl font-semibold">Get In Touch</h1>{" "}
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            {" "}
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;{" "}
            <span className="text-gray-500">Contact Us</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      {/* Contact Form */}
      <section className="bg-[#f9fefe] py-[100px] px-[5%]">
        <div className="bg-white rounded-[20px] border border-gray-300 shadow-xl p-10">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                required
                className="bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 outline-none"
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
                className="bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message..."
              required
              className="w-full bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 resize-none outline-none text-[#1d2b3a] placeholder:text-[#1b2d3a]/60 focus-within:ring-2 focus-within:ring-[#d1a410] transition-all duration-300"
            ></textarea>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#1d2b3a]/80 italic">
                *We promise not to disclose your personal information to third
                parties.
              </p>
              <button
                type="submit"
                disabled={isSending}
                className="bg-[#ffa600] hover:bg-[#ecb934] text-white px-10 py-3 rounded-full font-semibold tracking-widest transition-all duration-300"
              >
                {isSending ? "Sending..." : "SEND"}
              </button>
            </div>

            {statusMessage && (
              <p className="text-center mt-4 font-medium">{statusMessage}</p>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="w-full bg-gradient-to-br from-[#e0f7fa] via-[#f3fcfd] to-[#e0f7fa] px-[8%] lg:px-[4%] py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-[20px] p-8">
            <i className="ri-phone-line text-3xl text-[#ffa600]"></i>
            <h4 className="font-bold text-xl">+234 913 201 7988</h4>
            <p>Call us anytime. We are available 24/7.</p>
          </div>
          <div className="bg-white shadow-xl rounded-[20px] p-8">
            <i className="ri-mail-line text-3xl text-[#ffa600]"></i>
            <h4 className="font-bold text-xl">contact@orangeinn.ng</h4>
            <p>Write to us, we respond quickly.</p>
          </div>
          <div className="bg-white shadow-xl rounded-[20px] p-8">
            <i className="ri-map-pin-line text-3xl text-[#ffa600]"></i>
            <h4 className="font-bold text-xl">Halleluyah Estate, Osogbo</h4>
            <p>We invite you to visit.</p>
          </div>
        </div>
        <div className="rounded-[20px] overflow-hidden shadow-xl mt-20">
          <Map />
        </div>
      </section>
    </>
  );
}

export default Contact;
