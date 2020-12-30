import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onDetectButton }) => {
    return (
        // blw line is to visualize the div
        <div className = 'shadow-2 '> 
            <p className = 'f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className = 'center'>
                <div className = 'form center pa4 br3 shadow-2'>
                    <input 
                        className = 'f4 br2 pa2 w-70 center'
                        type = 'tex'
                        onChange={onInputChange}
                    />
                    <button 
                        className = 'w-30 grow br2 f4 link ph3 pv2 dib white bg-light-purple' 
                        onClick={onDetectButton}
                    >Detect</button>
                </div>
            </div> 
        </div>
    );
}

export default ImageLinkForm;