import React from 'react'
import logo from "../assets/react.svg"
const array = [1,2,3,4,5,6]
function User() {
  return (
    <div className='w-full  p-7 b'>
        <div className='flex flex-col  gap-5'>
             {
                array.map((data,index) => (
                   <div key={index} className=' hover:bg-gray-700 p-3 rounded-2xl flex
                    gap-5 '>
                          <div className='h-19 w-19 rounded-full  flex justify-center items-center  '>
                            <img src={logo} className='h-19 w-19' alt="" />
                          </div>
                          <div className='flex  flex-col gap-1 '>
                              <div className='flex gap-8 '>
                                 <p className='text-2xl font-medium'>Rahul singh</p>
                               <span className='text-xl'>12:10pm</span>
                              </div>
                               <div className='flex gap-2'>
                                <span className='text-xl'>//</span>
                                <p className='text-xl'>Hello ji kese ho</p>
                               </div>
                          </div>
                   </div>
                ))
             }
        </div>
    </div>
  )
}

export default User