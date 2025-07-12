import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
function Header() {
  return (
    <header className='   md:[40%] lg:[50%] flex flex-col gap-7 p-7 '>
        <div className='flex justify-between   items-center '>
            <h1 className='text-3xl font-bold'> Talker</h1>
            <CiMenuKebab className='text-2xl'/> 
        </div>
        <div className='flex justify-center items-center w-[300px] rounded-3xl border-1 gap-5'>
          <span><IoIosSearch className='text-2xl'/></span>
          <input type="text" placeholder='search....' className=' text-xl h-11 outline-none' />
        </div>
    </header>
  )
}

export default Header