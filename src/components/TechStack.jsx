import React from 'react'
import SideBox from './smallComponents/SideBox'
import Technologies from './smallComponents/Technologies'
import { motion } from 'framer-motion'

const TechStack = () => {
  return (
    <motion.div
    animate={{ opacity: [0, 0, 1] }}
    transition={{ ease: 'easeIn', duration: 8 }}>
        <SideBox>
            <h1 className='font-side-box'>TECH STACK</h1>
            <div>
                <Technologies />
            </div>
        </SideBox>
    </motion.div>
  )
}

export default TechStack