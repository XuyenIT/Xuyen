import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:111,
            image:222,
            price:333
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <img src = {this.state.image} alt = {this.state.name}/>
                <h3>{this.state.price}</h3>
                <button>Buy</button>
            </div>
        );
    }
}

export default Product;
