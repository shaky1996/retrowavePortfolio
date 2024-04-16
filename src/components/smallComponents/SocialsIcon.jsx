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
                className='bg-transparent text-pink-500 text-md m-0 p-0'
            >
                <div className='neon-icon flex flex-row items-center justify-cente rounded-[50%] p-2'>
                    <button onClick={() => window.open(item.link, '_blank')}>
                        <img
                            src={item.icon}
                            alt={item.name}
                            className='w-14 h-14 hover:scale-110 transition duration-300 ease-in-out'
                        />
                    </button>
                </div>
            </Tooltip>
        );
    });
}

export default SocialsIcon;
