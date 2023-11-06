import React, { useEffect } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { checkHotelStatus } from '../services/api-client';

const HotelVerification = () => {
    const [form] = Form.useForm();
    const [submittable, setSubmittable] = React.useState(false);
    const [verificationResult, setVerificationResult] = React.useState('');
    const [textColor, setTextColor] = React.useState('');

    const handleValuesChange = () => {
        const hotelId = form.getFieldValue('hotelId');
        setSubmittable(hotelId !== undefined && hotelId !== '');
    };

    const handleSubmit = async () => {
        try {
            const hotelId = form.getFieldValue('hotelId');
            const isCertified = await checkHotelStatus(hotelId);

            const color = isCertified ? 'green' : 'red';
            if (isCertified) {
                setVerificationResult('True. Your hotel is Certified!');
                setTextColor('green');
                toast.success("Certification Status: True");
            } else {
                setVerificationResult('False. Hotel not Certified!');
                setTextColor('red');
                toast.error("Certification Status: False");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form style={{ margin: " 4% 12%" }}
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onValuesChange={handleValuesChange}
            onFinish={handleSubmit}
        >
            <Form.Item name="hotelId" label="Hotel ID">
                <Input />
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit" disabled={!submittable}>
                        Submit
                    </Button>
                    <Button htmlType="reset" onClick={() => setVerificationResult("")}>Reset</Button>

                </Space>
            </Form.Item>
            {verificationResult && (
                <Form.Item>
                    <p style={{ color: `${textColor}` }}>{`Certification status: ${verificationResult}`}</p>
                </Form.Item>

            )}
        </Form>
    );
};

export default HotelVerification;

