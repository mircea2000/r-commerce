import React from 'react';
import { ReactComponent as Logo} from '../../assets/images/crown.svg.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect' 
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" className="logo">
                    <Logo/>
                </Link>
            </div>
            <div className="options">
                <Link to='/shop' className="option">SHOP</Link>
                <Link to='/contact' className="option">CONTACT</Link>
                {
                    currentUser  ? 
                    <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
                    : <Link to='/signin' className="option">SIGN IN</Link>
                }
                <CartIcon/>
                {
                    hidden ? null : <CartDropdown/>
                }
                
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    // currentUser: state.user.currentUser
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);