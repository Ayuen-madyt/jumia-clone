import React from 'react'
import './Innermain.css'

function Innermain({ cutoff, image, text, price, originalprice }) {
    return (
        <div className="innermain">
            <p className="cutoff">{cutoff}</p>
            <img src={image}></img>
        
            <div className="textbelow">
                <p>{text}</p>
                <p className="price">{price}</p>
                <s><p>{originalprice}</p></s>
            </div>
        </div>
    )
}

export default Innermain
