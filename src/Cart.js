import React, { Component } from 'react';
class Cart extends Component {


    render() {
      return (<div className='divStyle2'>Cart
  
      <table className="w3-table-all">
          <thead>
            <tr>
  
              <th>Item Name</th>
              <th>Price(USD)</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
  
          <tbody>
            {
              //this.props.menuItems.keys(ObjectTest).map((obj, i) => <td key={i}>{[item]}</td>)
  
  
              //this.props.menuItems.map((item,i)=><td key={i}>{JSON.parse(item)}</td>)
  
              this.props.cartItems.map((element, i) => {
                var t = JSON.parse(element);
                console.log({ t });
                return (
                  <tr key={i}>
                   
                    <td>{t.itemName}</td>
                    <td>{t.price}</td>
                    <td><button
                      onClick={(e) => {
                        this.props.handleAddItem(i)
                      }}>Add to Cart</button></td>
  
                  </tr>
                );
  
                //console.log(JSON.parse(element).sNO);
                //  console.log(JSON.stringify(element));
  
  
  
              })
  
            }
  
  
          </tbody>
        </table>
  
  
  
  
  
      </div>);
    }
  }
  
  export default Cart;