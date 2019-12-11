import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_tQbvbQfFABWX1rSdExZUBgWx00VWtkyHp3'

    const onToken = token => {
        console.log(token)
        alert('PAyment Success')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='R-Commerce'
            shippingAddress
            billingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            bitcoin 
            panelLabel='PAY NOW'
            token={onToken}
            stripekey={publishableKey}
            locale="us"
            email="mirceamarghitas@gmail.com"
            allowRememberMe 
            currency="USD"
        >
            <CustomButton isCheckout>
                PAY NOW ${price}
            </CustomButton>
        </StripeCheckout>
    );
};

export default StripeCheckoutButton;