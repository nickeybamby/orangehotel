import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookmark from "../../assets/bookmark.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`navbar bg-white px-[1%] h-[100px] w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[95%] flex justify-between items-center z-[999] transition-all duration-300 ${
          isScrolled ? "bg-[#111111] shadow-md" : "bg-transparent"
        }`}
      >
        <Link to="/" className="text-4xl font-bold logo font-bricolage">
          Orange <span>Inn</span>
        </Link>

        {/* Menu */}
        <ul
          className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white md:pl-5 md:py-4 lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-full lg:opacity-100 gap-3 text-sm font-medium`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/room"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE BUTTON */}
        <div className="flex items-center gap-3">
          <Link to={'/room'}>
          <button
            // onClick={() => setIsModalOpen(true)}
            className="btn custom-btn bg-[#ffa600] hover:bg-[#ecb934] transition duration-300 flex items-center lg:py-4 lg:px-10 py-4 px-4 rounded-full gap-3 text-white uppercase tracking-widest"
          >
            <img
              src={bookmark}
              alt="bookmark"
              className="invert brightness-0 w-4 h-4"
            />
            <span className="hidden xl:block">Book Now</span>
          </button></Link>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`ri-menu-line text-4xl transition ${
                  isOpen ? "hidden" : "block"
                }`}
              ></i>
              <i
                className={`ri-close-line text-4xl transition ${
                  isOpen ? "block" : "hidden"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {/* MODAL FORM */}
        {/* {isModalOpen && (
          <div className="fixed nav-form inset-0 z-[999] flex items-center justify-center bg-[rgba(32,79,94,.9)]">
            <div className="bg-white w-full max-w-[500px] p-[40px] rounded-[15px] shadow-lg relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute bg-orange-500 hover:bg-orange-600  hover:text-white transition duration-300 top-4 right-4 rounded-[50%] w-[50px] h-[50px] text-xl text-black font-bold "
              >
                <span className="bi bi-x-lg"></span>
              </button>

              <h2 className="text-3xl font-semibold mb-12">Search</h2>

              <form action="" className="space-y-10">
                <div className="mb-10 relative ">
                  <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2">
                    {" "}
                    Check-in
                  </label>
                  <div className="flex flex-row  gap-3  h-[60px] rounded justify-between">
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    placeholderText="Select Check-in date"
                    className="w-full p-3 h-[60px] bg-[#eafbfb] rounded border outline-none"
                    dateFormat="dd/MM/yyyy"
                  ></DatePicker>
                  <i className="ri-calendar-line "></i>
                  </div>
                </div>

                <div className="mb-10 relative">
                  <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2">
                    {" "}
                    Check-out
                  </label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    placeholderText="Select date"
                    className="w-full p-3 h-[60px] bg-[#eafbfb] outline-none"
                    dateFormat="dd/MM/yyyy"
                  ></DatePicker>
                  <i className="ri-calendar-line"></i>
                </div>

                <div className="mb-10 relative">
                  <label className="block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2">
                    {" "}
                    Adults
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min="1"
                    className="w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                  />
                  <i className="ri-calendar-line"></i>
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 px-5 rounded-full w-full uppercase tracking-widest"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )} */}
      </nav>
    </>
  );
}

export default Nav;
