import React from 'react'
import logo from "../assets/react.svg"
const array = [1,2,3,4,5,6]
function User() {
  return (
    <div className='w-full  p-3 '>
        <div className='flex flex-col  gap-2 mx-auto'>
             {
                array.map((data,index) => (
                   <div key={index} className=' hover:bg-gray-300 p-3 rounded-2xl flex
                    gap-5 '>
                          <div className=' rounded-full  flex justify-center items-center  '>
                            <img src={logo} className='h-15 w-15' alt="" />
                          </div>
                          <div className='flex  flex-col gap-1 '>
                              <div className='flex gap-12 '>
                                 <p className='text-xl font-medium'>Rahul singh</p>
                               <span>12:10pm</span>
                              </div>
                               <div className='flex gap-3'>
                                <span>//</span>
                                <p>Hello ji kese ho</p>
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