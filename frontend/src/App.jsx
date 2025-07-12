import React from 'react';
import Auth from './pages/Auth';
import Chat from './pages/ApplicatioLayout';
import Message from './pages/Message';
function App() {
  

  return (
   <>
   <div className='md:flex '>
<Chat />
   <Message />
   </div>
   
   </>
  )
}

export default App
