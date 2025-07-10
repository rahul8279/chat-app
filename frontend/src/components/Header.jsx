import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
function Header() {
  return (
    <header className='   md:[40%] lg:[50%] flex flex-col gap-7 p-7 '>
        <div className='flex justify-between   items-center '>
            <h1 className='text-4xl font-bold'> Talker</h1>
            <CiMenuKebab className='text-2xl'/> 
        </div>
        <div className='flex justify-center items-center'>
          <IoIosSearch />
          <input type="text" placeholder='serch..' className=' border-1 w-[350px] bg-white rounded-3xl px-6 text-xl h-13 outline-none' />
        </div>
    </header>
  )
}

export default Header