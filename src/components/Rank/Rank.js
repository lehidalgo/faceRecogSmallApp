import React from 'react';
import Tilt from 'react-tilt';
import './Rank.css';

const Rank = () => {
    return (
        <div className = 'black f3 shadow-2 ma4'>
            <div>
                {'Leo, your current rank is...'}
            </div>
            <div className = 'black f1'>
                {'#5'}
            </div>
        </div>
    );

}

export default Rank;