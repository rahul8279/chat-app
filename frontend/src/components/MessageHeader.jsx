import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import image from "../assets/react.svg"

function MessageHeader() {
  return (
    <div className='shadow-2xl  w-full'>
       <div className='p-3 flex gap-5 '>
            <div className='flex items-center'>
                 <LuArrowLeft className='text-xl ' />
            </div>
             
                <img src={image} height={40} width={40} alt="" />
            <div className='flex flex-col '>
                <p className='text-xl font-medium'>Rahul singh</p>
                <span className=' '>last seen 2:00 pm</span>
            </div>
       </div>
      
    </div>
  )
}

export default MessageHeader