import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket, user}] = useStateValue()
    console.log(basket)
    const login =() => {
        if(user){
        auth.signOut()
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
           <div className="header__search">
                <input type="text" className="header__searchInput"></input>
            <SearchIcon className="header__searchIcon"/>
           </div>
           <div className="header__nav">
               <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__options">
                        <span className="header__optionsLine1">Hello {user?.email}</span>
                        <span className="header__optionsLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
               </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLine1">Returns</span>
                        <span className="header__optionsLine2">& Orders</span>
                    </div>
               </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLine1">Your</span>
                        <span className="header__optionsLine2">Prime</span>
                    </div>
               </Link>
               <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <ShoppingCartIcon/>
                        <span className="header__optionsLine2 header__basketCount">{basket?.length}</span>
                    </div>
               </Link>
           </div>

        </nav>
    )
}

export default Header
