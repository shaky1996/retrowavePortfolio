import React from 'react'
import SideBox from './smallComponents/SideBox'
import { socials } from '../constants/Constants'


const Socials = () => {
  return (
    <div>
        <SideBox>
            <h1 className='font-side-box'>CONNECT</h1>
            <div className='flex flex-row items-center justify-center h-full gap-5'>
                {socials.map((item) => {
                    return (
                        <div key={item.id} className='neon-icon flex flex-row items-center justify-center bg-cyan-500 rounded-[50%] p-3'>
                            <button data-popover-target="popover-bottom" data-popover-placement="bottom" onClick={() => window.open(item.link, '_blank')}>
                            <img src={item.icon} className='w-14 h-14'/>
                            </button>
                            
                        </div>
                    )
                })}
            </div>
        </SideBox>
    </div>
  )
}

export default Socials