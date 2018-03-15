import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Menu from './Menu.js';
import Cart from './Cart.js';
import TotalPrice from './TotalPrice.js';
class App extends Component {

  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.state = {
      menuItems: [JSON.stringify({ sNo: 1, itemName: 'Paneer', price: 10 }), JSON.stringify({ sNo: 2, itemName: 'Roti', price: 1 }), JSON.stringify({ sNo: 3, itemName: 'Chicken Tikka', price: 12 }), JSON.stringify({ sNo: 4, itemName: 'Soft Drink', price: 2 }), JSON.stringify({ sNo: 5, itemName: 'Banarasi Dum Allo', price: 6 })],
      cartItems: [],
      totalprice: 0
      // menuItems:[new Item(1,'Paneer',10)]
    }
  }

  handleAddItem = (option) => {
    window.alert('handleAddItem');
    console.log(option);


    this.setState = () => { cartItems: this.state.menuItems.filter(option) }
  }


  render() {


    return (
      <div className="App">

        <Header />
        <h1 className="App-intro">
          "Order your food now"
          </h1>
        <div>
          <Menu menuItems={this.state.menuItems} handleAddItem={this.handleAddItem} />
          <Cart cartItems={this.state.cartItems} />

        </div>

        <TotalPrice totalprice={this.state.totalprice} />
        <Footer />

      </div>
    );
  }
}






class Item {
  Item(sNo, itemName, price) {
    this.sNo = sNo;
    this.itemName = itemName;
    this.price = price;

  }
}





export default App;
