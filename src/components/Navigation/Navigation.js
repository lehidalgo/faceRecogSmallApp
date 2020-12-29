import React from 'react'

const Navigation = () => {
    return (
        <nav className = 'shadow-2' style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <p className= 'shadow-1 f4 link grow black b ttc ba br-pill pa2 pointer'>sign out</p>
        </nav>
    );
}

export default Navigation;