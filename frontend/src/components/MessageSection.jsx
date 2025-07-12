import React from 'react'
import MessageBox from './messageBox'
 
const messageArray = [
  {message:"Hello",sender:"me" },
  {message:"Hello",sender:"other" },
  {message:"how are you ",sender:"me" },
  {message:"good and you",sender:"other" },
  {message:"Hello",sender:"other" },
  {message:"Hello",sender:"other" },
  {message:"how are you ",sender:"me" },
  {message:"good and you",sender:"me" },
  {message:"good and you",sender:"me" }

]
function MessageSection() {
  return (
   <div className="flex flex-col h-screen bg-gray-100 p-4 overflow-y-auto">
 {
  messageArray.map((msg,index) => (
    <MessageBox key={index} text={msg.message} sender={msg.sender} />
  ))
 }
   </div>
  )
}

export default MessageSection