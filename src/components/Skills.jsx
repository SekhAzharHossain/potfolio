import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import tailwind from "../assests/tailwind.png";
import react from "../assests/react.png";

const Skills = () => {
  return (
    <div className=" border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <h2 className=" text-gray-700 text-xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>

      <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} alt="html" />
        <p className=" mt-2">Html</p>
      </div>

      <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="css" />
        <p className=" mt-2">CSS</p>
      </div>
      <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascript} alt="javascript" />
        <p className=" mt-2">JavaScript</p>
      </div>
      <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="tailwind" />
        <p className=" mt-2">Tailwind</p>
      </div>
      <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="react" />
        <p className=" mt-2">React</p>
      </div>
    </div>
  );
};

export default Skills;
