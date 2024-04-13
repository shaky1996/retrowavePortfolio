import React from 'react';
import '../index.css';
import { profilePic } from '../assets';

const Profile = () => {
    return (
        <div>
        <div className='  border-gradient rounded-lg p-0.5 profile'>
            <div className='bg-slate-950 flex flex-col items-center  rounded-lg px-3 py-1'>
                <div className='w-full h-3 border-4 border-pink-600 rounded-xl'>

                </div>
                <div className='mt-1 border-gradient p-0.5 w-60'>
                    <img
                        src={profilePic}
                        className=' object-cover'
                    />
                </div>
                <div className='mt-3 flex flex-col items-center  p-3'>
                    <h1 className='text-blue  text-3xl'>I'm Shak</h1>
                    <h2 className='neon-text mt-3 text-2xl'>FRONTEND</h2>
                    <h2 className=' neon-text text-2xl'>DEVELOPER</h2>
                </div>
                <div className='mt-3 mb-3 flex flex-row justify-evenly gap-5 w-full'>
                    <div className='bg-gradient-to-l from-pink-500 w-full h- '></div>
                    <div className='bg-gradient-to-r from-pink-500 w-full h-1'></div>
                </div>
            </div>
        </div>
        <div className='neon-border flex items-center justify-center mt-5 border-2 border-cyan-600 rounded-xl py-2'>
            <h1 className='text-xl'>FRONTEND DEVELOPER</h1>
        </div>
        </div>
    );
};

export default Profile;
