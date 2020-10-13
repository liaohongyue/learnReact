import React from 'react';
import {Bar} from '@antv/g2plot'
import ReactG2Plot from 'react-g2plot';

export default function G2plotTest() {

    const data = [
        { year: '1951 年', value: 38 },
        { year: '1952 年', value: 52 },
        { year: '1956 年', value: 61 },
        { year: '1957 年', value: 145 },
        { year: '1958 年', value: 48 },
    ];


    const options = {
        data,
        xField:'year',
        yField:'value',
    };
    return (
        <div>
            test
            <ReactG2Plot Ctor={Bar} options={options} />
        </div>
    );
}
