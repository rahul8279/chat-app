import React from 'react'
import reactimage from '../assets/react.svg'
import Header from '../components/Header'
import User from '../components/User'


function Chat() {
  return (
   <div className='w-fit bg-gray-200 shadow-2xl'>
      <div className='flex flex-col  md:w-50%'>
        <Header />
        <User />
      </div>
      
   </div>
  )
}

export default Chat