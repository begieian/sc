import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
  const publishableKey = 'pk_test_51K0iU3CtSRfmsCvUqRx9aHhVJ0Vz8G1Phm3k3Q98XVpkWcL8rc57vPpFsRVY3VkAabxViChZLiOvS3BpKzyWndgt00COutgjjK';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='SC'
      billingAddress
      shippingAddress
      description={`Your total is ${price} PHP`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='PHP'
    />
  )
}

export default StripeCheckoutButton;