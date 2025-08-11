import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Index from "./Index";
import Map from "../map/Map";

function Checkout() {
  const { id } = useParams();
  const room = RoomsData.find((room) => room.id === id);

  if (!room) {
    return <div className="text-center py-20 text-xl ">Room not Found </div>;
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="section-banner booking-banner mt-5 pt-6 relative flex items-center justify-center flex-col text-center z-[55]">
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
            Booking <br />
            Confirmation
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Checkout</span>
          </div>
        </div>

        {/* Booking Content */}
        <div className="py-[150px] px-[6%] w-full ">
          <div className="bg-[#f7fefe] rounded-3xl shadow-md p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start  ">
            {/* Form section */}
            <div className="lg:col-span-2 my-8 z-40 text-start ">
              <h2 className="text-2xl font-semibold mb-6">Comfirm & Reserve</h2>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              ></form>
              <div>
                <label className="block text-sm font-semibold text-gray-600 my-4">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-md bg-[#e8fafa] outline-nonen "
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 my-4">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-md bg-[#e8fafa] outline-nonen "
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 my-4">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-[#e8fafa] outline-nonen "
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 my-4">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Number"
                  className="w-full p-3 rounded-md bg-[#e8fafa] outline-nonen "
                />
              </div>
              <button
                type="submit"
                className="bg-[#1cb6be] text-white px-6 py-3 rounded-full font-medium mt-8 hover:bg-[#16a3aa] transition duration-300"
              >
                <i className="ri-bookmark-line mr-2"></i> Confirm and Reserve
              </button>
            </div>

            {/* Booking Summary */}
            <div className="bg-white p-5 rounded-2xl shadow-md ">
              <img
                src={room.photos[0]}
                alt={room.title}
                className="rounded-xl mb-4 w-full h-[200px] object-cover"
              />
              <div className="flex justify-between text-sm text-gray-600 mb-2 px-1 mt-3">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line"></i>Max Adult: {room.adults}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">{room.title}</h3>

              {/* <div className="mt-4 space-y-3 text-sm text-gray-600 border-t border-gray-200 pt-4">
                <p className="flex justify-between"><span></span></p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
