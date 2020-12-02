import React from 'react'
import './Small.css'
import { Avatar } from "@material-ui/core";



function Small({ avatar, text }) {
    return (
        <div className="small">
            <div className="small1">
                <Avatar src={avatar}/>
                <p className="text">{text}</p>
            </div>
        </div>
    )
}

export default Small
