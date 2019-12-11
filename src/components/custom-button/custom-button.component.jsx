import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, isCheckout, isGoogleSignIn, inverted,...otherProps}) => (
    <button className={`
            ${inverted ? 'inverted' : ''} 
            ${isGoogleSignIn ? 'google-sign-in' : ''} 
            ${isCheckout ? 'checkout' : ''} 
            customBtn
        `} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;