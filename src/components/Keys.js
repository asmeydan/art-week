import React from 'react'

const Keys = ({ instruments, keys }) => {
  return (
    <div className=' flex-1 flex flex-col items-start px-4 py-2 gap-5 overflow-x-auto bg-gray-800'>
      {
        instruments.map((enstrumant, i)=> (
          <div key={i} className=' h-[60px] flex gap-2 shrink-0'>
            {
              repeat.map((repeat, i)=> (
                <div key={i} className=' w-full flex gap-px'>
                  {
                    keys.map((key, i)=> (
                      <div key={i} className={`flex shrink-0 w-[60px] rounded ${enstrumant.background}  cursor-pointer hover:brightness-75 ${key.isOpen === true ?" brightness-100" :"brightness-[.5]"}`} >
                        
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

const repeat = [1, 2, 3, 4]

export default Keys