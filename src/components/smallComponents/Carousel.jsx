import React, { useState } from 'react';
import { project } from '../../constants/Constants';

const Carousel = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const goToSlide = (projectIndex) => {
        setCurrentProject(projectIndex);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full'>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-row items-center justify-center'>
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
                    <div className='flex flex-row justify-stretch items-stretch w-full mt-2'>
                        <div className='text-white flex flex-col items-start justify-start'>
                        <h1 className='text-white'>{project[currentProject].name}</h1>
                        <div className='flex flex-row gap-5 mt-4'>
                        <button onClick={() => window.open(project[currentProject].demo, '_blank')}>Demo</button>
                        <button onClick={() => window.open(project[currentProject].github, '_blank')}>Code</button>
                        </div>
                        </div>
                        <div className=''>
                        <img src={project[currentProject].image} alt={project[currentProject].name} className='h-28 w-40 object-cover rounded-xl'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
