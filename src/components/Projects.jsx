import React from 'react'
import SideBox from './smallComponents/SideBox'
import Modal from './smallComponents/Modal'
import { motion } from 'framer-motion'




const Projects = () => {
  return (
    <motion.div
    animate={{ opacity: [0, 0, 1] }}
    transition={{ ease: 'easeIn', duration: 7 }}>
        <SideBox>
            <h1 className='font-side-box'>PROJECTS</h1>
            <div className='h-full flex items-center justify-center'>
            <Modal />
            </div>
        </SideBox>
        
    </motion.div>
  )
}

export default Projects