import React from "react";
import "./index.css";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const socialMidea = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    className: "insta",
    link: "https://www.instagram.com/vinit___pawar/",
  },
  {
    name: "Linkdein",
    icon: <FaLinkedin />,
    className: "linkedin",
    link: "https://www.linkedin.com/in/vinit-rahangdale-a1864a245",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    className: "twitter",
    link: "https://twitter.com/VinitPawar2112",
  },
  {
    name: "Github",
    icon: <FaGithubSquare />,
    className: "git",
    link: "https://github.com/vinit-r",
  },
];
const footerLinks = [
  {
    name: "About Me",
    link: "about",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Education",
    link: "education",
  },
  {
    name: "Experience",
    link: "education",
  },
  {
    name: "Projects",
    link: "projects",
  },
];

function Footer() {
  // useEffect(() => {}, []);
  let doResizeResult = () => {
    console.log(window.innerWidth);
  };

  let debounce = (callback, delay) => {
    let myTimeout;
    return () => {
      clearTimeout(myTimeout);
      myTimeout = setTimeout(() => {
        callback();
      }, delay);
    };
  };

  let doDebounce = debounce(() => doResizeResult(), 1000);

  window.addEventListener("resize", () => doDebounce());
  return (
    <>
      <div className="w-full h-full bg-black px-1 py-2">
        <div className="flex flex-col w-full h-full justify-center items-center ">
          <div className="grid grid-cols-3 sm:flex text-white justify-between gap-2 sm:py-10 py-5">
            {footerLinks.map((items, index) => {
              return (
                <Link
                  key={index}
                  className="cursor-pointer p-1 hover:text-zinc-400 text-base sm:text-lg px-1 sm:px-2"
                  to={`${items?.link}`}
                  smooth={true}
                  duration={500}
                >
                  {items?.name}
                </Link>
                // <a
                //   key={index}
                //   // className={`p-1 hover:text-zinc-400 font-MoonWalk text-sm ${items?.className}`}
                //   className={`p-1 hover:text-zinc-400 text-base sm:text-lg px-1 sm:px-2`}
                //   href={`${items?.link}`}
                // >
                //   {/* {window.innerWidth <= 768 ? items?.icon : items?.name} */}
                //   {items?.name}
                // </a>
              );
            })}
          </div>
          <div className="grid grid-cols-4 text-white justify-between gap-x-2 w-1/2 sm:w-1/5">
            {socialMidea.map((items, index) => {
              return (
                <a
                  key={index}
                  // className={`p-1 hover:text-zinc-400 font-MoonWalk text-sm ${items?.className}`}
                  className={`p-1 hover:text-zinc-400 font-MoonWalk text-2xl sm:text-3xl text-center`}
                  href={`${items?.link}`}
                >
                  {/* {window.innerWidth <= 768 ? items?.icon : items?.name} */}
                  {items?.icon}
                </a>
              );
            })}
          </div>
          <div className="text-zinc-400 mt-10 md:text-sm text-xs font-MoonWalk">
            <p>Copyright &copy; 2023 Vinit Rahangdale</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
