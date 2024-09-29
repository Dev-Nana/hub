import React from "react";
import "./styles.css";
import "../assets/styles/global.css";
import { Card } from "../components/card/card";
import { Cart } from "../components/cart/cart";

export const Home = () => {
  return (
    <div className="home_content">
      <p className="home-paragrafo">Desserts</p>
      <div className="home-container">
        <Card />
        <Cart />
      </div>
    </div>
  );
};
