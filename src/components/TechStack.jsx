import React from 'react'
import SideBox from './smallComponents/SideBox'
import Technologies from './smallComponents/Technologies'


const TechStack = () => {
  return (
    <div>
        <SideBox>
            <h1 className='font-side-box'>TECH STACK</h1>
            <div>
                <Technologies />
            </div>
        </SideBox>
    </div>
  )
}

export default TechStack