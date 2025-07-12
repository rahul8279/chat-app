import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

function MessageInput() {
  return (
    <div className='flex w-full  fixed bottom-4  left-5 md:left-[30%] gap-3'>
        
        <div className=' h-11 rounded-4xl w-[74%] flex items-center  md:w-[50%] border-2 px-2.5'>
          <MdOutlineEmojiEmotions className='text-2xl' />
        <input
         type="text" 
         placeholder='message'
         className='px-3 text-[17px]'
         />
    </div>
    <div className='h-12 w-12 rounded-full bg-green-300 flex items-center justify-center '>
<AiOutlineSend className='text-xl'/>
    </div>
    </div>
  )
}

export default MessageInput