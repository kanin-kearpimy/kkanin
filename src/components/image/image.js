import * as React from 'react'
import './image.css'

const Image = ({ imagePath, altText, width, height }) => {
    return (
        <img width={width} height={height} className='main-image' src={imagePath} alt={altText} />
    )
}

export default Image