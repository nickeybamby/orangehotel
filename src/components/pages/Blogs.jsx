import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";
import blog4 from "../../assets/blog-5.jpg";
import blog5 from "../../assets/blog-6.jpg";
import blog6 from "../../assets/blog-12.jpg";
import avatar from "../../assets/faces-4.jpg";

import { Link } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

function Blogs() {
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
          <h1 className="text-7xl font-semibold">Our Blogs</h1>
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Blog</span>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f0e3] py-[60px] w-full pb-0 ">
        <div className="w-full lg-w-[95%] mx-auto py-16 px-8 md:px-14 bg-white rounded-[20px] shadow-xl relative z-10 ">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="bg-[#d5f1f1] text-xs px-4 py-2 rounded-full uppercase tracking-widest text-gray-600 ">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl fot-semibold mt-4 text-[#1d2b3a]">
              Publications
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                image: blog1,
                date: "12.08.2025",
                title: "Best arrival insurance comapny for your holiday trip",
                subtext: "Lets get awayyy"
              },
              {
                image: blog2,
                date: "12.08.2025",
                title: "Best arrival insurance comapny for your holiday trip",
                subtext: "Lets get awayyy"
              }
            ,
            //   {
            //     image: blog3,
            //     date: "12.08.2025",
            //     title: "Best arrival insurance comapny for your holiday trip",
            //     subtext: "Lets get awayyy"
            //   },
            //   {
            //     image: blog4,
            //     date: "12.08.2025",
            //     title: "Best arrival insurance comapny for your holiday trip",
            //     subtext: "Lets get awayyy"
            //   },
            //   {
            //     image: blog5,
            //     date: "12.08.2025",
            //     title: "Best arrival insurance comapny for your holiday trip",
            //     subtext: "Lets get awayyy"
            //   },
            //   {
            //     image: blog6,
            //     date: "12.08.2025",
            //     title: "Best arrival insurance comapny for your holiday trip",
            //     subtext: "Lets get awayyy"
            //   },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt="Blog Image"
                    className="w-full h-[320px] object-cover transform transition-transform duration-500 group-hover:scale-105 "
                  />
                </div>
                <div className="p-6 bg-[#f4fcfc] rounded-b-3xl  ">
                    <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                        <a className="flex items-center gap-2" href="https://www.clinicraftstudios.xyz" rel="noreferrer noopener">
                        <img src={avatar} alt="" className="w-7 h-7 rounded-full object-cover" />
                        <span className="font-medium text-yellow-700">Nicholas Obazei</span></a>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"/>
                        <span className="flex items-center gap-1">
                            <i className="ri-calendar-line"></i>{item.date}
                        </span>
                    </div>
                    <he className="font-semibold text-[20px] text-[#1d2b3a] mb-3 leading-snug ">{item.title}</he>
                    <p className="text-gray-600 text-[15px] mb-6">{item.subtext}</p>
                    <a href="" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group ">
                        <span className="border-b border-dotted border-[#1d2b3a]">READ MORE</span>
                        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </div>
              </div>
            ))}
          </div>
          {/* Desc */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left ">
            <p className="text-[#2a4b5e] text-sm md:text-base max-w-3xl  ">Hello from the other sideeee</p>
            <button className="bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold px-8 py-4 rounded-full transition duration-300 whitespace-nowrap ">
                VIEW ALL
            </button>
          </div>
        </div>
      </section>

      <div className="w-full lg:[4%] px-[8%] py-[100px] flex flex-col items-center justify center gap-10 relative overflow-hidden bg-transparent ">

        {/* Section Heading */}
        <span className="bg-[#d5f1f1] text-xs px-4 py-2 rounded-full uppercase tracking-wider text-gray-600">
            Our Blog
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d2b3a] text-center  ">
            Lattest Blog Publications
        </h2>

        {/* Blog Grid */}
      <div className="grid grid-col1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left">
        {/* Card 1 */}
        <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
                <img src={blog3} alt="" className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 bg-[#f2fbfb] ">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={avatar} alt="" className="w-6 h-6 object-cover rounded-full"/>
                    <span>Nicholas O.</span> <span className="w-1 h-1 rounded-full bg-gray-400"/>
                    <span>13.05.2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next vacation should be on the beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    A comprehensive comparison of top travel insurance providers tailored for older travelers.
                </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
                <img src={blog4} alt="" className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 bg-[#f2fbfb] ">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={avatar} alt="" className="w-6 h-6 object-cover rounded-full"/>
                    <span>Nicholas O.</span> <span className="w-1 h-1 rounded-full bg-gray-400"/>
                    <span>13.05.2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next vacation should be on the beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    A comprehensive comparison of top travel insurance providers tailored for older travelers.
                </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
                <img src={blog4} alt="" className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 bg-[#f2fbfb] ">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={avatar} alt="" className="w-6 h-6 object-cover rounded-full"/>
                    <span>Nicholas O.</span> <span className="w-1 h-1 rounded-full bg-gray-400"/>
                    <span>13.05.2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next vacation should be on the beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    A comprehensive comparison of top travel insurance providers tailored for older travelers.
                </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
                <img src={blog5} alt="" className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 bg-[#f2fbfb] ">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={avatar} alt="" className="w-6 h-6 object-cover rounded-full"/>
                    <span>Nicholas O.</span> <span className="w-1 h-1 rounded-full bg-gray-400"/>
                    <span>13.05.2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next vacation should be on the beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    A comprehensive comparison of top travel insurance providers tailored for older travelers.
                </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
                <img src={blog6} alt="" className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 bg-[#f2fbfb] ">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={avatar} alt="" className="w-6 h-6 object-cover rounded-full"/>
                    <span>Nicholas O.</span> <span className="w-1 h-1 rounded-full bg-gray-400"/>
                    <span>13.05.2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next vacation should be on the beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    A comprehensive comparison of top travel insurance providers tailored for older travelers.
                </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="overflow-hidden">
                <img src={blog2} alt="" className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 bg-[#f2fbfb] ">
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                    <img src={avatar} alt="" className="w-6 h-6 object-cover rounded-full"/>
                    <span>Nicholas O.</span> <span className="w-1 h-1 rounded-full bg-gray-400"/>
                    <span>13.05.2025</span>
                </div>
                <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug">
                    Why your next vacation should be on the beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    A comprehensive comparison of top travel insurance providers tailored for older travelers.
                </p>
                <a href="#" className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link">READ MORE
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </div>
      </div>

      {/* Bottom Paragraph */}

      {/* <div className="mt-12 text-center .text-sm text-[#2a4b5e] max-w-3xl  "></div> */}
      </div>

      <section className="bg-[#f9fefe] py-[150px] w-full ">
            <div className="w-full lg:w-[95%] mx-auto px-8 md:px-14 bg-white rounded-[20px] shadow-xl relative z-[10] text-center py-20">
                <span className="bg-[#d5f1f1] text-xs px-4 py-2 rounded-full uppercase tracking-widest text-gray-600 inline-block mb-6 ">
                    Newsletter
                </span>
                <h2 className="text-3xl sm:text-6xl font-semibold text-[#1d2b3a] mb-6">Subscribe Our Newsletter</h2>
                <form className="max-w-xl mx-auto flex items-center justify-between bg-[#ecfafb] rounded-full overflow-hidden p-2 ">
                    <input type="email"
                    name="EMAIL"
                    placeholder="Enter your e-mail"
                    className="flex0grow px-6 py-4 bg-transparent text-[#1d2b3a] outline-none placeholder:text-[#1d2b3a]/70" required/>
                    
                    <button
                    type="submit"
                    className="ri-arrow-right-line text-xl bg-[#ffa600] hover:bg-[#23bcec] transition-transform hover:scale-105 w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer ">

                    </button>
                </form>
            </div>
      </section>

      
    </>
  );
}

export default Blogs;
