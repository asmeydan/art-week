import React from "react";
import { FaPlay, FaStepBackward } from "react-icons/fa";
import { BsFillRecordFill } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { PiMonitor } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { RiSettings5Fill, RiArrowGoBackFill } from "react-icons/ri";

const TopPanel = () => {
  return (
    <div className=" w-full px-10 flex justify-between">
      <div className=" flex items-center text-4xl py-3 text-slate-300 gap-10">
        <div className=" flex gap-3">
          <div className=" bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600">
            <BiSolidDownArrow />
          </div>
          <div className=" bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600">
            <PiMonitor />
          </div>
        </div>
        <div className=" bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600">
          <VscSettings />
        </div>
      </div>

      <div className=" flex items-center gap-px text-4xl py-2">
        <div className="text-slate-300 bg-gray-700 p-2 rounded-l-md cursor-pointer hover:bg-gray-600">
          <FaStepBackward />
        </div>
        <div className=" text-slate-300 bg-gray-700 p-2 cursor-pointer hover:bg-gray-600">
          <FaPlay />
        </div>
        <div className=" text-red-500 bg-gray-700 p-2 rounded-r-md cursor-pointer hover:bg-gray-600">
          <BsFillRecordFill />
        </div>
      </div>

      <div className=" flex items-center text-5xl py-2 text-slate-300 gap-16">
        <div className=" p-2 rounded-md cursor-pointer hover:bg-gray-600">
          <RiArrowGoBackFill />
        </div>
        <div className=" p-2 rounded-md cursor-pointer hover:bg-gray-600" >
          <RiSettings5Fill />
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
