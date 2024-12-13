import React, {useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GeminiContext } from "../Context/GeminiContext";
import { CiMenuFries } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";

const TopMenu = () => {
  const navigate = useNavigate();
  const { newChatbtn, extend, setExtend } = useContext(GeminiContext);
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Text",
      link: "/text",
    },
    {
      name: "Images",
      link: "/images",
    },
    {
      name: "Memes",
      link: "/memes",
    },
    {
      name: "Videos",
      link: "/videos",
    },
  ];
  return (
    <header>
      <nav>
        <div className=" text-white md:flex  w-full ">
          {/* Menu Icons like menu, create, Logo */}
          <div className="topMenuIcons mt-5 md:mt-3 flex items-center md:p-2 p-4 justify-between gap-8">
            <CiMenuFries
              className="text-3xl md:invisible  cursor-pointer ml-3 text-slate-200 hover:text-cyan-400 transition-all ease-in"
              onClick={() => setExtend(!extend)}
            />
            <h1
              onClick={() => navigate("/")}
              className=" cursor-pointer text-xl ml-3 md:text-3xl"
            >
              MetaMindAI
            </h1>
            <IoIosCreate
              onClick={() => newChatbtn()}
              className="text-white text-3xl md:hidden hover:text-cyan-400 transition-all ease-in"
            />
          </div>

          {/* navbar links like homepage and redirection */}
          <div
            className={`postFormats border-2 border-slate-500 md:border-none w-80 md:w-fit p-1  md:p-2  mx-auto  lg:translate-x-[-6rem] gap-2 rounded-md md:rounded-full md:flex justify-between mt-4 z-10 relative `}
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                className={({ isActive }) =>
                  `transition-all ease-in cursor-pointer text-white p-1 sm:p-2 lg:p-4 text-sm sm:text-base lg:text-xl rounded-md sm:rounded-3xl px-3 lg:px-6 hover:backdrop-blur-md ${
                    isActive
                      ? "bg-gradient-to-r from-white/5 to-white/10" // Active styles
                      : "hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopMenu;
