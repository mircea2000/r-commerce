import React from 'react';
import './checkout-item.styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux'
import { removeItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions'
const CheckoutItem = ({cartItem, removeItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="imageUrl" style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItem(cartItem)}>
                    { quantity === 1 ? <FontAwesomeIcon className="fred" icon="trash-alt" /> : <FontAwesomeIcon icon="minus-circle"/> }
                </div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={()=> addItem(cartItem)}>
                    <FontAwesomeIcon
                        icon="plus-circle"                        
                    />
                </div>
            </span>
            <span className="price">${ price }</span>
            <span className="price">${ quantity * price }</span>
            <span className="remove-button" onClick={()=> removeItemFromCart(cartItem)}>
                {/* &#10005; */}
                <FontAwesomeIcon
                    icon="trash-alt"
                />
            </span>
        </div>        
    );
};

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);