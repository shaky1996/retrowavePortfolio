import { Modal } from 'flowbite-react';
import { useState } from 'react';
import Carousel from './Carousel';
import { cogsIcon } from '../../assets';
import { motion } from 'framer-motion';

const ProjectModal = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1, rotate: [0, 720] }}
                transition={{ rotate: { duration: 8 } }}
                onClick={() => setOpenModal(true)}
                className='bg-cyan-500 hover:bg-pink-500 rounded-[50%] p-2 '
            >
                <img
                    src={cogsIcon}
                    className='w-24'
                />
            </motion.button>

            <Modal
                className='bg-black'
                show={openModal}
                onClose={() => setOpenModal(false)}
                dismissible
            >
                <Modal.Header className='bg-slate-800'>
                    <p className='font-side-box '>PROJECTS</p>
                </Modal.Header>
                <Modal.Body className='bg-slate-900'>
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className='space-y-6 '
                    >
                        <Carousel />
                    </motion.div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ProjectModal;
