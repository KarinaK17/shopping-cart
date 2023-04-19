import React from "react";
import cart from "../images/white-cart.svg";

const Cart = (props) => {
  return (
    <div className="Cart">
      <img className="cart" src={cart} alt="shopping cart"></img>
      <p data-testid="number-of-items">{props.number} items </p>
      <p data-testid="sum-of-items">Total: {props.sum} $</p>
    </div>
  );
};

export default Cart;
