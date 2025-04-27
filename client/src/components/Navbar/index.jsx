import React from "react";
import { Link } from "react-scroll";
import VrLogo from "../../../public/image/logo192.png"

// const navItems = [
//   {
//     name: 'contact me',
//     link: ''
//   },
//   {
//     name: 'contact me',
//     link: ''
//   }
// ]

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center text-white py-2 md:py-5 px-2 sm:px-3 w-full">
        <div className="flex md:gap-14 text-sm md:text-base justify-between md:justify-center items-center tracking-[1px] font-Noople w-full">
          <Link
            className="cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About me
          </Link>
          <div className="cursor-pointer">
            <img
              className="w-12 md:w-16 h-12 md:h-16 rounded-full"
              // src="../../../public/image/logo192.png"
              src={VrLogo}
              alt="VR-logo"
            />
          </div>
          <Link
            className="cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
