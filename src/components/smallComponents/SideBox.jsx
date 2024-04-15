import React from 'react'

const SideBox = ({ children }) => {
  return (
    <div className='border-gradient-side flex flex-col h-60 w-80 md:w-96 p-0.5'>
        
        
        <div className=' bg-slate-950 h-full p-1 flex flex-col items-center'>
            
            {children}
        </div>
    </div>
  )
}

export default SideBox