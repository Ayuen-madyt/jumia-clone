import React from 'react'
import './Image.css'

function Image({imageurl}) {
    return (
        <div className="image">
            <img src={imageurl}/>
        </div>
    )
}

export default Image
