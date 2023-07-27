import React from 'react'
import { GiDrumKit, GiOilDrum } from "react-icons/gi";
import { FaDrum } from "react-icons/fa";
import { PiHandsClappingBold, PiMusicNoteFill } from "react-icons/pi";


const Instruments = ({instruments}) => {
  return (
    <div className=' flex flex-col text-6xl bg-gray-800 px-4 py-2 gap-5'>
      <div className=' text-pink-400'><GiDrumKit /></div>
      <div className=' text-yellow-400'><FaDrum /></div>
      <div className=' text-yellow-400'><PiHandsClappingBold /></div>
      <div className=' text-cyan-400'><PiMusicNoteFill /></div>
      <div className=' text-cyan-400'><PiMusicNoteFill /></div>
      <div className=' text-green-400'><GiOilDrum /></div>
    </div>
  )
}

export default Instruments