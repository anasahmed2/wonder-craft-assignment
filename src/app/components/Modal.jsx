"use client"
import { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import {AddData } from '@/config/Constant/index.jsx';
import Uploader from './Uploader';

const CheckInModal = ({ modalOpen, setModalOpen }) => {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();

    const handlerCheckIn = async () => {
        try {
            await AddData(title, image)
            resetFeilds()
            setModalOpen(false)
        } catch (e) {
            console.log("Error adding document: ", e)
        }
    };

    const resetFeilds = () => {
        setTitle("")
        setImage()
    }

    return (
        <>
            <Modal
                centered
                title="Add Check In"
                footer={[
                    <Button
                        className="modal-cancel-btn"
                        key="back"
                        onClick={() => setModalOpen(false)}
                    >
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handlerCheckIn}
                        className="nav-btn"
                        disabled={!image}
                    >
                        Add
                    </Button>,
                ]} open={modalOpen} onCancel={() => setModalOpen(false)}>
                <div className='modal-container'>
                    <div className='modal-input-conatiner'>
                        <h3>Title</h3>
                        <Input type='text' value={title} placeholder='Enter title' onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className='modal-input-conatiner'>
                        <Uploader setImage={setImage} />
                    </div>

                </div>
            </Modal>
        </>
    );
};
export default CheckInModal;