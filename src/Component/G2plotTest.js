import React from 'react';
import {Bar, Line, RingProgress} from '@antv/g2plot'
import ReactG2Plot from 'react-g2plot';

export default function G2plotTest() {

    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];


    const options = {
        data,
        with:100,
        height:300,
        xField:'year',
        yField:'value',
    };

    const options2 = {
        height: 300,
        width: 300,
        autoFit: false,
        color: "red",
        percent:0.7,
    }
    return (
        <div>
            test
            <ReactG2Plot style={ {width:300, height:300} } Ctor={Line} options={options} />
            <ReactG2Plot Ctor={RingProgress} options={options2}   />
        </div>
    );
}

