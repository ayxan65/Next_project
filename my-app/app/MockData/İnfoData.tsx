import React from 'react';
import Image from 'next/image';
import check from '../assets/check.svg';

interface Tdata {
    desc: string;
}

const data: Tdata[] = [
    {
        desc: 'Lightweight aircraft grade aluminium frame',
    },
    {
        desc: 'Car grade lithium battery',
    },
    {
        desc: 'Self-balanced',
    },
    {
        desc: 'Plug n play',
    },
    {
        desc: 'Quick release adapter',
    },
    {
        desc: 'RFID key card',
    },
];

const InfoData = () => {
    return (
        <div>
            {data.map(({ desc }, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <Image src={check} alt="check icon" />
                    <div style={{ marginLeft: '20px' }}>{desc}</div>
                </div>
            ))}
        </div>
    );
};

export default InfoData;
