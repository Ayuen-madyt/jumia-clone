import React from 'react'
import './Cover.css'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function Cover() {
    const photos = [
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/HP/W4/Thur/KE_BFLive_Jameson_S-(1).jpg",
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/HP/W4/Thur/KE_BFLive_Nivea_HP_W4_1120_S.jpg",
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/mastercard/KE_Mastercard_S.jpg",
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/HP/FlashSale_Live_S.jpg",
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/UBF/refixed/Artboard-1.jpg",
        "https://ke.jumia.is/cms/2020/BlackFriday/Live/HP/W4/BF_AsSeenOnTv_S_1424x768-(1).jpg",
    ]
     
    return (
        <div className="cover">
            <div className="left">
                <p>Supermarket</p>
                <p>Health and care</p>
                <p>Home and Office</p>
                <p>Phones & Tablets</p>
                <p>computing</p>
                <p>Electronics</p>
                <p>Fashion</p>
                <p>Gaming</p>
                <p>Body Products</p>
                <p>Sporting Goods</p>
                <p>Other categories</p>
            </div>
            <div className="imageholder">
                <img src={photos[Math.floor(Math.random() * photos.length)]}/>
            </div>
            <div className="right">
                <div className="helpcenter">
                    <HelpOutlineOutlinedIcon className="helpout" />
                    <div className="para1">
                        <h3>HELP CENTER</h3>
                        <p>Guide To Customer Care</p>
                    </div>
                </div>
                <div className="easyreturn">
                    <img src="https://ke.jumia.is/cms/00_MobileHomepage/icone-2-return.png" />
                    <div className="para1">
                        <h3>EASY RETURN</h3>
                        <p>Quick Refund</p>
                    </div>
                </div>
                <div className="sellonjumia">
                    <img src="https://ke.jumia.is/cms/000_desktopHomepage/icone-2-payment.png" />
                    <div className="para1">
                        <h3>SELL ON JUMIA</h3>
                        <p>Millions Of Visitors</p>
                    </div>
                </div>
                <div classname="lastimage">
                    <img src="https://ke.jumia.is//cms/2020/BlackFriday/Live/HP/W4/Countdown/1-days-to-go.gif" />
                </div>
            </div>
        </div>
    )
}

export default Cover
