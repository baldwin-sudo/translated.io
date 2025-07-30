import React from "react";
import clsx from "clsx";
import exchangeIcon from "/src/assets/Horizontal_top_left_main.svg";
import Copy from "./Copy";
import Speech from "./Speech";
export default function TranslateResultForm({
  isResult,
  textState,
  setTextState,
  handleOnChangeTextArea,
  handleExchange,
  handleTranslateButton,
  isExchangeable,
}) {
  return (
    <div className="relative rounded-3xl bg-gray-800 border-1  border-gray-500 h-70  lg:h-90 pt-2 w-full lg:w-200 xl:w-150 opacity-90">
      {/* options selection */}
      <ul className="flex  mx-8 border-b-2 border-gray-700 font-semibold  text-xs sm:text-sm px-1 text-nowrap p-4">
        <li
          className={clsx(
            "text-gray-300 ",
            textState.language == "fr" && "bg-gray-600 text-white",
            "duration-200 hover:text-white hover:bg-gray-600    px-3 py-1.5 w-fit rounded-xl"
          )}
          onClick={() => {
            setTextState({ ...textState, language: "fr" });
          }}
        >
          French
        </li>
        <li
          className={clsx(
            "text-gray-300 ",
            textState.language == "es" && "bg-gray-600 text-white",
            "duration-200 hover:text-white hover:bg-gray-600    px-3 py-1.5 w-fit rounded-xl"
          )}
          onClick={() => {
            setTextState({ ...textState, language: "es" });
          }}
        >
          Spanish
        </li>
        <li
          className={clsx(
            "text-gray-300 ",
            textState.language == "en" && "bg-gray-600 text-white",
            "duration-200 hover:text-white hover:bg-gray-600    px-3 py-1.5 w-fit rounded-xl"
          )}
          onClick={() => {
            setTextState({ ...textState, language: "en" });
          }}
        >
          {" "}
          English
        </li>
        {/* exchange text button */}
        <li className="ml-auto">
          <button
            onClick={handleExchange}
            className={clsx(
              " border-gray-600 border-2 h-fit p-1 rounded-lg",
              isExchangeable
                ? "hover:border-gray-400 hover:scale-105 "
                : "hidden",
              "transition-all duration-50"
            )}
          >
            {" "}
            <img src={exchangeIcon} className="" alt="exchange button" />
          </button>
        </li>
      </ul>
      {/* translated text areaa */}
      <textarea
        value={textState.text}
        name=""
        readOnly
        className=" h-20 lg:h-40 w-full text-white font-bold outline-0 mx-3 mt-3 p-3 resize-none"
        id=""
      >
        hi
      </textarea>

      {/* copy and sound button and translate button */}
      <div className="absolute bottom-6   flex   items-end  pl-5 pr-3  w-full gap-2 ">
        {/* sound */}
        <Speech textState={textState} />
        {/* copy */}
        <Copy textState={textState} />
        {/* translate button */}
      </div>
    </div>
  );
}
