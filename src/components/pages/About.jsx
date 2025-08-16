import CountUp from "react-countup";
import authorImg from "../../assets/faces-4.jpg";
import sighatureImg from "../../assets/signature.png";

import heroImg from "../../assets/about-2.png";
import { Link } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

function About() {
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
          <h1 className="text-7xl font-semibold">
            Come as guests <br />
            leave as family
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">About</span>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fefe] py-[80px] px-[5%] w-full pb-0  ">
        <div className="w-full p-[40px] lg:p-[100px] bg-white rounded-[20px] shadow-2xl relative z-[10]  ">
          <div className="mx-auto">
            <div className="mb-12">
              <span className="bg-[#d5f1f1] text-xs px-4 py-2 rounded-full uppercase tracking-widest text-gray-600 ">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mt-4 text-[#1d2b3a] ">
                Story about us
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[15px] ">
              <div>
                <p className="mb-5 text-gray-700">
                  Our story began with a simple vision — to create a place where
                  the beauty of calm living meets the warmth of true
                  hospitality. Years ago, this land was nothing more than an
                  untouched escape, embraced by gentle breezes and serenity.
                  Standing here, our founders felt a spark — a belief that such
                  tranquility should be shared with the world.
                </p>

                <p className="mb-5 text-gray-700">
                  Brick by brick, dream by dream, they shaped a retreat where
                  every detail speaks of comfort, elegance, and care. From the
                  carefully chosen interiors to the soothing color palettes,
                  every corner was designed to make guests feel at ease. The
                  vibrant yet serene atmosphere became our signature — a promise
                  that each guest would leave not only rested, but inspired.
                </p>
              </div>

              <div>
                <p className="mb-5 text-gray-700">
                  Today, our hotel stands as a living story — one written by the
                  passion of its founders and enriched by every guest who has
                  walked through our doors. Here, every smile, every sunset, and
                  every shared moment is part of a legacy we continue to build —
                  a legacy of peace, beauty, and heartfelt hospitality.
                </p>
                <p className="mb-5 text-gray-700">
                  Nestled in the heart of Osogbo, we draw inspiration from the
                  city’s cultural soul — its art, its history, and its warm
                  people. Whether you’re here to explore the vibrant markets,
                  visit the sacred groves, or simply escape into a world of
                  comfort, our doors remain open, ready to welcome you into the
                  story we’ve been telling since the very beginning.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <img
                      src={authorImg}
                      alt="Nicholas Obazei"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <a
                        href="https://www.clinicraftstudios.xyz"
                        target="_blank"
                      >
                        <h4 className="font-semibold text-[31d2b3a]">
                          {" "}
                          Nicholas Obazei
                        </h4>
                        <span className="text-sm text-gray-500">
                          Hotel Website Admin
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* <img src={sighatureImg} alt='signature' className="w-32 object-contain"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fdfaf3] w-full px-[6%] lg:px-[3%] py-[100px] overflow-hidden pb-0 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start relative">
            <img
              src={heroImg}
              alt=""
              className="w-full max-w-md object-contain "
            />
          </div>
          <div className="text-[#1d2b3a] text-center lg:text-left ">
            <span className="bg-[#d5f1f1] text-xs px-4 py-2 rounded-full uppercase tracking-widest text-gray-600 inline-block mb-4 ">
              About Us{" "}
            </span>
            <h2 className="text-3xl sm:text[4xl font-semibold mb-6">
              Discover the <br />{" "}
              <span className="text-[#1d2b3a] ">Sound of Calm</span>
              <p className="text-gray-600 text-[15px] mb-4 ">
                Let the whispers of nature and the quiet rhythm of Osogbo wrap
                around your senses.
              </p>
              <p className="text-gray-600 text-[15px] mb-8">
                Our hotel was designed to be more than a stay; it’s a sanctuary
                where you can listen to the world slow down. Whether you’re
                sipping tea on the terrace, enjoying the quiet beauty of our
                surroundings, or waking to the distant hum of morning life in
                Osogbo, every moment is an invitation to breathe deeply and
                simply be.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* <button className="bg-[#ffa600] hover:bg-[#ecb934] text-white font-semibold px-6 py-3 rounded-full transition flex items-center gap-2">
                  <i className="ri-mail-line"></i>READ MORE
                </button> */}
                <Link
                  to={"/room"}
                  className="font-semibold text-[#1d2b3a] inline-flex items-center group "
                >
                  BOOK NOW
                  <span className="ml-1 group-hover:translate-x-1 transition-transform ">
                    →
                  </span>
                </Link>
              </div>
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#d0f5f5] py-[50px] w-full pt-0 ">
        <div className="w-full lg:w-[95%] mx-auto px-6 py-16 bg-white rounded-[20px] shadow-xl relative z-10 ">
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-10">
            {/* card 1 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2 ">
                <CountUp end={420} duration={3.5}>
                  <span className="text-[#ffa600]">+</span>
                </CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Visitors
              </p>
            </div>

            {/* card 2 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2 ">
                <CountUp end={109} duration={1.5}>
                  <span className="text-[#ffa600]">+</span>
                </CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Return Guests
              </p>
            </div>

            {/* card 3 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2 ">
                <CountUp end={3} duration={2.5}>
                  <span className="text-[#ffa600]">+</span>
                </CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Average Stay Duration
              </p>
            </div>

            {/* card 4 */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2b3a] mb-2 ">
                <CountUp end={1} duration={2.5}>
                  <span className="text-[#ffa600]">+</span>
                </CountUp>
              </h3>
              <p className="uppercase text-sm tracking-widest text-gray-600">
                Years in Operation 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
