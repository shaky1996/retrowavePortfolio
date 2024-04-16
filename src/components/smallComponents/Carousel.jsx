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
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-row items-start justify-center'>
                        {/* Render buttons for each slide */}
                        {project.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`w-10 h-10 ${
                                    currentProject === index
                                        ? 'neon-button-active text-green-500 '
                                        : 'neon-button-inactive text-red-700'
                                }`}
                            >
                                <svg
                                    viewBox='0 0 16 16'
                                    xmlns='http://www.w3.org/2000/svg'
                                    version='1.1'
                                    fill='#0f172a'
                                    stroke='currentColor '
                                    strokeLinecap='round'
                                    strokeLinejoin='round '
                                    strokeWidth='1.5'
                                    className='w-full h-full '
                                >
                                    <circle
                                        cx='8'
                                        cy='8'
                                        r='4.25'
                                    ></circle>
                                </svg>
                            </button>
                        ))}
                    </div>
                    {/* Render the current slide's content */}
                    <div className='flex flex-row justify-start items-start w-full mt-2 gap-5'>
                        <div className='text-white flex flex-col items-start justify-start'>
                            <h1 className='text-white'>
                                {project[currentProject].name}
                            </h1>
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
                        <div className='flex justify-end items-end'>
                            <img
                                src={project[currentProject].image}
                                alt={project[currentProject].name}
                                className='h-28 w-40 object-cover rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
