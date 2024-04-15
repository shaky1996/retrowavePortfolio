import React from 'react'
import { technology } from '../../constants/Constants'

const Technologies = () => {
    return (
      <div className='flex flex-wrap justify-center items-center w-full p-4 gap-3 md:gap-8'>
        {technology.map((item) => (
          <div key={item.id} >
            <img src={item.icon} alt={item.name} className='w-12 h-12'/>
            
          </div>
        ))}
      </div>
    );
  };

export default Technologies