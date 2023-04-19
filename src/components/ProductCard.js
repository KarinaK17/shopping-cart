import React from "react";
import cart from "../images/cart.svg";

const ProductCard = (props) => {
  if (props.quantity === 0) {
    return (
      <div className="Product-card">
        <div className="image-container">
          <img className="product-img" src={props.src} alt={props.name}></img>
          <p className="product-description">{props.description}</p>
        </div>
        <p>Price: {props.price} $</p>
        <div>
          <img
            data-testid={`cart-${props.index}`}
            className="cart"
            src={cart}
            alt="shopping cart"
            onClick={() => {
              props.handleCartClick(props.name);
            }}
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Product-card">
        <div className="image-container">
          <img className="product-img" src={props.src} alt={props.name}></img>
          <p className="product-description">{props.description}</p>
        </div>
        <p>Price: {props.price} $</p>
        <div className="input-container">
          <button
            onClick={() => {
              props.handleDecrement(props.name);
            }}
          >
            –
          </button>
          <input
            data-testid={`input-${props.index}`}
            type="tel"
            value={props.quantity}
            name="quantity"
            pattern={/^\d+$/}
            onChange={(e) => {
              props.handleQuantityChange(e, props.name);
            }}
          ></input>
          <button
            onClick={() => {
              props.handleIncrement(props.name);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
};

export default ProductCard;
