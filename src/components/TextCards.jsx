import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const TextCards = ({ message }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md text-white p-2 md:p-4 rounded-xl shadow-lg text-xs md:text-base">
      <p>{message.text_post}</p>
        
        <div className=" sharebuttons flex items-center justify-end px-2 gap-2 mt-4  ">
          <button
            className="text-xs"
            onClick={() => navigator.clipboard.writeText(message)}
          >
            <FaRegCopy className="text-sm hover:text-cyan-400 hover:translate-y-[2px] transition-all ease-in" />
          </button>
      
        </div>
      </div>
    </div>
  );
};

export default TextCards;
