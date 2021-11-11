import React from 'react';

import machine1 from '../../../images/mechanic/mechanic-1.jpg'
import machine2 from '../../../images/mechanic/mechanic-2.jpg'
import machine3 from '../../../images/mechanic/mechanic-3.jpg'
import machine4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        img: machine1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert'
    },
    {
        img: machine2,
        name: 'John Smith',
        expertize: '-Polis Expert'
    },
    {
        img: machine3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert'
    },
    {
        img: machine4,
        name: 'Sakib Smith',
        expertize: '-Alrounder Expert'
    }
]
const Experts = () => {
    return (
        <div className='container' id="experts">
            <h2 className="text-primary mt-5 mb-4">Our Expert</h2>
            <div className="row">
                {experts.map(expert => <Expert
                    key={expert.name}
                    expert={expert}
                >
                </Expert>)}
            </div>
        </div>
    );
};

export default Experts;