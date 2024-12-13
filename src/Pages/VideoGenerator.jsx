import TopMenu from "../components/main/TopMenu";

import BottomSearch from "../components/main/BottomSearch";
import { Result } from "../components/Result";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { GeminiContext } from "../components/Context/GeminiContext";
const VideoGenerator = () => {
  const { messages } = useContext(GeminiContext);
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "");
  return (
    <div className="main">
      <TopMenu />
      <div className="main-container">
        {messages[currentPage].length === 0 ? (
          <div className=" intro displayer w-full p-2 px-3 md:px-8 mt-32  text-center  transition-opacity animate-fadeInTop duration-500">
            <h1 className="text-3xl font-bold md:text-[3rem] h-16 md:h-12 bg-gradient-to-r from-[#4b90ff] to-[#ff5547] bg-clip-text text-transparent mb-4">
              Transform ideas into motion!!
            </h1>
            <p className=" text-base md:text-lg text-slate-200">
              Describe your concept, and we’ll bring it to life as a video.
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

export default VideoGenerator;
