import React from 'react';
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem: { name, imageUrl, price, quantity}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="imageUrl" style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">{ quantity }</span>
            <span className="price">${ price }</span>
            <span className="remove-button">&#10005;</span>
        </div>        
    );
};

export default CheckoutItem;