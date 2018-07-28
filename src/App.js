import React, { Component } from 'react';
import './App.css';

import Products from './components/Products'
import Cart from './components/Cart'
import CartIcon from './components/CartIcon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={styles.header}>
         COOLEST STORE EVER!
         <CartIcon />
        </header>
        <Cart />
        <Products />
      </div>
    );
  }
}

export default App;

let styles = {
  header: {
    borderBottom: '1px solid black', 
    padding: 20, 
    marginBottom: 20, 
    display: 'flex', 
    justifyContent: 'space-between'
  }
}
