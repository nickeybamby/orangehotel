import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import Element1 from "../../assets/element-1.png";
import Element2 from "../../assets/element-2.png";
import Element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";

import Map from "../map/Map";

function Gallery() {

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
            Booking <br />
            Confirmation
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Checkout</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
