import { useState } from "react";
import TranslateApp from "./components/TranslateApp.jsx";
import "./App.css";
import logo from "/src/assets/logo.svg";

function App() {
  return (
    <div className=" bg-[url(assets/hero_img.jpg)] bg-no-repeat bg-cover bg-center xl:h-screen  xl:overflow-hidden p-5 ">
      <img src={logo} alt="logo" className=" my-10 lg:my-20 mx-auto " />

      <TranslateApp />
    </div>
  );
}

export default App;
