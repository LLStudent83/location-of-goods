/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './shopCardStyle.css';

function ShopCard({ product }) {
  const {
    name, price, color, img,
  } = product;
  return (
    <div className="ShopCard">
      <div className="shopCard__img_wrapper">
        <img className="shopCard__img" src={img} alt="вид товара" />
      </div>
      <divr className="shopCard__header">
        {name.toUpperCase()}
      </divr>
      <div className="shopCard__characteristic">
        {color}
      </div>

      <span className="shopCard__price">${price}</span>
      <button className="shopCard__button" type="button">ADD TO CART</button>
    </div>
  );
}

ShopCard.prototype = {
  product: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};

export default ShopCard;
