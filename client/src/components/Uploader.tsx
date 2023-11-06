import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadFile } from '../services/api-client';

const { Dragger } = Upload;

const Uploader = () => {
    const [isReloaded, setIsReloaded] = useState(false);
    const customUpload = async (options: any) => {
        const { onSuccess, onError, file } = options;
        try {
            const isUploaded = await uploadFile(file);
            if (isUploaded) {
                toast(`${file.name} uploaded successfully.`);
                onSuccess(isUploaded, file);

                setTimeout(() => {
                    setIsReloaded(true); // Set isReloaded to true after 5 seconds
                }, 5000);
            } else {
                console.error(`${file.name} upload failed.`);
                toast(`File upload failed for ${file.name}.`);
            }
        } catch (error) {
            console.error(`${file.name} upload failed. Error:`, error);
            onError(error, file);
        }
    };

    const props: UploadProps = {
        name: 'file',
        multiple: false,
        customRequest: customUpload,
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    if (isReloaded) {
        return <Uploader />;
    }
    return (

        <Dragger {...props} style={{ marginTop: "4%", backgroundColor: "#ceeaf2" }}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single upload. Only excel file or xslx extension supported.
            </p>
        </Dragger>
    );
};

export default Uploader;
