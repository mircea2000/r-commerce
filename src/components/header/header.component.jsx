import React from 'react';
import { ReactComponent as Logo} from '../../assets/images/crown.svg.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import { Link } from 'react-router-dom'
const Header = ({currentUser}) => {
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
                    : <Link to='/signIn' className="option">SIGN IN</Link>
                }
            </div>
        </div>
    );
};

export default Header;