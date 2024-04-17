import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import Carousel from './Carousel';

const ProjectModal = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                Click here to check projects
            </Button>
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
