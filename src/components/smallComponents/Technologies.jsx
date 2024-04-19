import React from 'react';
import { Tooltip } from 'flowbite-react';
import { technology } from '../../constants/Constants';
import SVG from 'react-inlinesvg';

const Technologies = () => {
    return (
        <div className='flex flex-wrap justify-center items-center w-full p-4 gap-6 md:gap-8'>
            {technology.map((item) => (
                <Tooltip
                    key={item.id}
                    content={item.name}
                    placement='bottom'
                    arrow={false}
                    animation='duration-500'
                    className='bg-transparent text-pink-500 text-xs m-0 p-0'
                >
                    <div key={item.id}>
                        <SVG
                            src={item.icon}
                            alt={item.name}
                            className='w-12 h-12 hover:scale-110 transition duration-300 ease-in-out hover:fill-pink-500'
                        />
                    </div>
                </Tooltip>
            ))}
        </div>
    );
};

export default Technologies;
