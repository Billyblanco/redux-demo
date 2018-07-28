import React from 'react';

function CartIcon(props) {
  return (
    <div>
      <span>{props.cart && props.cart.length}</span>
      <i className='fas fa-shopping-cart'></i>
    </div>
  )
}

export default CartIcon