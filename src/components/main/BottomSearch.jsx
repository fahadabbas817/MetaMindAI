import React from "react";

import { IoIosSend } from "react-icons/io";
import { useContext } from "react";
import { GeminiContext } from "../Context/GeminiContext";
import { useLocation } from "react-router-dom";

const BottomSearch = () => {
  const {  loading, prompt, setPrompt, handleInputSubmit, messages } =
    useContext(GeminiContext);

  const location = useLocation();
  const currentPage = location.pathname.replace("/", ""); // e.g., "text", "image", "video", "meme"

  return (
    <div
      className={`main-bottom absolute flex flex-col w-full transition-all ease-in px-5 max-w-[900px]  ${
        messages[currentPage].length !== 0 ? "bottom-0" : "bottom-52"
      } `}
    >
      <div
        className="search h-16 md:h-24 flex justify-between items-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md text-white p-4 rounded-full shadow-lg "
        onKeyDown={(e) =>
          e.key === "Enter" && handleInputSubmit(prompt, currentPage)
        }
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
          className="bg-transparent text-white border-none text-lg p-4 outline-none flex-1 w-72 border-2"
          type="text"
          placeholder="What would you like to generate"
        />
        <div className="searchbar-image">
          {/* <img src={assets.Add_Record} alt="" />
          <img src={assets.Add_Image} alt="" /> */}
          {prompt && (
            <span
              className="cursor-pointer"
              onClick={() => handleInputSubmit(prompt, currentPage)}
            >
              <IoIosSend className=" text-3xl md:text-3xl mr-4 text-white hover:text-cyan-400 transition-all ease-in" />
            </span>
          )}
        </div>
      </div>
      <p className="bottomtext  text-[2px] md:text-sm text-white">
        Please crosscheck the information from cited links
      </p>
    </div>
  );
};

export default BottomSearch;
