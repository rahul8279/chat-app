import React from 'react'

function MessageBox({text,sender}) {
    const isMe = sender == "me"
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2 `}>
        <div className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow-md
          ${isMe ? "bg-green-500 text-white" : "bg-gray-200 text-gray-900"}`}>
         {text}
        </div>

    </div>
  )
}

export default MessageBox