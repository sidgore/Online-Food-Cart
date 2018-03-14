import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://img.buzzfeed.com/buzzfeed-static/static/2015-02/20/9/enhanced/webdr03/original-26505-1424441792-7.jpg?downsize=715:*&output-format=auto&output-quality=auto' className="App-logo" alt="logo" />
          <h1 className="App-title"> Food Ordering App</h1>
        </div>
        <h1 className="App-intro">
          "Order your food now"
          </h1>
        <div>
          <Menu />
          <Cart />

        </div>
        <Footer/>

      </div>
    );
  }
}


class Menu extends Component {



  render() {
    return (<div className='divStyle1'>


      <div >Menu</div>
      <table class="w3-table-all">
        <tr>
          <th>Serial Number</th>
          <th>Item Name</th>
          <th>Price(USD)</th>
          <th></th>
        </tr>

        <tr>

          <td>1</td><td>Paneer</td><td>10.00</td><td><button>Add to Cart</button></td>
        </tr>
        <tr>
          <td>2</td><td>Roti</td><td>1.00</td><td><button>Add to Cart</button></td>
        </tr>
        <tr>
          <td>3</td><td>Chicken</td><td>10.00</td><td><button>Add to Cart</button></td>
        </tr>
        <tr>
          <td>4</td><td>Soft Drink</td><td>2.00</td><td><button>Add to Cart</button></td>
        </tr>
        <tr>
          <td>5</td><td>Dum Aloo</td><td>8.00</td><td><button>Add to Cart</button></td>
        </tr>


      </table>

    </div>
    );
  }
}

class Cart extends Component {


  render() {
    return (<div className='divStyle2'>Cart</div>);
  }
}


const Footer=()=>{

  return(<div className='footer'> &copy; 2018 A Siddharth Gore<sup>&trade;</sup> Production</div>)
} 

export default App;
