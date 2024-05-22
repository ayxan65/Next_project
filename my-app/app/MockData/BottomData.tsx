import React from 'react';

interface Tdata {
    title: number | string,
    unit: string,
    desc: string
}

const data: Tdata[] = [{
    title: 105,
    unit: 'lbs',
    desc: 'Net Weight'
},
{
    title: 26,
    unit: 'mph',
    desc: 'Top Speed'
},
{
    title: 38,
    unit: 'miles',
    desc: 'Max Range'
},
{
    title: 89,
    unit: 'nm',
    desc: 'Max Torque'
},
{
    title: '22%',
    unit: 'slope',
    desc: 'Hill Climbing'
},
{
    title: '2x',
    unit: '',
    desc: 'Hydraulic Disc Brakes'
}
];

const BottomData = () => {
    return (
        <>
            {data.map(({ title, unit, desc }, index) => (
                <div key={index}>
                    <div className=' w-40 h-40 shadow-2xl flex flex-col items-center justify-center  '>
                    <div className='my-1 font-black text-3xl text-stone-700' >{title}</div>
                    <div className='my-1 font-bold'>{unit}</div>
                    <div className='my-1'>{desc}</div>
                    </div>
                   
                </div>
            ))}
        </>
    );
};

export default BottomData;
