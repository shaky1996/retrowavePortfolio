import React from 'react';
import SideBox from './smallComponents/SideBox';

const About = () => {
    return (
        <div className='about'>
            <SideBox>
                <h1 className='font-side-box'>ABOUT</h1>
                <div className='p-2'>
                <p className='p-side-box'>
                    I'm Shakhzod (or you can call me <span className='text-yellow-200'>Shak</span>), <br />a web and mobile
                    developer residing in the suburban area of Philadelphia, PA.
                </p>
                </div>
            </SideBox>
        </div>
    );
};

export default About;
