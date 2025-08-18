import heroImg from "../../assets/about-2.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import { FaWind, FaWifi, FaTv, FaShower, FaBreadSlice, FaCoffee } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";

import amenit1 from "../../assets/room-amenit-1.svg";
import amenit2 from "../../assets/room-amenit-2.svg";
import amenit3 from "../../assets/room-amenit-3.svg";
import amenit4 from "../../assets/room-amenit-4.svg";

import RoomsData from "../../Rooms.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Index from "./Index";
import Map from "../map/Map";

function RoomsDetails() {
  const { id } = useParams();
  const room = RoomsData.find((room) => room.id === id);

  if (!room) {
    return <div className="text-center py-20 text-xl ">Room not Found </div>;
  }

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
            Get your <br />
            dream room
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <Link to={"/room"}>Rooms</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">RoomsDetails</span>
          </div>
        </div>
      </div>

      {/* Show Rooms Details */}
      <div className="w-full py-[100px] px-[8%] lg:px-[4%] bg-[#f3fdfd] ">
        <h2 className="text-6xl font-bricolage font-bold mb-4 ">
          {room.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-start ">
          {/* Swiper Section */}
          <div className="w-full lg:w-2/3 p-5 rounded-2xl ">
            <Swiper
              spaceBetween={30}
              speed={1000}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="w-full h-[420px] bg-white shadow-lg rounded-xl overflow-hidden custom-swiper "
              style={{ padding: "10px" }}
            >
              {room.photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={photo}
                    alt={`${room.title}${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="py-[50px] pb-8 ">
              <h3 className="text-3xl font-bold my-[20px]">Key Features</h3>

              <div className="rooms-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <FaWind className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">
                    Air-conditioned
                  </p>
                </div>

                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <FaWifi className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">
                    Free Wi-fi
                  </p>
                </div>
                
                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <FaCoffee className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">
                    Complimentary Breakfast
                  </p>
                </div>

                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <FaTv className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">
                    Smart TV
                  </p>
                </div>

                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <FaShower className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">
                    Hot Shower
                  </p>
                </div>

                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <IoLogoNoSmoking className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">
                    No Smoking
                  </p>
                </div>

                <div
                  className="flex items-center gap-3
                         bg-white rounded-xl shadow-md p-4"
                >
                  <MdOutlinePets className="w-[50px] h-[50px] p-3 bg-[#f7e1ab] rounded-md text-[#ffa600]" />
                  <p className="font-semibold text-gray-600 text-xl">No Pets</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold my-[20px] mt-[60px]">
                Description
              </h2>

              <p className="py-3" style={{ fontWeight: "300" }}>
                {room.description}
              </p>

              {/* hidden amenities */}
              <div>
                {/*
              <h2 className="text-3xl font-bold my-[20px] mt-[60px]">
                Amenities
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-start mb-5">
                <div className="w-full lg:w-2/3">
                  <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg ">
                    <img
                      src={amenit1}
                      alt=""
                      className="w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md "
                    />
                    <h2 className="text-xl amenit-text font-semibold">
                      Air-Conditioned
                    </h2>
                    <p className="mt-3"></p>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg ">
                    <img
                      src={amenit2}
                      alt=""
                      className="w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md "
                    />
                    <h2 className="text-xl amenit-text font-semibold">
                      AirConditioned
                    </h2>
                    <p className="mt-3"></p>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg ">
                    <img
                      src={amenit3}
                      alt=""
                      className="w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md "
                    />
                    <h2 className="text-xl amenit-text font-semibold">
                      Air-Conditioned
                    </h2>
                    <p className="mt-3"></p>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg ">
                    <img
                      src={amenit4}
                      alt=""
                      className="w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md "
                    />
                    <h2 className="text-xl amenit-text font-semibold">
                      Air-Conditioned
                    </h2>
                    <p className="mt-3"></p>
                  </div>
                </div>
              </div> */}
              </div>

              <h2 className="text-3xl font-bold my-[20px] mt-[60px]">
                Location
              </h2>

              <Map />
            </div>
          </div>
          <div className="w-full lg:w-1/3 self-start sticky top-[125px] bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 ">
            <div className="border-2 border-blue-400 rounded-2xl px-6 py-4 text-center flex justify-center items-end ">
              <h2 className="text-3xl font-bold text-[#000] flex items-start ">
                <span className="text-sm"> ₦</span>
                {room.price}
              </h2>
              <p className="text-gray-500 text-sm font-normal ms-4 ">/night</p>
            </div>

            <div className="flex justify-around bg-[#f8f0e3] py-3 rounded-xl text-[#1d5c63] font-medium text-sm ">
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-lg"></i>Adults:{room.adults}
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-aspect-ratio-line text-lg"></i>Size:{room.size}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                CHECK-IN
              </label>
              <input
                type="date"
                className="w-full p-3 bg-[#f8f0e3] rounded-md outline-none "
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                CHECK-OUT
              </label>
              <input
                type="date"
                className="w-full p-3 bg-[#f8f0e3] rounded-md outline-none "
              />
            </div>

            <Link to={`/checkout/${room.id}`}>
              <button
                className="w-full py-3 bg-[#ffa600] hover:bg-[#ecb934] transition duration-300 text-white text-lg rounded-full flex items-center justify-center gap-2 mt-4
                     "
              >
                <i className="ri-bookmark-line"></i>BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta p-[50px] bg-[#f3fdfd] ">
        <div className="py-[100px] rounded-xl bg-white text-center shadow flex items-center justify-center  ">
          <div className="section-title text-center">
            <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider uppercase ">
              Call to action
            </span>

            <h1 className="text-6xl font-semibold text-center">
              Do you have any questions? <br />
              We are available 24/7
            </h1>
            <div className="flex items-center justify-center pt-[30px] gap-2">
              <Link to={"/contact"}>
                <button className="w-[170px] h-[50px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white ">
                  <i className="bi bi-envelope py-2"></i> GET IN TOUCH
                </button>
              </Link>
              <Link to={`/checkout/${room.id}`}>
                <button className="w-[150px] h-[50px] ">
                  BOOK NOW <i className="ri-arrow-right-line ps-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recommend */}
      <div className="w-full py-[100px] px-[8%] lg:px-[5%] bg-[#f3fdfd] ">
        <div className="section-title text-start space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider uppercase ">
            Welcome friend
          </span>
          <h1 className="text-5xl font-semibold">We recommend</h1>
        </div>
        <div className="mt-5 pt-5">
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              1399: { slidesPerView: 3.5 },
              1199: { slidesPerView: 2.5 },
              991: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            style={{ padding: "20px 0" }}
          >
            {RoomsData.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms">
                  {/* Room Photos Slider */}
                  <div className="relative">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      className="w-full h-[280px] custom-swiper"
                    >
                      {room.photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={photo}
                            alt={`${room.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Room Info */}
                  <div className="bg-[#fffaf0] flex gap-4 py-3 text-sm">
                    <span className="flex items-center gap-1">
                      <i className="bg-white shadow rounded py-1 px-3">
                        Adults : {room.adults}
                      </i>
                    </span>
                  </div>

                  {/* Room Details */}
                  <Link to={`/room/${room.id}`}>
                    <div className="px-6 pt-4 pb-4">
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold mb-1">
                          {room.title}
                        </h3>
                        <p className="text-md text-gray-500">
                          {room.description}
                        </p>
                      </div>
                      <div className="border-t mt-4 pt-4 flex justify-between items-center">
                        <p className="text-lg font-bold text-[#000]">
                          ${room.price}
                        </p>
                        <Link to={`/room/${room.id}`}>
                          <button className="w-12 h-12 bg-[#ec9523] rounded-full flex items-center justify-center text-white text-xl">
                            <i className="ri-bookmark-line"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default RoomsDetails;
