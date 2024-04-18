import React from 'react';
import SideBox from './smallComponents/SideBox';
import SocialsIcon from './smallComponents/SocialsIcon';
import { motion } from 'framer-motion';

const Socials = () => {
    return (
        <motion.div
        animate={{ opacity: [0,0, 1] }}
        transition={{ ease: 'easeIn', duration: 6 }} >
            <SideBox>
                <h1 className='font-side-box'>CONNECT</h1>
                <div className='flex flex-row items-center justify-center h-full gap-5'>
                    <SocialsIcon />
                </div> 
            </SideBox>
        </motion.div>
    );
};

export default Socials;
