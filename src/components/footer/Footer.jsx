import { Link } from "react-router-dom";

import socialIcon1 from "../../assets/social-icon-1.svg";
import socialIcon2 from "../../assets/social-icon-2.svg";
import socialIcon3 from "../../assets/social-icon-3.svg";
import socialIcon4 from "../../assets/social-icon-4.svg";

function Footer() {
  return (
    <>
      <div className="px-[2%] ">
        <footer className="bg-white px-[4%] py-[100px] ">
          <div className="flex border-b border-gr pb-[50px] flex-col lg:flex-row lg:justify-between gap-10 ">
            <div className="lg:w-7/12">
              <Link
                to="/"
                className="text-4xl font-bold font-bricolage text-[#ffa600]"
              >
                Orange<span className="text-[#23bcec] font-bricolage">Inn</span>
              </Link>
              <p className="mt-5 font-light tracking-wide text-gray-700">
                Subscribe to our newsletter:
              </p>
              <div className="mt-5 flex items-center bg-blue-50 px-5 py-2 w-full max-w-md rounded-full">
                <input
                  type="text"
                  placeholder="Enter your E-mail"
                  className="bg-transparent flex-1 outline-none placeholder:text-gray-600 text-sm"
                />
                <i className="ri-arrow-right-line text-xl bg-[#ffa600] hover:bg-[#23bcec] transition duration-300 w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer "></i>
              </div>
            </div>

            <div className="lg:w-6/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] transition "
                    >
                      Home
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/about"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] transition"
                    >
                      About Hotel
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/services"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] transition "
                    >
                      Services
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/rooms"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] transition"
                    >
                      Rooms
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/blog"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] "
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/gallery"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] "
                    >
                      Gallery
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={"/contact"}
                      className="text-l font-semibold font-bricolage text-[#204f56] hover:text-[#ffa600] "
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={"/"}
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ffa600] transition  "
                    >
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={"/"}
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ffa600] transition  "
                    >
                      Terms and Conditions
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={"/"}
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ffa600] transition  "
                    >
                      Cookie Policy
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={"/"}
                      className="font-normal font-bricolage text-[#204f5e] hover:text-[#ffa600] transition  "
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[120px] flex-col lg:flex-row lg:justify-between gap-10  ">
            <div className="lg:w-7/12">
              <div className="flex items-center gap-3">
                <a href="#">
                  <img
                    src={socialIcon1}
                    alt=""
                    className="bg-[#ffa600] p-2 rounded-full hover:bg-[#00c3ff] transition duration-300"
                  />
                </a>
                <a href="#">
                  <img
                    src={socialIcon2}
                    alt=""
                    className="bg-[#ffa600] p-2 rounded-full hover:bg-[#00c3ff] transition duration-300 "
                  />
                </a>
                <a href="#">
                  <img
                    src={socialIcon4}
                    alt=""
                    className="bg-[#ffa600] p-2 rounded-full hover:bg-[#00c3ff] transition duration-300 "
                  />
                </a>
              </div>
              <p className="mt-5 font-light tracking-wide text-gray-700">
                {" "}
                {new Date().getFullYear()}. Orange Inn &copy; All rights
                reserved. | By
                <a
                  href="https://www.clinicraftstudios.xyz"
                  target="blank"
                  className="text-yellow-700 p-2 rounded-full hover:text-[#d65038] transition duration-300 font-medium font-bricolage"
                >
                  CST
                </a>
              </p>
            </div>
            <div className="lg:w-6/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-2/3">
                  <div className="flex flex-col gap-4">
                    <h5 className="font-semibold text-2xl">Contact</h5>
                    <p>+234 (0)91 3201 7988</p>
                    <p>Halleluyah Estate Osogbo, Osun State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
