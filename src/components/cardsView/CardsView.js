/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from '../shopCard/ShopCard';
import './cardsViewStyle.css';

function CardsView({ products }) {
  return (
    <div className="store__CardsView">
      {products.map((product, i) => <ShopCard product={product} key={i} />)}
    </div>
  );
}

CardsView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsView;
