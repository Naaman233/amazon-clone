import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return <nav className="header">
        <Link to="/">
        <img className="header_logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
        />
        </Link>
        {/* implementing search functionality */}
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
        </div>
        {/**1st link */}
        <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, Sign In</span>
                    <span className="header__optionLineTwo">Account & List</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            <Link to ="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/** Shopping basket icon */}
                    <ShoppingCartIcon className="header__ShoppingCart"/>
                    {/** Number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </Link>
        </div>
    </nav>
}

export default Header
