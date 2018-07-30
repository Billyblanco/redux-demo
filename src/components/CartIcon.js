import React from 'react';
import { connect } from 'react-redux'

import { showCart } from '../reducer'

function CartIcon(props) {
  return (
    <div onClick={() => props.showCart(true)}>
      <span>{props.cart.length}</span>
      <i className='fas fa-shopping-cart'></i>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {showCart})(CartIcon)