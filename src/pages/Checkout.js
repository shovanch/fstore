import React from "react";
import CheckoutItem from "components/CheckoutItem";

const CheckoutPage = () => (
  <main>
    <h1 className="section-heading">shopping cart</h1>
    <div className="checkout">
      <CheckoutItem name="Black Sneaker" price="245" />
      <CheckoutItem name="Black Sneaker" price="245" />
      <CheckoutItem name="Black Sneaker" price="245" />
      <CheckoutItem name="Black Sneaker" price="245" />
      <CheckoutItem name="Black Sneaker" price="245" />
      <CheckoutItem name="Black Sneaker" price="245" />

      <span className="checkout-total">Total: $100</span>
      <button className="checkout-button">pay now</button>
    </div>
  </main>
);

export default CheckoutPage;
