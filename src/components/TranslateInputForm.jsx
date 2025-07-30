import React from "react";
import clsx from "clsx";
import Copy from "./Copy";
import exchangeIcon from "/src/assets/Horizontal_top_left_main.svg";
import Speech from "./Speech";
export default function TranslateInputForm({
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
            textState.language == "" && "bg-gray-600 text-white",
            "duration-200 hover:text-white hover:bg-gray-600    px-3 py-1.5 w-fit rounded-xl"
          )}
          onClick={() => {
            setTextState({ ...textState, language: "" });
          }}
        >
          Detect Language
        </li>
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
      </ul>
      {/* translated text areaa */}
      <textarea
        value={textState.text}
        onChange={handleOnChangeTextArea}
        name=""
        readOnly={isResult}
        className=" h-20 lg:h-40 w-full text-white font-bold outline-0 mx-3 mt-3 p-3 resize-none"
        id=""
      ></textarea>
      {/* character counter
       */}
      {!isResult && (
        <div className="text-gray-300 text-sm w-fit mb-3 ml-auto pt-3 pr-3">
          {textState.text.length}/500
        </div>
      )}
      {/* copy and sound button and translate button */}
      <div className="absolute bottom-6   flex   items-end  pl-5 pr-3  w-full gap-2 ">
        {/* sound */}
        <Speech textState={textState} />
        {/* copy */}
        <Copy textState={textState} />
        {/* translate button */}
        <button
          onClick={handleTranslateButton}
          className="cursor-pointer ml-auto flex items-center gap-1 border-1 border-blue-200 px-5 py-2 rounded-lg bg-blue-600 transition-all duration-150 hover:bg-blue-500 hover:scale-105"
        >
          <img src="/src/assets/Sort_alfa.svg" alt="" />
          <p className="text-white font-semibold"> Translate</p>
        </button>
      </div>
    </div>
  );
}
