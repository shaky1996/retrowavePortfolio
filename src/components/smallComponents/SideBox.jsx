import React from 'react'

const SideBox = ({ children }) => {
  return (
    <div className='border-gradient-side flex flex-col border-4 border-black h-60 w-96 p-0.5'>
        
        
        <div className='bg-slate-950 h-full p-3 flex flex-col items-center'>
            
            {children}
        </div>
    </div>
  )
}

export default SideBox