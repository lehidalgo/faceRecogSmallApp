import React from 'react'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className = 'center ma'>
            <div className = 'absolute mt3'>
                <img id='inputImage' alt='' src = {imageUrl} width='700px' height='auto'></img>
                <div className='shadow-2 bounding-box'>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;