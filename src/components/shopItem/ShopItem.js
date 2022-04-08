/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './shopItemStyle.css';

function ShopItem({ product }) {
  const {
    name, price, color, img,
  } = product;
  return (
    <div className="shopItem">
      <header className="shopItem__header">
        {name.toUpperCase()}
      </header>
      <main>
        <div className="shopItem__characteristic">
          {color}
        </div>
        <div className="shopItem__img_wrapper">
          <img className="shopItem__img" src={img} alt="вид товара" />
        </div>
        <footer className="shopItem__footer">
          <span className="shopItem__price">${price}</span>
          <button className="shopItem__button" type="button">ADD TO CART</button>
        </footer>
      </main>
    </div>
  );
}

ShopItem.prototype = {
  product: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};

export default ShopItem;
