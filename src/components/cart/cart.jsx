import React from "react";
import Illustration from "../../assets/icon/illustration-empty-cart.svg";
import "./cart.css";

export const Cart = () => {
  return (
    <div className="cart_content">
      <p className="cart-text">Your Cart (0)</p>
      <div className="cart-container">
        <img className="cart-image" src={Illustration} alt="{illustration}" />
        <p className="cart-message">Your added items will appear here</p>
      </div>
    </div>
  );
};
