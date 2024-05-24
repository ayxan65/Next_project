import React from 'react';
import Image from 'next/image';
import check from '../assets/check.svg';

interface Tdata {
    desc: string;
}

const data: Tdata[] = [
    {
        desc: 'Material : Aluminium alloy',
    },
    {
        desc: 'Color : Black',
    },
    {
        desc: 'Capacity : 45lbs',
    },
    {
        desc: 'Ease : Steady & adjustable',
    }


];

const InfoData = () => {
    return (
        <div>
            {data.map(({ desc }, index) => (
            
                
                <div className=' mx-7'>
                
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <Image src={check} alt="check icon" />
                  <div style={{ marginLeft: '20px' }}>{desc}</div>
              </div>
            </div>
             
            ))}
        </div>
    );
};

export default InfoData;
