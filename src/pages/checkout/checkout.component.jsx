import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { CheckoutContainer, CheckoutHeader } from './checkout.styles'
import './checkout.styles.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faMinusCircle,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faMinusCircle, faTrashAlt);

const Checkout = ({cartItems, total}) => {
    return (
        <CheckoutContainer>
            <h2>CHECKOUT PAGE</h2>
            <CheckoutHeader>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Price Total</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                )
            }
            <div className="total">TOTAL: ${total}</div>
            <StripeCheckoutButton price={ total } />
        </CheckoutContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout);