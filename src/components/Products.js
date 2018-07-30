import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { fetchedProducts, createdProduct, addItemToCart } from '../reducer'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0,
      description: '',
      imageUrl: ''
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(response => {
      this.props.fetchedProducts(response.data)
    })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddClick = () => {
    let { name, price, description, imageUrl } = this.state
    let newProduct = {name, price, description, imageUrl}

    axios.post('/api/products', newProduct).then(response => {
      this.props.createdProduct(response.data)
    })
  }

  render() {
    return (
      <div>
        <div style={styles.form}>
          <input onChange={this.handleInputChange} name='name' type="text" placeholder='name'/>
          <input onChange={this.handleInputChange} name='price' type="number" placeholder='price'/>
          <input onChange={this.handleInputChange} name='description' type="text" placeholder='description'/>
          <input onChange={this.handleInputChange} name='imageUrl' type="text" placeholder='image url'/>
          <button onClick={this.handleAddClick}>ADD</button>
        </div>
        <div style={styles.products}>
          {this.props.products && this.props.products.map(product => {
            return (
              <div style={styles.product} key={`product${product.id}`}>
                <img width='200' height='200' src={product.image_url} alt=""/>
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <button onClick={() => this.props.addItemToCart(product)}>add to cart</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    products: state.products
  }
}

let mapActionCreatorsToProps = {
  fetchedProducts,
  createdProduct,
  addItemToCart
}

let connectProducts = connect(mapStateToProps, mapActionCreatorsToProps)
export default connectProducts(Products)

let styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 50,
    width: 400
  },
  products: {
    display: 'flex', 
    flexWrap: 'wrap'
  }, 
  product: {
    border: '1px solid black',
    margin: 10,
    width: '300px',
    padding: 20
  }
}