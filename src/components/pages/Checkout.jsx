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

  const [showModal , setShowModal] = useState(false)
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
        <div className="py-[150px] px-[8%] w-full ">
            <div className="bg-[#f7fefe] rounded-3xl shadow-md p10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start ">
                {/* Form section */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold mb-6">
                        Comfirm & Payment
                    </h2>
                    <form 
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                    }}>
                    </form>
                    <div>
                        <label htmlFor=""></label>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}

export default Checkout;
