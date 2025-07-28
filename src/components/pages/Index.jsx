import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import service1 from "../../assets/services-1.png";
import service2 from "../../assets/services-2.jpg";
import service3 from "../../assets/services-3.webp";
import service4 from "../../assets/services-4.webp";

import feature1 from "../../assets/feature-bed-1.svg";
import feature2 from "../../assets/feature-wifi-2.svg";
import feature3 from "../../assets/feature-dining-3.svg";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";

import heroImg from "../../assets/about.png";

import avatar1 from "../../assets/review-1.jpg";
import avatar2 from "../../assets/review-2.jpg";
import avatar3 from "../../assets/review-3.jpg";
import avatar4 from "../../assets/review-4.jpg";
import avatar5 from "../../assets/review-5.jpg";
import avatar6 from "../../assets/review-6.jpg";

import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";
import blog4 from "../../assets/blog-5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Economy", "Standard", "Luxury"];

  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  return (
    <>
      <div className="hero w-full lg:px-[6%] px-[8%] py-[150px] flex items-center justify-center gap-20">
        <div className="hero-content w-full flex flex-col gap-4 z-9 relative mt-4">
          <span className="text-[#204f6e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base  ">
            {" "}
            Welcome Friend
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600]  ">
            A perfect place to feel <br /> at ease with calm comfort.
          </h1>

          <form
            action=""
            className="w-full flex justify-between items-center gap-2 bg-white contact-form p-2"
          >
            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2">
                {" "}
                Check-in
              </label>
              <div className="flex flex-row  gap-3  h-[60px] rounded justify-between">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Select Check-in date"
                  className="w-auto xl:w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded border outline-none"
                  dateFormat="dd/MM/yyyy"
                ></DatePicker>
                {/* <i className="ri-calendar-line "></i> */}
              </div>
            </div>

            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2">
                {" "}
                Check-out
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select date"
                className="w-auto xl:w-[350px] p-3 h-[60px] bg-[#eafbfb] outline-none"
                dateFormat="dd/MM/yyyy"
              ></DatePicker>
              {/* <i className="ri-calendar-line"></i> */}
            </div>

            <div className="relative input-box">
              <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2">
                {" "}
                Adults
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="w-auto xl:w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
              />
              {/* <i className="ri-calendar-line"></i> */}
            </div>

            <button
              type="submit"
              className="bg-[#ffa600] hover:bg-orange-600 transition duration-300 text-white rounded-full text-2xl w-xl-[100px] h-xl-[100px] w-[80px] h-[80px] "
            >
              <span className="bi bi-search"></span>
            </button>
          </form>
          <p className="text-[#5a8695] text-base mt-2">
            Relax, Recharge, Reimagine your stay...{" "}
          </p>
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

      <div className="features bg-[#fffaf0] w-full lg:px-[6%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20 z-[999] relative overflow-hidden ">
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

      <div className="py-[80px] ">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase  ">
            Rooms
          </span>
          <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight ">
            Our Best Rooms.
          </h1>
        </div>
      </div>

      <div className="w-full lg:px-[6%] px-[8%] pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((rooms) => (
            <div
              key={rooms.id}
              className="show-rooms bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative">
                <Swiper
                  modules={[Pagination]}
                  Pagination={{ clickable: true }}
                  className="w-full h-[280px] custom-swiper"
                >
                  {rooms.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo}
                        alt={`${rooms.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="bg-[#fffaf0] flex gap-4 py-3 text:sm">
                <span className="flex items-center gap-1">
                  <i className="bg-white shadow rounded py-1 px-3">
                    Adults : {rooms.adults}
                  </i>
                </span>
                {/* <span className="flex items-center gap-1">
                    <i className="bg-white shadow rounded py-1 px-3 ri-aspect-ratio-line">
                    </i>
                        Size : {rooms.size}
                </span> */}
              </div>
              <div className="px-6 pt-4 pb-4">
                <div className="py-4">
                  <h3 className="text-2xl font-semibold mb-1">{rooms.title}</h3>
                  <p className="text-md text-gray-500">{rooms.description}</p>
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between items-center">
                  <p className="text-lg font-bold text-[#000]">
                    ${rooms.price}
                  </p>
                  <Link to={`.rooms.${rooms.id}`}>
                    {" "}
                    <button className="w-12 h-12 bg-[#ec9523] rounded-full flex items-center justify-center text-white text-xl">
                      <i className="ri-bookmark-line"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about about-1 bg-[#fffaf0] lg:px-[6%] px-[8%] py-[50px] flex items-center flex-col lg:flex-row justify-between gap-20 relative overflow-hidden ">
        <div className="section-title text-start space-y-4 relative z-[9] lg:w-1/2 w-full ">
          <span className="bg-[#fffaf0] rounded-full px-2 font-bricolage tracking-wider text-sm uppercase ">
            About Us
          </span>
          <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight">
            {" "}
            Why more visitors choose us
          </h1>

          <ul className="flex flex-col gap-10">
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">01.</span>
              <div>
                <h4 className="md:text-2xl text-xl font-semibold mb-2">Peaceful Ambience</h4>
                <p className="text-base md:text-lg">A calm, quiet retreat away from the city's noise</p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">02.</span>
              <div>
                <h4 className="md:text-2xl text-xl font-semibold mb-2">Modern Interiors</h4>
                <p className="text-base md:text-lg">Vibrant, stylish spaces designed for comfort and class</p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">03.</span>
              <div>
                <h4 className="md:text-2xl text-xl font-semibold mb-2">Unmatched Hospitality</h4>
                <p className="text-base md:text-lg">Warm, attentive staff that makes every stay feel personal</p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row align-items-start gap-5">
              <span className="text-2xl font-bold text-[#ecb934]">04.</span>
              <div>
                <h4 className="md:text-2xl text-xl font-semibold mb-2">Value for Money</h4>
                <p className="text-base md:text-lg">Premium comfort without the premium price tag</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Index;
