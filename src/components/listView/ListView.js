/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from '../shopItem/ShopItem';
import './listViewStyie.css';

function ListView({ products }) {
  return (
    <div className="store__ListView">

      {products.map((product, i) => <ShopItem product={product} key={i} />)}
    </div>
  );
}

ListView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListView;
