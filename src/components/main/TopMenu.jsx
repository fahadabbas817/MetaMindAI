import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const TopMenu = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Text',
      link: '/text'
    },
    {
      name: 'Images',
      link: '/images'
    },
    {
      name: 'Memes',
      link: '/memes'
    },
    {
      name: 'Videos',
      link: '/videos'
    },
  ]
  return (
    <div className=" text-white md:flex  w-full ">
      <p className="text-xl md:text-3xl mt-4 md:mt-8 ml-4 ">MetaMindAI</p>
    
      <div className={`postFormats border-2 border-slate-500 md:border-none w-80 md:w-fit p-1  md:p-2  mx-auto  lg:translate-x-[-6rem] gap-2 rounded-md md:rounded-full md:flex justify-between mt-4 z-10 relative `}>
      {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            className={({ isActive }) =>
              `transition-all ease-in cursor-pointer text-white p-1 sm:p-2 lg:p-4 text-sm sm:text-base lg:text-xl rounded-md sm:rounded-3xl px-3 lg:px-6 hover:backdrop-blur-md ${
                isActive
                  ? 'bg-gradient-to-r from-white/5 to-white/10' // Active styles
                  : 'hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
