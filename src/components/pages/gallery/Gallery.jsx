import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import sectionElement from "../../../assets/section-element.png";
import Element1 from "../../../assets/element-1.png";
import Element2 from "../../../assets/element-2.png";
import Element3 from "../../../assets/element-3.png";

import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from "./data";
import {
  Captions,
  Download,
  Fullscreen,
  Zoom,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";

import Map from "../../map/Map";

function Gallery() {
  const [index, setIndex] = useState(-1);

  const [visibleImages, setVisibleImages] = useState(12);
  const loadMoreProducts = () => {
    setVisibleImages((prevCount) => prevCount + 8);
  };

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
            Vibrant <br />
            Gallery
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[350px] p-2 text-xl rounded">
            <Link to={"/"}>Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Checkout</span>
          </div>
        </div>
      </div>

      {/* Gallery */}

      <section className="section__container">
        <Images
          data={slides.slice(0, visibleImages)}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />

        {/* load more images btn */}
        <div className="product__btn">
          {visibleImages < slides.length && (
            <button className="btn " onClick={loadMoreProducts}>
              Load More
            </button>
          )}
        </div>

        <Lightbox
          plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
          captions={{
            showToggle: true,
          }}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
          styles={{
            title: {
              maxWidth: "100%", // Apply max-width to the slide title
            },
          }}
        />

        <div className="rounded-[20px] overflow-hidden shadow-xl mt-20 px-[6%]">
          <Map />
        </div>
      </section>
    </>
  );
}

export default Gallery;
