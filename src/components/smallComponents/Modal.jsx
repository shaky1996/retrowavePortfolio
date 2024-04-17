import { Modal } from 'flowbite-react';
import { useState } from 'react';
import Carousel from './Carousel';
import { cogsIcon } from '../../assets';

const ProjectModal = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button onClick={() => setOpenModal(true)}>
                <div className='flex items-center justify-center rounded-[50%]  px-3 py-3 bg-cyan-500 hover:bg-pink-500 transition-colors ease-in-out duration-200'>
                    <img
                        src={cogsIcon}
                        className='w-24'
                    />
                </div>
            </button>

            <Modal
                className='bg-slate-950'
                show={openModal}
                onClose={() => setOpenModal(false)}
                dismissible
            >
                <Modal.Header className='bg-slate-800'>
                    <p className='font-side-box '>PROJECTS</p>
                </Modal.Header>
                <Modal.Body className='bg-slate-900'>
                    <div className='space-y-6 '>
                        <Carousel />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ProjectModal;
