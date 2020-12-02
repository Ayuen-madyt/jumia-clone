import React from 'react'
import './Header2.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header2() {
    return (
        <div className="header2">
            <div className="innerheader1">
                <div className="logo">
                    <img src="https://veekayproducts.com.ng/wp-content/uploads/2018/09/jumia-coupon-logo.fw_.png" />
                </div>
                <div className="innerheader2">
                    <div className="search">
                        <div className="search1">
                            <SearchIcon className="searchicon" />
                            <input type="text" placeholder="Search products, brands and categories"/>
                        </div>
                        <button className="button">SEARCH</button>
                    </div>
                    <div className="name">
                        <p>hi, Ayuen</p>
                        <ExpandMoreIcon />
                    </div>
                    <div className="help">
                        <HelpOutlineOutlinedIcon />
                        <p>help</p>
                    </div>
                    <div className="cart">
                        <ShoppingCartOutlinedIcon />
                        <p>Cart</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Header2
