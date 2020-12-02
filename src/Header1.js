import React from 'react'
import './Header1.css'
function Header1() {
    const flash = [
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/HP/W4/KE_BFLive_UltimateBF_Identity_W3_1020_gif.gif",
        "https://ke.jumia.is/cms/2020/BlackFriday/Teasing/Banners/BF2020_TopStrip_Order+Call_STB.gif"
    ]
    return (
        <div className="header1">
            <div className="imageheader">
                <img src={flash[Math.floor(Math.random() * flash.length)]} />
            </div>
            <div className="imageheader2"></div>
        </div>
    )
}

export default Header1
