import React from "react";

export default function Speech({ textState }) {
  const handleClick = () => {
    let utterance = new SpeechSynthesisUtterance(textState.text);
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handleClick}
      className=" cursor-pointer border-2 border-gray-600 focus:border-purple-300 h-fit rounded-lg p-1  transition-all duration-150 hover:scale-105 hover:border-gray-300"
    >
      <img src="/src/assets/sound_max_fill.svg" alt="" />
    </button>
  );
}
