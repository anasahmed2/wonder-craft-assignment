import React from 'react'
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { uploadFile } from '@/config/Constant/index.jsx';

const { Dragger } = Upload;

function Uploader({setImage}) {
   
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
    return (
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
    )
}

export default Uploader