"use client"
import React, { useState } from 'react';
import { Button, Modal, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { uploadFile, AddData } from '@/config/Constant/index.jsx';

const { Dragger } = Upload;

const CheckInModal = ({ modalOpen, setModalOpen }) => {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();

    const props = {
        name: "file",
        multiple: false,
        action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
        onChange(info) {
            const { status, response } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(`${info.file.name} file uploaded successfully.`);
                uploadFile(info.file.originFileObj)
                    .then((url) => {
                        setImage(url);
                    })
                    .catch((error) => {
                        console.error("Error uploading file:", error);
                    });
            } else if (status === "error") {
                uploadFile(info.file.originFileObj)
                    .then((url) => {
                        setImage(url);
                    })
                    .catch((error) => {
                        console.error("Error uploading file:", error);
                    });
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };


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
                        <h3>Uploader Image</h3>
                        <Dragger
                            accept=".png,.jpeg,.doc"
                            {...props}>
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