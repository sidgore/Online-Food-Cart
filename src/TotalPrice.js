import React, { Component } from 'react';
class TotalPrice extends Component {

    render() {
        return (
            <div className='totalPriceStyle'>
                <h1>Total Price:</h1>
                {this.props.totalprice}

            </div>
        );
    }
}
export default TotalPrice;