import heroImg from "../../assets/about-2.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import { FaWind, FaWifi, FaTv, FaShower } from "react-icons/fa";
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
      <div className="w-full py-[100px] px-[8%] lg:px-[6%] bg-[#f3fdfd] ">
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

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsDetails;
