"use client"
import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};



const CheckInModal = ({ modalOpen, setModalOpen }) => {
    const showModalss = () => {
        setModalOpen(true);
    };
    const handleOk = () => {
        //======= this is for oky
        setModalOpen(false);
        console.log("handle oky")
    };

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
                        onClick={handleOk}
                        className="nav-btn"
                    >
                        Add
                    </Button>,
                ]} open={modalOpen} onCancel={() => setModalOpen(false)}>
                <div className='modal-container'>
                    <div className='modal-input-conatiner'>
                        <h3>Title</h3>
                        <Input type='text' placeholder='Enter title' />
                    </div>

                    <div className='modal-input-conatiner'>
                        <h3>Uploader Image</h3>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default CheckInModal;