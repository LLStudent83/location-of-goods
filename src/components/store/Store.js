/* eslint-disable no-unused-expressions */
import React from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import './storeStyle.css';
import products from '../products';
import ListView from '../listView/ListView';
import CardsView from '../cardsView/CardsView';

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    // this.arrProducts = products;
    // this.renderListView = this.renderListView.bind(this);
    this.state = {
      icon: 'view_list',
    };
  }

  onSwitch() {
    const { icon } = this.state;
    icon === 'view_list' ? this.setState({ icon: 'view_module' }) : this.setState({ icon: 'view_list' });
  }

  render() {
    const { icon } = this.state;

    return (
      <main className="store__main">
        <IconSwitch icon={icon} onSwitch={() => this.onSwitch()} />
        {icon === 'view_list' ? <CardsView products={products} /> : <ListView products={products} />}

      </main>
    );
  }
}
