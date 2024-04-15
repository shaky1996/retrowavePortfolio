import React from 'react';
import SideBox from './smallComponents/SideBox';

import SocialsIcon from './smallComponents/SocialsIcon';

const Socials = () => {
    return (
        <div>
            <SideBox>
                <h1 className='font-side-box'>CONNECT</h1>
                <div className='flex flex-row items-center justify-center h-full gap-5'>
                    <SocialsIcon />
                </div>
            </SideBox>
        </div>
    );
};

export default Socials;
