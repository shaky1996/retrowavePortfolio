import React from 'react';
import '../index.css';
import { profilePic } from '../assets';

const Profile = () => {
    return (
        <div className=' border-gradient p-0.5 profile'>
            <div className='bg-slate-950 flex flex-col items-center  p-5'>
                <div className='border-gradient p-0.5 w-52'>
                    <img
                        src={profilePic}
                        className=' object-cover'
                    />
                </div>
                <div className='text-blue mt-3 flex flex-col items-center  p-3'>
                    <h1 className='text-3xl'>I'm Shak</h1>
                    <h2 className='mt-3 text-2xl'>FRONTEND</h2>
                    <h2 className=' text-2xl'>DEVELOPER</h2>
                </div>
                <div className='mt-3 mb-3 flex flex-row justify-evenly gap-5 w-full'>
                    <div className='bg-gradient-to-l from-pink-500 w-full h- '></div>
                    <div className='bg-gradient-to-r from-pink-500 w-full h-1'></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
