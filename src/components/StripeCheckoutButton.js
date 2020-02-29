import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "assets/images/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  // multiplying by 100,as stripe wants the whole int, like 18.30 to 1830
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_iBtvqBq9vwCEZVXfeeYDAuEJ00GSODhso1";

  // we trigger onToken and pass the token to backend for process upon receiving the token from stripe,
  // Here's no backend, so redirecting user to homepage
  const onToken = token => {
    alert("Payment Succesful");
    window.location.href = "/";
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="FStore"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
