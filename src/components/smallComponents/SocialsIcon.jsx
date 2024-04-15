import { Tooltip } from 'flowbite-react';
import { socials } from '../../constants/Constants';

function SocialsIcon() {
    return socials.map((item) => {
        return (
            <Tooltip
                key={item.id}
                content={item.name}
                placement="bottom"
                arrow={false}
                animation="duration-500"
                className='bg-transparent text-white mt-0.5'
            >
                <div className='neon-icon flex flex-row items-center justify-center bg-cyan-500 rounded-[50%] p-3'>
                    <button onClick={() => window.open(item.link, '_blank')}>
                        <img
                            src={item.icon}
                            alt={item.name}
                            className='w-14 h-14'
                        />
                    </button>
                </div>
            </Tooltip>
        );
    });
}

export default SocialsIcon;
