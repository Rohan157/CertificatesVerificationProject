import React, { useState } from 'react';
import { Tabs, TabsProps } from 'antd';
import Uploader from './Uploader';
import HotelVerification from './HotelVerification';

const Screen = () => {
    const [activeTab, setActiveTab] = useState<string>('1');

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Upload Hotels (xlsx)',
            children: <Uploader />,
        },
        {
            key: '2',
            label: `Verify Hotel's Certificate`,
            children: <HotelVerification />,
        }
    ];
    return (
        <div style={{
            padding: '20px', margin: "10% 20%", border: "1px groove silver", backgroundColor: "white", borderRadius: "20px"
        }}>
            <Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} />;
        </div >
    );
};

export default Screen;
