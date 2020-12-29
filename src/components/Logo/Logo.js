import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className = 'shadow-2 ma4'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="shadow-2 Tilt-inner"><img alt='logo' src = {brain}></img> </div>
            </Tilt>
        </div>
    );
}

export default Logo;