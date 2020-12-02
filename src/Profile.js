import React from 'react'
import './Profile.css'

function Innermain({ cutoff, image, text, price, originalprice }) {
    return (
        <div className="profile">
            <h1 className="myname">Created by Ayuen Madyt</h1>
            <div className="contact">
                <h2>CONTACT ME:</h2>
                <p>Contact: +254715238483</p>
                <a href="mailto:madytiun@gmail.com">Email: madytiun@gmail.com</a>
            </div>
        </div>
    )
}

export default Innermain
