import React, { useContext } from "react";
import { GeminiContext } from "../components/Context/GeminiContext";
import TopMenu from "../components/main/TopMenu";
import { Result } from "../components/main/Result";
import BottomSearch from "../components/main/BottomSearch";
import { useLocation } from "react-router-dom";

const TextGenerator = () => {
  const { messages } = useContext(GeminiContext);
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "");

  return (
    <div className="main">
      <TopMenu />
      <div className="main-container">
        {messages[currentPage].length === 0 ? (
          <div className=" intro displayer animate-fadeInTop w-full p-2 px-3 md:px-8 mt-32  text-center  transition-opacity duration-500">
            <h1 className="text-2xl sm:text-3xl md:text-[3rem] h-14 md:text-12 font-bold bg-gradient-to-r from-[#4b90ff] to-[#ff5547] bg-clip-text text-transparent mb-4">
              Spark ideas into words!
            </h1>
            <p className=" md:text-lg text-slate-200">
              Let us help you craft the perfect post or story in seconds.
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

export default TextGenerator;
