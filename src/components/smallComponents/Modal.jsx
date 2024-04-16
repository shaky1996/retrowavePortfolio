import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import Carousel from './Carousel';

const ProjectModal = () => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                Click here to check projects
            </Button>
            <Modal
                className='bg-slate-950'
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header className='bg-slate-800'>
                    <h1 className='font-side-box '>PROJECTS</h1>
                </Modal.Header>
                <Modal.Body>
                    <div className='space-y-6'>
                        <Carousel />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Demo</Button>
                    <Button
                        color='gray'
                        onClick={() => setOpenModal(false)}
                    >
                        Code
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProjectModal;
