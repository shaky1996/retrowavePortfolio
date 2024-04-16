import React from 'react'
import SideBox from './smallComponents/SideBox'
import Carousel from './smallComponents/Carousel'
import Modal from './smallComponents/Modal'


const Projects = () => {
  return (
    <div>
        <SideBox>
            <h1 className='font-side-box'>PROJECTS</h1>
            <div>
            {/* <Carousel /> */}
            <Modal />
            </div>
            
        </SideBox>
    </div>
  )
}

export default Projects