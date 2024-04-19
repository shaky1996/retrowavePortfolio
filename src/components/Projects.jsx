import React from 'react';
import SideBox from './smallComponents/SideBox';
import Modal from './smallComponents/Modal';
import { motion } from 'framer-motion';
import { arrow2Icon } from '../assets';

const Projects = () => {
    return (
        <motion.div
            animate={{ opacity: [0, 0, 1] }}
            transition={{ ease: 'easeIn', duration: 7 }}
        >
            <SideBox>
                <h1 className='font-side-box'>PROJECTS</h1>
                <div className='relative h-full flex items-center justify-center bg-slate-950'>
                    <Modal />
                    <div className='absolute top-32 left-28 flex'>
                    <img src={arrow2Icon} alt='arrow' className='w-6' />
                    <p className='text-slate-700'>click</p>
                    </div>
                </div>
            </SideBox>
        </motion.div>
    );
};

export default Projects;
