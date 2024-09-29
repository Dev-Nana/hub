import React from 'react';
import Icon from "../../../assets/icon/icon-add-to-cart.svg";
import './buttoncard.css';

export const ButtonCard = () => {
  return (
    <button className='buttoncard'>
      <img className='buttoncard-icon' src={Icon} alt='carrinho' />
      Add to Cart
    </button>
  );
}
