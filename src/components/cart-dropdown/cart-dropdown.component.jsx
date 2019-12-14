import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from "reselect"
import './cart-dropdown.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag-black.svg'

const CartDropdown = ({ cartItems, history, total }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem }/>
            ))
        : 
        <div>
            <span className="empty-message">
                Your Cart Is Empty!
            </span> 
            <ShoppingIcon/>
        </div>
        }
        </div>
        {
            cartItems.length 
            ? 
                <div>
                    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
                    <div className='total_dropdown'>Grand Total: ${total}</div>
                </div>
            : 
                <CustomButton onClick={() => history.push('/shop')}>START SHOPPING</CustomButton>
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})
export default withRouter(connect(mapStateToProps)(CartDropdown));