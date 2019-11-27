import React from 'react';
import { ReactComponent as Logo} from '../../assets/images/crown.svg.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
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

const mapStateToProps = ({user: { currentUser}, cart: {hidden}}) => ({
    // currentUser: state.user.currentUser
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);