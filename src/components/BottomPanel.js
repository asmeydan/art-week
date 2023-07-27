import React from 'react'
import { IoIosKeypad } from "react-icons/io";
import { BsFillDice5Fill, BsFillInfoCircleFill, BsCaretUpFill } from "react-icons/bs";
import { FiPower } from "react-icons/fi";


const BottomPanel = () => {
  return (
    <div className=' w-full px-10 py-2 flex justify-between items-center text-3xl text-slate-300'>
      <div className=' flex gap-2'>
        <div className=' bg-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-600'><IoIosKeypad /></div>
        <div className=' bg-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-600'><BsFillDice5Fill /></div>
        <div className=' bg-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-600'><BsFillInfoCircleFill /></div>
      </div>

      <div className=' text-green-400 text-5xl p-2 rounded-md cursor-pointer hover:bg-gray-600'><FiPower /></div>

      <div className=' flex gap-px items-center text-xl h-[36px]'>
        <div className=' bg-gray-700 rounded-l-md px-3 py-1 cursor-pointer hover:bg-gray-600'>Step On/Off</div>
        <div className='bg-gray-700 px-3 py-1 cursor-pointer hover:bg-gray-600'>Velocity</div>
        <div className=' bg-gray-700 rounded-r-md px-3 py-1 cursor-pointer hover:bg-gray-600 h-full flex justify-center items-center'><BsCaretUpFill /></div>
      </div>
    </div>
  )
}

export default BottomPanel