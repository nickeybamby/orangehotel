import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import { Link } from "react-router-dom";
import Map from "../map/Map";

function Contact() {
  return (
    <>
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center flex-col text-center z-[55]">
        <img
          src={sectionElement}
          alt=""
          className="w-full h-full section-banner-element-1 absolute"
        />
        <img
          src={sectionElement}
          alt=""
          className="w-full h-full section-banner-element-2 absolute"
        />
        <img
          src={Element1}
          alt=""
          className="w-full h-full section-banner-element-3 absolute"
        />
        <img
          src={Element2}
          alt=""
          className="w-full h-full section-banner-element-4 absolute"
        />
        <img
          src={Element3}
          alt=""
          className="w-full h-full section-banner-element-5 absolute"
        />
        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          <h1 className="text-7xl font-semibold">Get In Touch</h1>
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Contact Us</span>
          </div>
        </div>
      </div>

      <section className="bg-[#f9fefe] py-[100px] w-full px-[5%] md:px100px">
        <div className="w-full px-[5%] bg-white rounded-[20px] border border-gray-300 shadow-xl relative z-[10] py-20 ">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold 
                        uppercase text-[#1d2b3a] ">First Name</label>
                        <div className="items-center bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 flex 
                        focus-within:ring-2 focus-within:ring-[#d1a410] transition-all duration-300">
                        <input 
                            type="text" 
                            placeholder="Enter Your First Name"
                            name="First Name"
                            className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                            required    
                        />
                        <i className="ri-user-line text-[#c4d110] text-sl ml-2 animate-plus"></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold 
                        uppercase text-[#1d2b3a] ">Last Name</label>
                        <div className="items-center bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 flex 
                        focus-within:ring-2 focus-within:ring-[#d1a410] transition-all duration-300">
                        <input 
                            type="text" 
                            placeholder="Enter Your Last Name"
                            name="Last Name"
                            className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                            required    
                        />
                        <i className="ri-user-smile-line text-[#c4d110] text-sl ml-2 animate-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold 
                        uppercase text-[#1d2b3a] ">E-mail</label>
                        <div className="items-center bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 flex 
                        focus-within:ring-2 focus-within:ring-[#d1a410] transition-all duration-300">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            name="Email"
                            className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                            required    
                        />
                        <i className="ri-mail-line text-[#c4d110] text-sl ml-2 animate-plus"></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold 
                        uppercase text-[#1d2b3a] ">Phone</label>
                        <div className="items-center bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 flex 
                        focus-within:ring-2 focus-within:ring-[#d1a410] transition-all duration-300">
                        <input 
                            type="number" 
                            placeholder="Enter Your Phone Number"
                            name="Phone"
                            className="w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60"
                            required    
                        />
                        <i className="ri-phone-line text-[#c4d110] text-sl ml-2 animate-plus"></i>
                        </div>
                    </div>
                </div>
                {/* Message */}
                <div className="flex flex-col gap-2 ">
                     <label className="text-sm font-semibold 
                        uppercase text-[#1d2b3a] ">Message</label>
                        <textarea 
                        rows={6}
                        placeholder="Your Message..."
                        className="w-full bg-[#fdfaf0] border border-[#eae0d0] rounded-lg px-4 py-3 resize-none outline-none text-[#1d2b3a] placeholder:text-[#1b2d3a]/60 focus-within:ring-2 focus-within:ring-[#d1a410] transition-all duration-300 "></textarea>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                    <p className="text-sm text-[#1d2b3a]/80 italic mb-4 md:mb-o " >
                    *We promise not to disclose your personal information to third parties.</p>
                    <button
                        type="submit"
                        className="bg-[#ffa600] hover:bg-[#ecb934] text-white px-10 py-3 rounded-full font-semibold tracking-widest hover:scale105 transition-tansform duration-300"
                    >
                        SEND
                    </button>
                </div>
            </form>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#e0f7fa] via-[#f3fcfd] to-[#e0f7fa] px-[8%] lg:px-[4%] py-[100px] ">
        <div className="mx-auto flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
                    <div className="bg-[#f8f0e3] text-[#ffa600] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl ">
                        <i className="ri-phone-line"></i>
                    </div>
                    <h4 className="text-[#1d2b3a] font-bold text-xl">+234 913 201 7988</h4>
                    <p className="text-base text-[#1d2b3a]/70">Call us anytime. We are available 24/7.</p>
                </div>
                <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
                    <div className="bg-[#f8f0e3] text-[#ffa600] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl ">
                        <i className="ri-mail-line"></i>
                    </div>
                    <h4 className="text-[#1d2b3a]  font-bold text-xl">contact@orangeinn.ng</h4>
                    <p className="text-base text-[#1d2b3a]/70">Write to us, we respond quickly.</p>
                </div>
                <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
                    <div className="bg-[#f8f0e3] text-[#ffa600] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl ">
                        <i className="ri-map-pin-line"></i>
                    </div>
                    <h4 className="text-[#1d2b3a] font-bold text-xl">Halleluyah Estate Osogbo, Osun State</h4>
                    <p className="text-base text-[#1d2b3a]/70">We invite you to visit.
                    </p>
                </div>
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-xl mt-20">
                <Map />
            </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
