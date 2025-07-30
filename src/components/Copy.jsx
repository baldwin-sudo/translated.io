import React from "react";

export default function Copy({ textState }) {
  const handleClick = () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(textState.text);
  };
  return (
    <button
      onClick={handleClick}
      className=" cursor-pointer border-2 border-gray-600 focus:border-purple-300 h-fit rounded-lg p-1  transition-all duration-150 hover:scale-105  hover:border-gray-300"
    >
      <img className="" src="/src/assets/Copy.svg" alt="" />
    </button>
  );
}
