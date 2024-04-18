import React from 'react';
import '../index.css';
import { profilePic } from '../assets';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: 'easeIn', duration: 2 }}
        >
            <div className='mt-5 md:mt-0 border-gradient rounded-lg p-0.5 profile'>
                <div className='neon-border bg-slate-950 flex flex-col items-center  rounded-lg px-1 py-1'>
                    <div className='w-full h-3 border-4 border-pink-600 rounded-xl'></div>
                    <div className='mt-1 border-gradient p-0.5 w-60 xl:w-72 '>
                        <img
                            src={profilePic}
                            alt='Retrowave man with black hair'
                            className=' object-cover grayscale-[50%]'
                        />
                    </div>
                    <motion.div
                        animate={{ opacity: [0, 0, 1] }}
                        transition={{ ease: 'easeIn', duration: 3 }}
                        className='chakra-font mt-3 flex flex-col items-center  p-3'
                    >
                        <h1 className='text-cyan-500 text-3xl'>Hello,</h1>
                        <h1 className='text-cyan-500 text-3xl'>I'm Shak</h1>
                        <motion.div
                            className='text-pink-500 mt-3 text-2xl flex flex-col items-center'
                            animate={{ opacity: [0, 0, 1] }}
                            transition={{ ease: 'easeIn', duration: 4 }}
                        >
                            <h2 className=''>FRONTEND</h2>
                            <h2 className=''>DEVELOPER</h2>
                        </motion.div>
                    </motion.div>
                    <div className='mt-3 mb-3 flex flex-row justify-evenly gap-5 w-full'>
                        <div className='bg-gradient-to-l from-pink-500 w-full h-1 '></div>
                        <div className='bg-gradient-to-r from-pink-500 w-full h-1'></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile;
