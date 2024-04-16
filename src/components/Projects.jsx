import React from 'react'
import SideBox from './smallComponents/SideBox'
import Carousel from './smallComponents/Carousel'


const Projects = () => {
  return (
    <div>
        <SideBox>
            <h1 className='font-side-box'>PROJECTS</h1>
            <div>
            <Carousel />
            </div>
            
        </SideBox>
    </div>
  )
}

export default Projects