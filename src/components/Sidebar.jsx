import React, { useContext } from "react";

import { CiMenuFries } from "react-icons/ci";

import { IoCloseSharp } from "react-icons/io5";
import { GeminiContext } from "./Context/GeminiContext";
import { IoIosCreate } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
const Sidebar = () => {
  const { newChatbtn, summaryResult, extend, setExtend } =
    useContext(GeminiContext);

  return (
    <>
      <div
        className={`md:visible  top-0 fixed left-0 h-full z-50 bg-slate-700 transition-all duration-300 ease-in-out ${
          extend ? "w-72 md:w-96 p-4  visible" : "w-0 md:w-16 invisible"
        }`}
      >
        <div className="menuIcons flex justify-between px-2">
          <CiMenuFries
            className={`text-xl ${
              extend && "invisible"
            } md:text-3xl mt-5 md:mt-8 cursor-pointer ml-3 text-slate-200 hover:text-cyan-400 transition-all ease-in`}
            onClick={() => setExtend(!extend)}
          />
          {extend && (
            <IoCloseSharp
              className="text-3xl md:text-3xl mt-5 md:mt-8 cursor-pointer ml-3 text-slate-200 hover:text-cyan-400 transition-all ease-in"
              onClick={() => setExtend(!extend)}
            />
          )}
        </div>

        {/* New Summary Button */}

        <div
          onClick={() => newChatbtn()}
          className={`flex cursor-pointer mt-6 items-center text-center gap-1 md:gap-2 ${
            extend && "bg-slate-500 rounded-lg"
          } p-1 md:p-2 items-center max-w-40`}
        >
          <IoIosCreate className="ml-3 text-3xl  hover:text-cyan-400 transition-all ease-in text-white" />
          {extend && <p className="text-sm  text-white">New Summary</p>}
        </div>

        {/* Summary Section */}
        {extend && (
          <div className="Summary mt-10">
            <h3 className="text-lg font-bold text-white">Summary</h3>
            <div className="summaryMessages mt-4 rounded-md max-h-[30rem] overflow-y-scroll overflow-x-hidden">
              {summaryResult !== "" && (
                <div className="summaryResult w-full bg-slate-600 text-white mt-2 rounded-lg p-3">
                  {/* Render the summary */}
                  <p className="text-xs md:text-sm md:leading-relaxed mb-4 text-left">
                    {summaryResult.summary}
                  </p>

                  {/* Render metadata */}
                  {summaryResult.metadata?.length > 0 && (
                    <div>
                      <h4 className="text-md font-semibold mb-2">
                        Related Articles
                      </h4>
                      <ul className="space-y-2">
                        {summaryResult.metadata.map((item, index) => (
                          <li
                            key={index}
                            className="bg-slate-700 p-3 rounded-md hover:bg-slate-500 transition-colors"
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline font-medium block mb-1"
                            >
                              {item.title}
                            </a>
                            <p className="text-sm text-gray-300">
                              {item.snippet}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {item.source}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className=" sharebuttons flex items-center justify-end px-2 gap-2 mt-4  ">
                            <button
                              className="text-xs"
                              onClick={() => navigator.clipboard.writeText(message)}
                            >
                              <FaRegCopy className="text-sm hover:text-cyan-400 hover:translate-y-[2px] transition-all ease-in" />
                            </button>
                        
                          </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
