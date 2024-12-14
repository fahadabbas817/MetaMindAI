import React, { useContext} from "react";
import { GeminiContext } from "../components/Context/GeminiContext";
import TopMenu from "../components/main/TopMenu";

import { Result } from "../components/main/Result";
import BottomSearch from "../components/main/BottomSearch";
import { useLocation } from "react-router-dom";

const ImageGenerator = () => {
  const { messages } = useContext(GeminiContext);
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "");

  return (
    <div className="main">
      <TopMenu />
      <div className="main-container">
        {messages[currentPage].length === 0 ? (
          <div className=" intro displayer w-full p-2 px-3 md:px-8 mt-32  text-center animate-fadeInTop  transition-all duration-500">
            <h1 className=" text-2xl sm:text-3xl md:text-[3rem] h-16 md:h-12  font-bold bg-gradient-to-r from-[#4b90ff] to-[#ff5547] bg-clip-text text-transparent mb-4">
              Unleash your imagination!
            </h1>
            <p className="text-base md:text-xl text-slate-200">
              Describe your vision, and we'll create stunning images just for
              you.
            </p>
          </div>
        ) : (
          <Result />
        )}
        <BottomSearch />
      </div>
    </div>
  );
};

export default ImageGenerator;
