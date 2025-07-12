import React from 'react'
import MessageHeader from '../components/MessageHeader'
import MessageSection from '../components/MessageSection'
import MessageInput from '../components/MessageInput'

function Message() {
  return (
    <div className='flex  flex-col relative h-screen w-screen '>
      <MessageHeader />
      <MessageSection />
      <MessageInput />
    </div>
  )
}

export default Message