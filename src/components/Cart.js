import React from 'react'
import { connect } from 'react-redux'

import { showCart } from '../reducer'

function Cart(props) {
  return (
    props.showingCart ? 
      <div style={styles.modalOverlay} onClick={() => props.showCart(false)}>
        <div style={styles.modal}>
          <h1>My Cart</h1>
          <div style={styles.products}>
            {props.cart.map(cart => {
              return (
                <div style={styles.product} key={`cart${cart.id}`}>
                  <img width='200' height='200' src={cart.image_url} alt=""/>
                  <h1>{cart.name}</h1>
                  <h3>{cart.price}</h3>
                  <p>{cart.description}</p>
                </div>
              )
            })}
          </div>
        </div> 
      </div>
        : 
      <button onClick={() => props.cart.length && props.showCart(true)}>show cart</button>
  )
}

let mapStateToProps = state => {
  return {
    cart: state.cart,
    showingCart: state.showingCart
  }
}

let mapActionCreatorsToProps = {
  showCart
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Cart)


let styles = {
  modalOverlay: {
    position: 'fixed', 
    top: 0, 
    width: '100%', 
    height: '100%', 
    background: 'rgba(0, 0, 0, 0.7)', 
    zIndex: 10, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modal: { 
    display: 'flex', 
    flexDirection: 'column',
    width: '80%', 
    background: 'white'
  },
  products: {
    display: 'flex'
  },
  product: {
    border: '1px solid black',
    margin: 10,
    width: '200px',
    padding: 20
  }
}