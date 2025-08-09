import CountUp from "react-countup";
import authorImg from "../../assets/faces-4.jpg";
import sighatureImg from "../../assets/signature.png";

import heroImg from "../../assets/about-2.png";
import { Link } from "react-router-dom";

import feature1 from "../../assets/feature-bed-1.svg";
import feature2 from "../../assets/feature-wifi-2.svg";
import feature3 from "../../assets/feature-dining-3.svg";

import service1 from "../../assets/services-1.png";
import service2 from "../../assets/services-2.jpg";
import service3 from "../../assets/services-3.webp";
import service4 from "../../assets/services-4.webp";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

function Services() {
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
          <h1 className="text-7xl font-semibold">Our Services</h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Services</span>
          </div>
        </div>
      </div>

      <div className="service w-full lg:px-[6%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase  ">
            Service
          </span>
          <h1 className="text-5xl font-semibold">Discover the touch of calm</h1>
        </div>

        <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full">
          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service1}
              alt="service image"
              className="w-full h-[250px] object-cover rounded-lg "
            />
            <span
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white
                   text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px] "
            >
              Restaurant
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service2}
              alt="service image"
              className="w-full h-[250px] object-cover rounded-lg "
            />
            <span
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white
                   text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px] "
            >
              Bar
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service3}
              alt="service image"
              className="w-full h-[250px] object-cover rounded-lg "
            />
            <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px] ">
              Parking
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden">
            <img
              src={service4}
              alt="service image"
              className="w-full h-[250px] object-cover rounded-lg "
            />
            <span
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white
                   text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px] "
            >
              Lounge
            </span>
          </div>
        </div>

        <div className="service-bottom mt-20 w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center gap-5">
          <p className="lg:w-1/2 ">
            Sip. Savor. Relax. Park with ease. <br /> Enjoy fine dining, unwind
            at the bar, lounge in comfort, and enjoy hassle-free parking – all
            in one place.
          </p>

          <button className="w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transition hover:bg-orange-600 rounded-full text-white uppercase  ">
            {" "}
            <Link to="./services"> Read More</Link>
          </button>
        </div>
      </div>

      <div className="features bg-[#fffaf0] w-full lg:px-[6%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20 z-[799] relative overflow-hidden ">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase  ">
            Features
          </span>
          <h1 className="text-5xl font-semibold">
            Features that will make your stay unforgettable.
          </h1>
        </div>
        <div className="features-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-[9] ">
          <div
            className="features-item bg-white rounded-xl py-14 px-5 "
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature1}
              alt="future-image"
              className=" bg-[#fcf9f2] h-[70px] w-[70px] py-5 px-5 rounded-lg "
            />
            <h3 className="mt-12 xxl:text-3xl text-2xlmb-4 font-semibold">
              Luxury Accommodation
            </h3>
            <p className="font-light">
              Experiencecomfort and style in our well-appointed rooms, designed
              for a relaxing stay
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl py-14 px-5 "
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature2}
              alt="future-image"
              className=" bg-[#fcf9f2] h-[70px] w-[70px] py-5 px-5 rounded-lg "
            />
            <h3 className="mt-12 xxl:text-3xl text-2xlmb-4 font-semibold">
              Uninterruted Wifi
            </h3>
            <p className="font-light">
              From Emails to Netflix, our uninterrupted Wifi keeps you online
              24/7
            </p>
          </div>
          <div
            className="features-item bg-white rounded-xl py-14 px-5 "
            style={{ boxShadow: "0 4px 20px rgba(32,79,94,.05" }}
          >
            <img
              src={feature3}
              alt="future-image"
              className=" bg-[#fcf9f2] h-[70px] w-[70px] py-5 px-5 rounded-lg "
            />
            <h3 className="mt-12 xxl:text-3xl text-2xlmb-4 font-semibold">
              On-Site Dining
            </h3>
            <p className="font-light">
              Enjoy a variety of culinary delights at our on-site restaurat,
              catering to different tastes and preferences.
            </p>
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
                <button className="bg-[#ffa600] hover:bg-[#ecb934] text-white font-semibold px-6 py-3 rounded-full transition flex items-center gap-2">
                  <i className="ri-mail-line"></i>READ MORE
                </button>
                <Link
                  to={"./rooms"}
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

export default Services;
