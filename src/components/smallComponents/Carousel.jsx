import React, { useState } from 'react';
import { project } from '../../constants/Constants';
import { arrowIcon, codeIcon } from '../../assets';

const Carousel = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const goToSlide = (projectIndex) => {
        setCurrentProject(projectIndex);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full'>
                <div className='flex flex-col justify-center '>
                    <div className='flex flex-row items-center justify-center gap-3  p-4 border-b-2 border-slate-700'>
                        {/* Render buttons for each slide */}
                        {project.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`chakra-font text-xl group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border  bg-transparent px-5 font-medium transition-all duration-200 [box-shadow:3px_5px_#991b1b] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:0px_0px_rgb(82_82_82)] ${
                                    currentProject === index
                                        ? ' text-green-500 border-green-500 translate-x-[2px] translate-y-[2px] [box-shadow:none] '
                                        : ' text-red-700 border-red-700 '
                                }`}
                            >
                                {item.id}
                            </button>
                        ))}
                    </div>
                    {/* Render the current slide's content */}
                    <div className='flex flex-col md:flex-row justify-center items-center w-full my-5 gap-5'>
                        <div className='flex justify-center items-center md:w-1/2'>
                            <img
                                src={project[currentProject].image}
                                alt={project[currentProject].name}
                                className='h-40 w-full md:h-52 md:w-full object-cover rounded-xl border-2 border-slate-700'
                            />
                        </div>
                        <div className='flex flex-col items-start justify-start md:w-1/2 chakra-font px-2'>
                            <p className=' text-pink-500 text-lg'>
                                {project[currentProject].name}
                            </p>
                            <div className='flex flex-col mt-3'>
                                <p className='text-sm text-cyan-500'>
                                    {project[currentProject].description}
                                </p>
                                <p className='mt-2 text-neutral-500 text-sm'>
                                    {project[currentProject].stack.map(
                                        (tech) => `#${tech} `
                                    )}
                                </p>
                            </div>
                            <div className='flex flex-row gap-2 mt-4  '>
                                <button
                                    className='button-projects neon-icon'
                                    onClick={() =>
                                        window.open(
                                            project[currentProject].demo,
                                            '_blank'
                                        )
                                    }
                                >
                                    demo
                                    <img
                                        src={arrowIcon}
                                        alt='Arrow icon'
                                        className='w-5'
                                    />
                                </button>
                                <button
                                    className='button-projects neon-icon'
                                    onClick={() =>
                                        window.open(
                                            project[currentProject].github,
                                            '_blank'
                                        )
                                    }
                                >
                                    code
                                    <img
                                        src={codeIcon}
                                        alt='Arrow icon'
                                        className='w-5'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
