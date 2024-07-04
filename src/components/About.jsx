import React from 'react';
import SideBox from './smallComponents/SideBox';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            animate={{ opacity: [0, 0, 1] }}
            transition={{ ease: 'easeIn', duration: 5 }}
            className='about'
        >
            <SideBox>
                <h1 className='font-side-box'>ABOUT</h1>
                <div className='p-2'>
                    <p className='p-side-box'>
                        I'm Shakhzod (or you can call me{' '}
                        <span className='text-yellow-200'>Shak</span>), <br />a
                        web and mobile developer currently pursuing a Bachelor's
                        degree in Software Engineering.
                    </p>
                </div>
            </SideBox>
        </motion.div>
    );
};

export default About;
