"use client";
import BottomPanel from "@/components/BottomPanel";
import Instruments from "@/components/Instruments";
import Keys from "@/components/Keys";
import TopPanel from "@/components/TopPanel";
import React, { useState } from "react";
//import cNote from '../../notes/cNote.wav';

const page = () => {

  const handlePlay = (note) => {
    let audio = new Audio()
    audio.src = '../../notes/cNote.wav'
    console.log(`${note}`);
  };

  return (
    <div className=" w-screen overflow-x-hidden h-screen flex justify-center items-center">
      <div className=" flex flex-col relative border rounded w-full bg-gray-500 text-white">
        <TopPanel />

        <div className=" flex">
          <Instruments instruments={instruments} />
          <Keys instruments={instruments} keys={keys} />
        </div>

        <BottomPanel />
      </div>
    </div>
  );
};

const instruments = [
  {
    id: 1,
    background: "bg-pink-400"
  },
  {
    id: 2,
    background: "bg-yellow-400"
  },
  {
    id: 3,
    background: "bg-yellow-400"
  },
  {
    id: 4,
    background: "bg-cyan-400"
  },
  {
    id: 5,
    background: "bg-cyan-400"
  },
  {
    id: 6,
    background: "bg-green-400"
  }
]

const keys = [
  {
    id: 1,
    isOpen: false
  },
  {
    id: 2,
    isOpen: false
  },
  {
    id: 3,
    isOpen: false
  },
  {
    id: 4,
    isOpen: false
  },
];

export default page;
